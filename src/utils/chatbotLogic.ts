
import { chatbotResponses, defaultResponse } from "../data/chatbotData.ts";

// Add mapping for main sections to button text and route
const sectionButtons = [
  { keywords: ["services", "offerings", "solutions"], button: "See all services", route: "/services" },
  { keywords: ["projects", "portfolio"], button: "See all projects", route: "/projects" },
  { keywords: ["contact", "phone", "email", "address", "location", "reach"], button: "Contact us", route: "/contact" },
  { keywords: ["about", "company", "experience", "background", "who are you"], button: "About us", route: "/about" },
  { keywords: ["gallery"], button: "See gallery", route: "/gallery" },
  { keywords: ["certifications"], button: "See certifications", route: "/certifications" },
];

export const getChatbotResponse = (userInput: string): { text: string; button?: string; route?: string } => {
  const input = userInput.toLowerCase().trim();

  // Find matching response based on keywords
  for (const item of chatbotResponses) {
    for (const keyword of item.keywords) {
      if (input.includes(keyword.toLowerCase())) {
        // Check if this response should have a button
        for (const section of sectionButtons) {
          if (section.keywords.some((k) => input.includes(k))) {
            return { text: item.response, button: section.button, route: section.route };
          }
        }
        return { text: item.response };
      }
    }
  }

  // Check for greeting
  const greetings = [
    "hello",
    "hi",
    "hey",
    "good morning",
    "good afternoon",
    "good evening",
  ];
  if (greetings.some((greeting) => input.includes(greeting))) {
    return { text: "Hello! Welcome to Enerquest Solutions. I am here to help you with information about our services, projects, and more. How can I assist you?" };
  }

  // Check for thanks
  const thanks = ["thank", "thanks", "appreciate"];
  if (thanks.some((thank) => input.includes(thank))) {
    return { text: "You're welcome! Can I help with anything else regarding our services at Enerquest Solutions?" };
  }

  // Check for goodbye
  const goodbyes = ["bye", "goodbye", "see you", "farewell"];
  if (goodbyes.some((goodbye) => input.includes(goodbye))) {
    return { text: "Thank you for your interest in Enerquest Solutions! Feel free to contact us anytime at info@enerquest.in or 9036727331. Have a great day!" };
  }

  // Default response
  return { text: defaultResponse };
};
