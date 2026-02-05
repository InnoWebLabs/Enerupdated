export interface ChatbotResponse {
  keywords: string[];
  response: string;
}

export const chatbotResponses: ChatbotResponse[] = [
  // General Services
  {
    keywords: ['services', 'what do you do', 'offerings', 'solutions'],
    response: 'Enerquest Solutions Pvt Ltd specializes in a range of services for industrial and commercial use. Our main offerings include:\n• Electrification\n• Building Management Services (BMS)\n• Electrical Fabrication\n• Annual Maintenance Contracts (AMC) for Electrification & BMS Systems'
  },
  
  // Electrification
  {
    keywords: ['electrification', 'electrical', 'ht', 'lt', 'lighting', 'panels'],
    response: 'Our Electrification services cover:\n• HT & LT Distribution Solutions\n• Internal & External Lighting Solutions\n• Earthing & Lightning Protection\n• HT & LT Distribution Panels\n• Breakdown & Liasioning Services\n• CPRI Approved LT Panel Manufacturing'
  },
  
  // Building Management Services (BMS)
  {
    keywords: ['bms', 'building management', 'cctv', 'fire alarm', 'access control'],
    response: 'Our Building Management Services (BMS) include the design and installation of:\n• Access Control Systems\n• CCTV Systems\n• Fire Alarm & Hydrant Systems\n• Public Addressable Systems\n• Gas Suppression Systems\n• Network, Audio & Video Solutions'
  },
  
  // Fabrication
  {
    keywords: ['fabrication', 'electrical fabrication', 'panel manufacturing'],
    response: 'We specialize in Electrical Fabrication and are CPRI Approved Panel Manufacturers, ensuring high-quality and certified LT panels.'
  },
  
  // AMC - Annual Maintenance Contract
  {
    keywords: ['amc', 'maintenance', 'annual maintenance'],
    response: 'We offer Annual Maintenance Contracts (AMC) for both our Electrification and Building Management Systems to ensure they remain in optimal condition.'
  },
  
  // Sectors Served
  {
    keywords: ['sectors', 'industries', 'clients', 'who do you work with'],
    response: 'We provide services to a wide range of sectors, including:\n• Manufacturing Industries\n• IT & BPO Sectors\n• Data Centers\n• Hospitals & Medical Industries\n• Hotels and Malls\n• Warehouses and Airports\n• Commercial Spaces & Multi-store Buildings'
  },
  
  // Contact Information
  {
    keywords: ['contact', 'phone', 'email', 'address', 'location', 'reach'],
    response: 'You can reach Enerquest Solutions through:\n📧 Email: info@enerquest.in\n📞 Phone: 9036727331\n🌐 Website: www.enerquest.in\n📍 Address: #58, 1st cross, K K Road, Maheswari Nagar, T.Dasarahalli, Bangalore - 560057'
  },
  
  // About Company
  {
    keywords: ['about', 'company', 'experience', 'background', 'who are you'],
    response: 'Enerquest Solutions Pvt Ltd is a Government Licensed Electrical Contractor and an ISO 9001:2015 certified company. We have over 25 years of proven industry experience and are experts in industrial and commercial electrification. Our mission is to provide safe, dependable, and cost-effective engineering services.'
  },

  // Projects
  {
    keywords: ['projects', 'clients', 'portfolio'],
    response: 'We have successfully completed numerous national and international projects. Our esteemed clients include Applied Materials, ABB, Ather Energy, Mother Dairy, Radisson Blue plaza, and Unibic, among many others.'
  }
];

export const defaultResponse = "I can help with information about Enerquest Solutions! You can ask me about:\n• Our services (Electrification, BMS)\n• The industries we serve\n• Our company experience\n• How to contact us\n\nHow can I assist you?";