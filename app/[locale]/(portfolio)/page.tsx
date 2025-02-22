// "use client";
// import { useTranslations } from "next-intl";
import { getTranslations } from 'next-intl/server';

// component
import Socials from "@/components/home/Socials";
import { cn } from "@/lib/utils";
import Photo from "@/components/home/Photo";
import Stats from "@/components/home/Stats";
import DownLoadCVBtn from '@/components/home/DownLoadCVBtn';

export default async function Home() {
  const translate = await getTranslations("HomePage")
  return (
    <section className="h-full mt-8">
      <div className="container h-full mx-auto">
        <div className="flex flex-col justify-between items-center xl:flex-row xl:pt-8 xl:pb-24">
          {/* Left block */}
          <div className="text-center xl:text-left">
            <span className="text-xl">{translate("front_end_developer")}</span>
            <h1 className="h1 mb-6">
              {translate("i_am")}
              <br />
              <span className="text-accent">{translate("my_name")}</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              {translate("slogan")}
            </p>
            {/* Socials */}
            <div className="flex flex-col xl:flex-row gap-8 items-center">
              <DownLoadCVBtn />

              <div className="mb-8 xl:mb-0">
                <Socials
                  containerClassName={cn("flex gap-6 items-center")}
                  iconClassName={cn("w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent hover:bg-accent hover:text-primary hover:transition-all durations-500")}
                />
              </div>
            </div>
          </div>

          {/* Right block */}
          <div>
            <Photo />
          </div>

        </div>
        <Stats />
      </div>
    </section>
  )
}
