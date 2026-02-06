import { useIntersectionObserver } from "./useIntersectionObserver";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const electrificationServices = [
  "HT & LT Distribution solutions",
  "HT & LT Distribution Panels",
  "Internal and External Lighting Solutions",
  "UPS Inverters, Sales & Services",
  "Electrical & Metal Fabrication Works",
  "Breakdown & Shutdown Activity Services",
  "Earthing and Lightning Protection Solutions",
  "LT Panels Manufacturing",
  "Liasioning Services",
  "AMC Services",
];

const bmsServices = [
  "WLD & RR System",
  "Public Addressable System",
  "Networking Solutions",
  "Gas Suppression System",
  "Fire Hydrant System",
  "Fire Extinguisher System",
  "Fire Alarm System",
  "Audio & Video System",
  "CCTV System",
  "Access Control System",
];

const panelPortfolioServices = [
  "Fire Hydrant Control Panel",
  "Process Automation Panel",
  "DG Synchronization Panel",
  "Intelligent MCC Panel",
  "Chiller Control Panel",
  "AHU Control Panel",
  "Metering Panel",
  "PDB Based Panel",
  "AMF Panel",
  "APFC Panel",
  "PCC Panel",
  "PLC Panel",
  "Main LT Panel",
  "MCC Panel",
  "SDB Panel",
];

const plcServices = [
  "PLC Programming",
  "HMI Development",
  "SCADA Systems",
  "Drive (VFD) Configuration",
  "PLC Control Panel",
];

const keyOfferings = [
  "HT & LT Distribution Solutions",
  "HT & LT Distribution Panels",
  "Liasioning Services",
  "Substation Designing",
  "Earthing and Lightning",
  "Lighting Solutions",
  "Electrification",
  "AMC Services",
];

const keyServices = [
  { name: "HT & LT Distribution Solutions", icon: "fas fa-lightbulb" },
  { name: "HT & LT Distribution Panels", icon: "fas fa-server" },
  { name: "Liasioning Services", icon: "fas fa-random" },
];

const sectors = [
  { name: "Hotels", icon: "fas fa-hotel" },
  { name: "Hospitals", icon: "fas fa-hospital" },
  { name: "Malls", icon: "fas fa-university" },
  { name: "Airport", icon: "fas fa-plane" },
  { name: "Warehouse", icon: "fas fa-warehouse" },
  { name: "Industrial Sectors", icon: "fas fa-industry" },
  { name: "Commercial spaces", icon: "fas fa-building" },
  { name: "Medical Industries", icon: "fas fa-medkit" },
  { name: "Data centers", icon: "fas fa-database" },
  { name: "IT & BPO Sector", icon: "fas fa-desktop" },
  { name: "Food Processing Sector", icon: "fas fa-utensils" },
  { name: "Educational Institutions", icon: "fas fa-school" },
  { name: "Manufacturing Industries", icon: "fas fa-cogs" },
  { name: "Multistore building", icon: "fas fa-city" },
];

const manufacturers = [
  {
    name: "Substation Designing",
    icon: "fas fa-lightbulb",
    desc: "We are experts in switch yards of innumerous types of switching schemes and single line diagram finalization. We also perform survey and investigation of land, considerations of line orientation and taking block levels.",
  },
  {
    name: "Earthing and Lightning",
    icon: "fas fa-bolt",
    desc: "We provide the best of Earthing facilities to our customers in the following ways: Designing of earthing system for Data centers and small earthing systems for industrial installations.",
  },
  {
    name: "Lighting Solutions",
    icon: "fas fa-lightbulb",
    desc: "We offer services for IT companies, outdoor lighting areas, apparels industries, machinery manufacturing industries and warehouse sheds. We provide the following services for indoor and outdoor lighting:",
  },
  {
    name: "Electrification",
    icon: "fas fa-plug",
    desc: "We take up and design Electrical Plan and Development plans for you in the best way to ensure your satisfaction and accomplish it. Our team comprises of experts who assimilate complete AutoCad programming framework for electrical outline drawing.",
  },
  {
    name: "Liasioning Services",
    icon: "fas fa-random",
    desc: "We take care of power sanctioning with the Electricity Board for all the services provided. We also follow up for approval of substations and structures, plan drawings and permissions from electrical inspector.",
  },
  {
    name: "AMC Services",
    icon: "fas fa-tools",
    desc: "Enerquest ensures complete maintenance services as an annual contract for your offices/premises. Our reliable, experienced and technically sound technicians are available round the clock to attend all the electrical requirement.",
  },
];

