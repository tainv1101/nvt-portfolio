// import { useTranslations } from "next-intl";
import { getTranslations } from 'next-intl/server';
// import Image from "next/image"

// component
import { cn } from "@/lib/utils";
import DownLoadCVBtn from '@/features/home/components/DownLoadCVBtn';
import Socials from '@/features/home/components/Socials';
import Photo from '@/features/home/components/Photo';
// import Stats from '@/features/home/components/Stats';


export default async function Home() {
  const translate = await getTranslations("HomePage")
  return (
    <>
      <title>{`Tai's Portfolio | Home`}</title>
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
              <p className="max-w-[500px] mb-9">
                {translate("slogan")}
              </p>
              {/* Socials */}
              <div className="flex flex-col xl:flex-row gap-8 items-center">
                <DownLoadCVBtn />

                <div className="mb-8 xl:mb-0">
                  <Socials
                    containerClassName={cn("flex gap-6 items-center")}
                    iconClassName={cn("w-9 h-9 border border-accent rounded-full flex justify-center items-center hover:scale-110 hover:text-primary hover:transition-all durations-500")}
                  />
                </div>
              </div>
            </div>

            {/* Right block */}
            <Photo />
          </div>
          {/* <Stats /> */}
        </div>
      </section>
    </>
  )
}

