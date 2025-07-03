import { cn } from "@/lib/utils";
import BulletItem from "./BulletItem";

export const projects = [
  {
    title: "01. Membee Merchant Admin Web",
    period: "2023 - 2025",
    position: "Frontend Developer",
    summary: [
      "Worked on a comprehensive business management system, handling multiple modules including clients, loyalty points, news, vouchers, products, orders, agencies, and employee management,...",
      "Integrated external platforms such as Zalo ZNS, Zalo OA, Tomaketer, ViHat, and Incom to enhance communication and automate workflows.",
      "Configured automated notification systems via Zalo ZNS, Zalo OA, and SMS, significantly improving customer engagement and operational efficiency.",
      "Synchronization of orders and customer data through third-party systems like KiotViet, Pancake, Sapo, and Bitrix24.",
    ],
    responsibilities: [
      "Developed new features based on project specifications and requirements.",
      "Regularly updated, optimized, and fixed bugs to enhance application performance and stability.",
      "Collaborated with back-end developers to ensure seamless API integration and data exchange.",
      "Worked with designers and business analysts to implement user interfaces and functionalities that align with business objectives.",
    ],
    technologies: [
      "ReactJS, Next.js, TypeScript, Redux, Axios, and related front-end tools.",
    ],
  },
  {
    title: "02. Membee Zalo Mini App",
    period: "03/2024 - 07/2024",
    position: "Frontend Developer",
    summary: [
      "A web application accessible via Zalo Mini App, enhancing user convenience on the Zalo platform.",
      "Integrated Zalo account login for seamless authentication and user access.",
      "Key features including: placing orders, viewing news, checking reward points, redeeming vouchers, and more.",
    ],
    responsibilities: [
      "Researched and applied Zalo Mini App CLI, API, and Component libraries to understand and utilize the Zalo Mini App development ecosystem.",
      "Integrated Membee API and Zalo Mini App API for seamless data synchronization and an enhanced user experience.",
      "Collaborated with UI/UX designers and backend developers to convert design specifications into functional, responsive interfaces with efficient API handling.",
    ],
    technologies: [
      "ReactJS, Recoil, TailwindCSS, Zalo Components, Zalo CLI,...",
    ],
  },
  {
    title: "03. MemBee Shopify Admin App",
    period: "08/2024 - 10/2024",
    position: "Frontend Developer",
    summary: [
      "Developed a Shopify-embedded web application installable via the Shopify admin interface, enabling businesses to manage customers and products—functioning similarly to a Merchant Admin Portal.",
      "The application was operational for a period before being discontinued due to business direction changes",
    ],
    responsibilities: [
      "Researched and applied Remix, Shopify Polaris, and the architecture for building embedded apps within the Shopify Admin Dashboard.",
      "Collaborated with the back-end team to integrate Membee API and Shopify API, enabling synchronized customer and product data.",
      "Worked with the design team to ensure UI components adhered to Shopify Polaris design guidelines for a native admin experience.",
      "Built reusable UI components to maintain design consistency and boost development efficiency.",
    ],
    technologies: [
      "ReactJS, RemixJS, TailwindCSS, Zustand...",
    ],
  },
];


function ExperientProjects() {
  return (
    <div className="relative container w-full text-base lg:text-lg flex flex-col lg:flex-row items-start justify-between gap-14 text-gray-100/75 pb-6">
      <div className="pin__content w-full max-w-[600px] lg:sticky top-0 self-start space-y-6 pt-5 lg:py-20">

        <Title text="Experience" />
        <div>
          <div className="flex items-end gap-2">
            <SubTitle text="MEMBEE" colorClassName="text-yellow-500" />
            <p>(7/2023 - 3/2025)</p>
          </div>
          <div className="flex items-end gap-2">
            <SubsectionText text="Role:" />
            <p>Frontend Developer</p>
          </div>
        </div>

        <div className="space-y-2">
          <SubsectionText text="Project summary:" />
          <p>MemBee platform – a Loyalty as a Service solution, encompassing applications such as MemBee Web Admin, MemBee POS, and MemBee Wallet, assisting businesses in implementing customer loyalty programs and driving revenue growth.</p>
          <p>Helps businesses increase profits by leveraging existing customers and generating new business opportunities without requiring large investments in Marketing and Sales budgets.</p>
        </div>
      </div>

      {/* RIGHT: SCROLLING */}
      <div className="scroll__content w-full lg:py-20 space-y-10">
        <Title text="Projects" />
        {/* Membee Project 1 */}

        {projects.map((project, index) => (
          <div key={index} className="space-y-4">
            {/* Title + Time */}
            <div className="flex items-start 2xl:items-end 2xl:flex-row flex-col gap-2">
              <SubTitle text={project.title} colorClassName="text-yellow-500" />
              <p className="text-nowrap">({project.period})</p>
            </div>

            {/* Position */}
            <div className="flex items-end gap-2">
              <SubsectionText text="Position:" />
              <p>{project.position}</p>
            </div>

            {/* Summary */}
            {project.summary.length > 0 && (
              <div className="space-y-2">
                <SubsectionText text="Project summary:" />
                {project.summary.map((item, i) => (
                  <BulletItem key={i}>
                    <p>{item}</p>
                  </BulletItem>
                ))}
              </div>
            )}

            {/* Responsibilities */}
            {project.responsibilities.length > 0 && (
              <div className="space-y-2">
                <SubsectionText text="Responsibilities:" />
                {project.responsibilities.map((item, i) => (
                  <BulletItem key={i}>
                    <p>{item}</p>
                  </BulletItem>
                ))}
              </div>
            )}

            {/* Technologies */}
            {project.technologies.length > 0 && (
              <div className="space-y-2">
                <SubsectionText text="Technologies:" />
                {project.technologies.map((tech, i) => (
                  <BulletItem key={i}>
                    <p>{tech}</p>
                  </BulletItem>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}

const Title = ({ text }: { text: string }) => {
  return (
    <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold inline-block border-b-2 border-yellow-500">{text}</h1>
  )
}

const SubTitle = ({ text, colorClassName }: { text: string, colorClassName?: React.HTMLAttributes<HTMLElement>["className"] }) => {
  return (
    <h3 className={cn("text-lg lg:text-xl xl:text-2xl font-semibold inline-block text-yellow-500", colorClassName)}>{text}</h3>
  )
}

const SubsectionText = ({ text }: { text: string }) => {
  return (
    <h4 className="text-base lg:text-xl font-bold">{text}</h4>
  )
}

export default ExperientProjects;