// Electrification details with real images and more elaborate descriptions
const electrificationDetails: Record<string, { desc: string }> = {
  "HT & LT Distribution solutions": {
    desc: "Our HT & LT Distribution solutions are designed to ensure safe, reliable, and efficient power delivery for all types of facilities. We handle the complete process from load analysis, system design, and equipment selection to installation and commissioning. Our team uses the latest technology and adheres to strict safety standards, ensuring minimal downtime and maximum operational efficiency. We also provide ongoing support and maintenance, making us a trusted partner for your power distribution needs.",
  },
  "HT & LT Distribution Panels": {
    desc: "We specialize in the design, manufacturing, and installation of HT & LT distribution panels tailored to your facility’s requirements. Our panels are equipped with advanced protection, metering, and control features, ensuring safe and efficient power management. We offer both new installations and retrofitting/upgradation of existing panels, with a focus on reliability, safety, and easy maintenance.",
  },
  "Internal and External Lighting Solutions": {
    desc: "Our lighting solutions cover both indoor and outdoor environments, focusing on energy efficiency, safety, and aesthetics. We provide end-to-end services including lighting design, product selection, automation, and installation. Our solutions use the latest LED and smart lighting technologies to reduce energy costs, improve visibility, and enhance the ambiance of your spaces.",
  },
  "UPS Inverters, Sales & Services": {
    desc: "We offer a comprehensive range of UPS and inverter solutions to ensure uninterrupted power for your critical operations. Our services include supply, installation, preventive maintenance, and emergency support for all major brands. We help you select the right system based on your load requirements and provide ongoing support to maximize uptime and equipment life.",
  },
  "Electrical & Metal Fabrication Works": {
    desc: "Our electrical and metal fabrication services include the custom design and manufacture of panel boards, cable trays, support structures, and more. We use high-quality materials and modern machinery to deliver precise, durable, and cost-effective solutions. Our team works closely with you to ensure all fabricated products meet your project’s technical and safety requirements.",
  },
  "Breakdown & Shutdown Activity Services": {
    desc: "We provide rapid response breakdown and planned shutdown services to minimize downtime and ensure safety. Our experienced technicians quickly diagnose and resolve faults, and we coordinate planned shutdowns for maintenance, upgrades, or compliance checks. Our approach prioritizes safety, compliance, and minimal disruption to your operations.",
  },
  "Earthing and Lightning Protection Solutions": {
    desc: "We design and install robust earthing and lightning protection systems to safeguard your assets and personnel from electrical hazards. Our solutions comply with international standards and provide long-term protection against surges, faults, and lightning strikes. We also offer testing, inspection, and maintenance services to ensure ongoing system effectiveness.",
  },
  "LT Panels Manufacturing": {
    desc: "We manufacture LT panels using high-grade materials and advanced technology. Our panels are designed for reliability, safety, and easy maintenance, supporting a wide range of industrial and commercial applications. We offer custom configurations and ensure all panels are thoroughly tested before delivery.",
  },
  "Liasioning Services": {
    desc: "Our liasioning services cover all interactions with electricity boards and regulatory authorities. We manage documentation, technical clarifications, and follow-ups to ensure smooth approvals and compliance for your projects. Our expertise helps you avoid delays and ensures your project meets all statutory requirements.",
  },
  "AMC Services": {
    desc: "Our Annual Maintenance Contract (AMC) services provide regular inspections, preventive maintenance, and 24/7 support for your electrical systems. We tailor AMC packages to your facility’s needs, ensuring maximum uptime, safety, and compliance. Our proactive approach helps prevent breakdowns and extends the life of your equipment.",
  },
};

