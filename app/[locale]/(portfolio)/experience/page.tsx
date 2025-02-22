"use client"
import { FaReact as ReactJS } from "react-icons/fa"
import { BiLogoTypescript as TypeScript, BiLogoTailwindCss as TailwindCSS } from "react-icons/bi";
import { SiNextdotjs as NextJS, SiRemix as Remix } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

const getTechIcon = (tech: string): React.ReactNode => {
  switch (tech) {
    case "NextJS":
      return <NextJS size={40} className="m-auto" />;
    case "ReactJS":
      return <ReactJS size={40} className="m-auto" />;
    case "TypeScript":
      return <TypeScript size={40} className="m-auto" />;
    case "TailwindCSS":
      return <TailwindCSS size={40} className="m-auto" />;
    case "Remix":
      return <Remix size={40} className="m-auto" />;
    default:
      return; // Fallback nếu không tìm thấy
  }
};


const experience = (translate: (key: string) => string) => ({
  title: translate("my_experience"),
  company: "Membee",
  items: [
    {
      id: "merchant",
      name: "Membee Merchant Admin Web",
      role: "Frontend",
      // description: "",
      job: [
        translate("membee_merchant_job_1"),
        translate("membee_merchant_job_2"),
        translate("membee_merchant_job_3"),
        translate("membee_merchant_job_4"),
      ],
      techs: "NextJS, ReactJS, Redux, Axios,..."
    },
    {
      id: "zalo",
      name: "Membee Zalo Mini App",
      role: "Frontend",
      job: [
        translate("membee_zalo_job_1"),
        translate("membee_zalo_job_2"),
        translate("membee_zalo_job_3"),
      ],
      techs: "ReactJS, Recoil, TailwindCSS, Axios,..."
    },
    {
      id: "shopify",
      name: "Membee Shopify Admin App",
      role: "Frontend",
      // description: "",
      job: [
        translate("membee_shopify_job_1"),
        translate("membee_shopify_job_2"),
        translate("membee_shopify_job_3"),
      ],
      techs: "Remix, ReactJS, Zustand, Axios,..."
    }
  ]
})

function Experience() {
  const translate = useTranslations("Experience")
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.4,
          delay: 1,
          ease: "easeIn"
        }
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="merchant"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
            {experience(translate).items.map((project, idx) => (
              <TabsTrigger value={project.id} key={idx}>
                {project.name}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="m-h-[70vh] w-full">
            {experience(translate).items.map((project, idx) => (
              <TabsContent value={project.id} key={idx} className="">
                <div className="inline-flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-accent h3">{project.name}</h3>

                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">

                    <div>
                      <p>{translate("tasks")}</p>
                      {project.job.map((des, idx) => (
                        <p className="text-base leading-7 max-w-[600px] text-white/60 mx-auto xl:mx-0 p-6 bg-[#232329] rounded-md" key={idx}>{`${des}`}</p>
                      ))}

                    </div>
                    <div className="flex flex-col">
                      <p>{translate("technologies")}</p>

                      <p className="text-base leading-7 max-w-[600px] text-white/60 mx-auto xl:mx-0 p-6 bg-[#232329] rounded-md w-full mb-4" key={idx}>{`${project.techs}`}</p>
                      <div className="flex gap-4 bg-[#232329] p-4">
                        {project.techs.split(", ").map((techMap: string) => {
                          // NextJS, ReactJS, Redux, Axios,
                          if (techMap === "..." || techMap === "Zustand" || techMap === "Recoil" || techMap === "Redux" || techMap === "Axios,...") return null
                          const TechIcon = getTechIcon(techMap);

                          // if (!TechIcon) return null
                          return (
                            <TooltipProvider key={techMap}>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  {/* <TagName /> */}
                                  <div className="p-4 border-accent border rounded-md flex-1">
                                    {TechIcon}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>{techMap}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>

      </div>
    </motion.div>
  );
}

export default Experience;