const bmsDetails: Record<string, { desc: string }> = {
  "WLD & RR System": {
    desc: "Our Water Leak Detection (WLD) and Room Response (RR) systems provide early warning and rapid response to water leaks, protecting your assets and minimizing downtime. We use advanced sensors and monitoring technology for real-time detection and alerting, and our team provides full installation, integration, and ongoing support.",
  },
  "Public Addressable System": {
    desc: "We design and install advanced public address systems for clear, reliable communication across your facility. Our solutions support emergency announcements, routine communications, and integration with fire and security systems, ensuring everyone is informed and safe at all times.",
  },
  "Networking Solutions": {
    desc: "Our networking solutions provide robust, secure connectivity for your building management systems. We design and implement both wired and wireless networks, supporting seamless integration, remote monitoring, and future scalability. Our solutions are tailored to your facility’s unique requirements and growth plans.",
  },
  "Gas Suppression System": {
    desc: "We implement gas suppression systems for critical environments, ensuring rapid fire suppression without damaging sensitive equipment. Our solutions are ideal for data centers, server rooms, and industrial control rooms, and include design, installation, and maintenance services.",
  },
  "Fire Hydrant System": {
    desc: "Our fire hydrant systems are designed for maximum reliability and compliance, providing essential fire protection for your premises. We handle system design, installation, and regular maintenance to ensure readiness in emergencies and compliance with all regulations.",
  },
  "Fire Extinguisher System": {
    desc: "We supply and maintain a full range of fire extinguisher systems, ensuring your facility is prepared for any emergency. Our team provides training, regular inspections, and refilling services, helping you maintain a safe and compliant environment.",
  },
  "Fire Alarm System": {
    desc: "Our fire alarm systems offer early detection and rapid alerting, integrating with other safety systems for comprehensive protection. We use advanced sensors and control panels for reliable performance, and provide full installation, integration, and maintenance services.",
  },
  "Audio & Video System": {
    desc: "We provide state-of-the-art audio and video systems for communication, security, and entertainment, tailored to your facility’s needs. Our solutions include conference room AV, public address, and surveillance integration, all designed for ease of use and reliability.",
  },
  "CCTV System": {
    desc: "Our CCTV systems deliver high-definition surveillance and remote monitoring, enhancing security and peace of mind. We offer end-to-end solutions from camera selection to network setup and monitoring software, with ongoing support and maintenance.",
  },
  "Access Control System": {
    desc: "We install advanced access control systems to manage entry and exit, ensuring only authorized personnel can access sensitive areas. Our solutions include biometric, RFID, and smart card access, with centralized management, reporting, and integration with other security systems.",
  },
};

const plcDetails: Record<string, { desc: string; img: string }> = {
  "PLC Programming": {
    desc: "PLC program development and troubleshooting for industrial automation applications, including machine sequencing, interlocks, and process control. Logic development, testing, commissioning, and system optimization to ensure reliable operation.",
    img: "/images/PLC/IMG01.jpeg",
  },
  "HMI Development": {
    desc: "Design and configuration of user-friendly HMI screens with alarms, trends, and recipe management. Seamless PLC–HMI communication for effective monitoring and control of machines and processes.",
    img: "/images/PLC/IMG02.jpeg",
  },
  "SCADA Systems": {
    desc: "Implementation and support of SCADA systems for real-time monitoring, data acquisition, alarm management, and historical data logging. System integration, reporting, and maintenance to improve plant visibility and operational efficiency.",
    img: "/images/PLC/IMG03.jpeg",
  },
  "Drive (VFD) Configuration": {
    desc: "VFD configuration and commissioning for motor speed and torque control. Parameter setting, protection configuration, and integration with PLC and HMI systems for smooth and energy-efficient operation.",
    img: "/images/PLC/IMG04.jpeg",
  },
  "PLC Control Panel": {
    desc: "Design and support of PLC control panels including component selection, wiring, testing, and documentation. Panels developed in compliance with operational and safety standards and ready for commissioning.",
    img: "/images/PLC/IMG05.jpeg",
  },
};

const panelPortfolioDetails: Record<string, { desc: string }> = {
  "Fire Hydrant Control Panel": {
    desc:
      "A fire alarm control panel (FACP), or simply fire alarm panel is the controlling component of a fire alarm system. The panel receives information from devices designed to detect and report fires, monitors their operational integrity, and provides for automatic control of equipment.",
  },
  "Process Automation Panel": {
    desc:
      "Process automation is defined as the use of software and technologies to automate business processes and functions in order to accomplish defined organizational goals, such as producing a product, hiring and on boarding an employee, or providing customer service.",
  },
  "DG Synchronization Panel": {
    desc:
      "DG Synchronization Panel comprises of special relay that automatically performs synchronization of two or more sources of power. Beside that we also provide load-sharing relays so that each DG shares equal load and load management relays to control starting & shutting off Generators depending upon load requirement.",
  },
  "Intelligent MCC Panel": {
    desc:
      "An intelligent MCC panel is a type of MCC panel with enhanced functionality using advanced features and a communication-enabled motor management system (SIMOCODE) that monitors other lead processes of the motor through the process control system.",
  },
  "Chiller Control Panel": {
    desc:
      "A chiller controller is a machine that removes heat from a liquid coolant via a vapor compression, refrigeration, or absorption refrigeration cycles. This liquid can then be circulated through a heat exchanger to cool equipment, or another process stream (such as air or process water).",
  },
  "AHU Control Panel": {
    desc:
      "An Air Handling Unit (AHU) can only be as good as its weakest link. We ensure via intuitive HVAC Controls that the performance and efficiency of your system are optimized to minimize energy use and maximize output without compromising the environment.",
  },
  "Metering Panel": {
    desc:
      "A panel meter is an instrument that displays an input signal in either a digital or analog form. Many panel meters also include alarm options as well as the ability to connect and transfer data to a computer.",
  },
  "PDB Based Panel": {
    desc:
      "PDB Panels are used for Electric Power Distribution, Fault Protection, and Monitoring of different Electrical Systems. It usually consists of Incomer ACB/MCCB, Switch Fuse Unit (SFU), ELCB, MCCB, MCB, etc. Any Electrical System containing Inductive & Capacitive Loads consumes both Active and Reactive Power.",
  },
  "AMF Panel": {
    desc:
      "These automatic mains failure panels are used as automatically changeover from mains to stand-by generator in case of power failure. Highly demanded in foundries, apartments, sugar, textiles, chemical industries and others, these panels are designed in compliance with the international quality standards.",
  },
  "APFC Panel": {
    desc:
      "APFC is an automatic power factor control panel which is used to improve the power factor, whenever required, by switching ON and OFF the required capacitor bank units automatically.",
  },
  "PCC Panel": {
    desc:
      "PCC (Power Control Centre) Panels are used to supervise and control the voltage and power of the power system. These panels are made of high-quality raw material and are extremely sturdy in fabrication.",
  },
  "PLC Panel": {
    desc:
      "PLCs are often used in factories and industrial plants to control motors, pumps, lights, fans, circuit breakers, and other machinery. Integrated PLC Panel can monitor any process and provide data wherever and however, you need it.",
  },
  "Main LT Panel": {
    desc:
      "Main LT Panel is an electrical transmission board that gets control from a generator or transformer and conveys the same to an electric device and transmission board. We are Manufacturers of LT Panels which are very special designed ACDB with up to IP65 Protection.",
  },
  "MCC Panel": {
    desc:
      "MCC panel (motor control center) is used for motor control of various electrical power Industries. Therefore, it is most important in electricity. MCC panel is an Electrical control panel in LT panels. In other words, it can control the motor from generation to production.",
  },
  "SDB Panel": {
    desc:
      "The sub-distribution panel or board consists of a basic frame with all the necessary electrical components such as main isolating switches.",
  },
};

const manufacturersDetails: Record<string, { desc: string | JSX.Element }> = {
  "Substation Designing": {
    desc: (
      <div>
        <strong>Substation Designing</strong>
        <ul className="list-disc ml-6 mt-2">
          <li>
            Expert planning of switch yards, single line diagrams, and site
            layouts
          </li>
          <li>
            Preparation of technical specifications for all equipment (IS/IEC
            standards)
          </li>
          <li>Design of control buildings, foundations, and civil works</li>
          <li>Lightning protection and optimal illumination solutions</li>
          <li>Support for procurement, approvals, and equipment erection</li>
          <li>Coordination of testing, verification, and commissioning</li>
        </ul>
      </div>
    ),
  },
  "Lighting Solutions": {
    desc: (
      <div>
        <strong>Lighting Solutions for All Sectors</strong>
        <ul className="list-disc ml-6 mb-2">
          <li>
            IT companies, outdoor lighting, apparel industries, machinery
            manufacturing, warehouse sheds
          </li>
        </ul>
        <strong>Indoor and Outdoor Lighting Services:</strong>
        <ol className="list-decimal ml-6 mb-2">
          <li>Lighting Design</li>
          <li>Track Lighting</li>
          <li>Hi-Bay Lighting</li>
          <li>Emergency Lighting & Recessed Can lighting</li>
          <li>Illumination level consideration</li>
          <li>Decorative and Accent Lighting</li>
          <li>Post lighting</li>
          <li>Flood Lighting</li>
        </ol>
      </div>
    ),
  },
  Electrification: {
    desc: (
      <div>
        <strong>Comprehensive Electrical Plan & Development</strong>
        <p className="mb-2">
          We design and execute electrical plans to ensure your satisfaction and
          project success. Our team uses advanced AutoCAD programming for
          electrical outline drawings, provides budget estimates, and manages
          material procurement and delivery. We take full responsibility for
          both design and construction, including project management and
          compliance.
        </p>
        <strong>Our Services Include:</strong>
        <ul className="list-disc ml-6 mb-2">
          <li>Power Bus Bar & Lighting Trunking</li>
          <li>Cable Ducts & Ladders</li>
          <li>Cabling & Termination</li>
          <li>Power wiring & Capacitor banks</li>
          <li>
            Switch gears & Switch Board assembly (High, Medium & Low voltages)
          </li>
          <li>Conducting & Cable management system – Wall, Floor</li>
          <li>Voice & Data Networking solutions</li>
          <li>Indoor & Outdoor substation structures</li>
          <li>HT & LT Distribution Panels</li>
        </ul>
      </div>
    ),
  },
  "Earthing and Lightning": {
    desc: (
      <div>
        <strong>Earthing and Lightning Protection</strong>
        <ul className="list-disc ml-6 mb-2">
          <li>
            Design of earthing systems for data centers and industrial
            installations
          </li>
          <li>
            Lightning protection system design and installation for all facility
            types
          </li>
          <li>Compliance with safety standards and regulations</li>
        </ul>
      </div>
    ),
  },
  "Liasioning Services": {
    desc: (
      <div>
        <strong>Liasioning Services</strong>
        <ul className="list-disc ml-6 mb-2">
          <li>Power sanctioning with the Electricity Board</li>
          <li>Approval follow-up for substations and structures</li>
          <li>Plan drawings and permissions from electrical inspector</li>
          <li>
            Documentation, technical clarifications, and regulatory compliance
          </li>
        </ul>
      </div>
    ),
  },
  "AMC Services": {
    desc: (
      <div>
        <strong>Annual Maintenance Contract (AMC) Services</strong>
        <ul className="list-disc ml-6 mb-2">
          <li>Complete maintenance services for offices/premises</li>
          <li>24/7 support by experienced and technically sound technicians</li>
          <li>
            Preventive maintenance, emergency support, and regular inspections
          </li>
          <li>Maximizing uptime and safety</li>
        </ul>
      </div>
    ),
  },
};

export default function ServicesSection({
  homepage = false,
}: {
  homepage?: boolean;
}) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.01,
  });
  const [modal, setModal] = useState<{
    title: string;
    desc: string | JSX.Element;
    img: string;
  } | null>(null);
  const navigate = useNavigate();

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-100"
    >
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {/* Hero card with background */}
          <div className="mx-auto w-full max-w-5xl mb-16">
            <div className="relative z-20 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-10 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Our Services
              </h2>
              {homepage && (
                <div className="w-24 h-0.5 bg-gray-300 mx-auto mb-6 rounded-full" />
              )}
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                {homepage
                  ? "We provide our customers with excellent quality and professional electrical contracting and maintenance services. We are experienced in the commercial and retail sector and have built a foundation of a strong customer base. We at Enerquest are dedicated to give the best quality service to our customers."
                  : "We provide our customers with excellent quality and professional electrical contracting and maintenance services. We are experienced in the commercial and retail sector and have built a foundation of a strong customer base. We at Enerquest are dedicated to give the best quality service to our customers."}
              </p>
              {homepage && (
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs border border-blue-100 inline-flex items-center gap-2">
                    <i className="fas fa-bolt" /> Electrical Contracting
                  </span>
                  <span className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs border border-green-100 inline-flex items-center gap-2">
                    <i className="fas fa-building" /> BMS Solutions
                  </span>
                  <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs border border-amber-100 inline-flex items-center gap-2">
                    <i className="fas fa-tools" /> Turnkey Projects
                  </span>
                </div>
              )}
            </div>
          </div>

          {!homepage && (
            <>
              {/* Electrification Section - Glassy, Modern */}
              <div className="mb-14">
                <h3 className="text-2xl md:text-3xl font-bold text-blue-700 flex items-center mb-2">
                  <i className="fas fa-bolt mr-2 text-blue-500" />{" "}
                  Electrification
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-700 mb-6 rounded-full" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {electrificationServices.map((item, idx) => (
                    <div
                      key={idx}
                      className="backdrop-blur-md bg-blue-50/60 border border-blue-100 rounded-xl px-5 py-3 flex items-center gap-3 shadow-sm hover:shadow-lg transition-all duration-200 hover:scale-[1.03] cursor-pointer"
                      onClick={() =>
                        setModal({
                          title: item,
                          desc: electrificationDetails[item].desc,
                          img: "",
                        })
                      }
                    >
                      <span className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-500 shadow text-white text-base">
                        <i className="fas fa-dot-circle" />
                      </span>
                      <span className="text-blue-900 font-medium text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Panel Portfolio Section - Glassy, Modern */}
              <div className="mb-14">
                <h3 className="text-2xl md:text-3xl font-bold text-purple-700 flex items-center mb-2">
                  <i className="fas fa-th mr-2 text-purple-500" /> Panel Portfolio
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-purple-700 mb-6 rounded-full" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {panelPortfolioServices.map((item, idx) => (
                    <div
                      key={idx}
                      className="backdrop-blur-md bg-purple-50/60 border border-purple-100 rounded-xl px-5 py-3 flex items-center gap-3 shadow-sm hover:shadow-lg transition-all duration-200 hover:scale-[1.03] cursor-pointer"
                      onClick={() => setModal({title: item, desc: panelPortfolioDetails[item].desc, img: ""})}
                    >
                      <span className="w-7 h-7 flex items-center justify-center rounded-full bg-purple-500 shadow text-white text-base">
                        <i className="fas fa-square" />
                      </span>
                      <span className="text-purple-900 font-medium text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* BMS Section - Glassy, Modern */}
              <div className="mb-14">
                <h3 className="text-2xl md:text-3xl font-bold text-green-700 flex items-center mb-2">
                  <i className="fas fa-building mr-2 text-green-500" /> BMS
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-green-700 mb-6 rounded-full" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {bmsServices.map((item, idx) => (
                    <div
                      key={idx}
                      className="backdrop-blur-md bg-green-50/60 border border-green-100 rounded-xl px-5 py-3 flex items-center gap-3 shadow-sm hover:shadow-lg transition-all duration-200 hover:scale-[1.03] cursor-pointer"
                      onClick={() =>
                        setModal({
                          title: item,
                          desc: bmsDetails[item].desc,
                          img: "",
                        })
                      }
                    >
                      <span className="w-7 h-7 flex items-center justify-center rounded-full bg-green-500 shadow text-white text-base">
                        <i className="fas fa-check-circle" />
                      </span>
                      <span className="text-green-900 font-medium text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* PLC & Automation Section - Glassy, Modern */}
              <div className="mb-14">
                <h3 className="text-2xl md:text-3xl font-bold text-amber-700 flex items-center mb-2">
                  <i className="fas fa-microchip mr-2 text-amber-500" /> PLC &
                  Automation Solutions
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-700 mb-6 rounded-full" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {plcServices.map((item, idx) => (
                    <div
                      key={idx}
                      className="backdrop-blur-md bg-amber-50/60 border border-amber-100 rounded-xl px-5 py-3 flex items-center gap-3 shadow-sm hover:shadow-lg transition-all duration-200 hover:scale-[1.03] cursor-pointer"
                      onClick={() =>
                        setModal({
                          title: item,
                          desc: plcDetails[item].desc,
                          img: plcDetails[item].img,
                        })
                      }
                    >
                      <span className="w-7 h-7 flex items-center justify-center rounded-full bg-amber-500 shadow text-white text-base">
                        <i className="fas fa-cogs" />
                      </span>
                      <span className="text-amber-900 font-medium text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {homepage && (
            <div className="flex justify-center mt-6">
              <button
                className="text-blue-700 font-semibold hover:underline flex items-center gap-2"
                onClick={() => navigate("/services")}
                aria-label="View all services"
              >
                View all services
                <span className="text-blue-700">→</span>
              </button>
            </div>
          )}

          {!homepage && (
            <>
              {/* Key Services Offering Section - Glassy, Modern */}
              <div className="mb-14">
                <h3 className="text-2xl md:text-3xl font-bold text-purple-700 flex items-center mb-2">
                  <i className="fas fa-star mr-2 text-purple-500" /> Key
                  Services Offering
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-purple-700 mb-6 rounded-full" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {keyOfferings.map((item, idx) => (
                    <div
                      key={idx}
                      className="backdrop-blur-md bg-purple-50/60 border border-purple-100 rounded-xl px-5 py-3 flex items-center gap-3 shadow-sm hover:shadow-lg transition-all duration-200 hover:scale-[1.03]"
                    >
                      <span className="w-7 h-7 flex items-center justify-center rounded-full bg-purple-500 shadow text-white text-base">
                        <i className="fas fa-dot-circle" />
                      </span>
                      <span className="text-purple-900 font-medium text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Services Offering */}
              <div className="mb-20">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2">
                  Key Services Offering
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-700 mx-auto mb-10 rounded-full" />
                <div className="flex flex-wrap justify-center gap-10">
                  {keyServices.map((service, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center rounded-full border-4 border-yellow-400 mb-3 bg-white shadow-lg">
                        <i
                          className={`${service.icon} text-2xl text-gray-700`}
                        />
                      </div>
                      <span className="text-center text-gray-700 font-medium max-w-[160px]">
                        {service.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sectors We Serve */}
              <div className="mb-20">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2">
                  We provide services to sectors
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-700 mx-auto mb-10 rounded-full" />
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
                  {sectors.map((sector, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="w-14 h-14 flex items-center justify-center rounded-full border-4 border-yellow-400 mb-2 bg-white shadow-md">
                        <i className={`${sector.icon} text-xl text-gray-700`} />
                      </div>
                      <span className="text-center text-gray-700 text-sm font-medium max-w-[100px]">
                        {sector.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Manufacturers Section - Glassmorphism, Compact, Transparent */}
              <div className="py-10 px-2 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-2 tracking-tight drop-shadow-sm">
                  Manufacturers of All Kinds of Electrical Lt Panel Boards
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8 rounded-full opacity-80" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {manufacturers.map((item, idx) => (
                    <div
                      key={idx}
                      className="backdrop-blur-md bg-white/60 border border-blue-100 rounded-xl p-6 flex flex-col items-center shadow-md hover:shadow-xl transition-all duration-200 group"
                      style={{ minHeight: 270 }}
                    >
                      <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-yellow-400 mb-3 bg-white/80 shadow-sm">
                        <i
                          className={`${item.icon} text-2xl text-yellow-400`}
                        />
                      </div>
                      <h3 className="text-base font-semibold text-gray-900 mb-1 text-center tracking-wide group-hover:text-yellow-500 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-gray-700 text-center mb-3 text-xs leading-relaxed">
                        {item.desc}
                      </p>
                      <button
                        className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-1.5 px-4 rounded-full text-xs transition-colors shadow group-hover:shadow-md mt-auto"
                        onClick={() =>
                          setModal({
                            title: item.name,
                            desc: manufacturersDetails[item.name]?.desc || "",
                            img: "",
                          })
                        }
                      >
                        READ MORE
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Modal Popup */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white/90 rounded-2xl shadow-2xl p-6 max-w-md w-full relative animate-fade-in-up">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
              onClick={() => setModal(null)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {modal.title}
            </h2>
            {typeof modal.desc === "string" ? (
              <p className="text-gray-700 text-base whitespace-pre-line">
                {modal.desc}
              </p>
            ) : (
              <div className="text-gray-700 text-base">{modal.desc}</div>
            )}
            {modal.img && (
              <div className="mt-4 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                <img
                  src={modal.img}
                  alt={modal.title}
                  className="w-full h-auto object-cover max-h-60"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
