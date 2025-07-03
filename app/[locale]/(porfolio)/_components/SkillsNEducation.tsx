import { cn } from "@/lib/utils";
import BulletItem from "./BulletItem";

function SkillsAndEducation() {
  return (
    <div className="size-full py-20 flex items-center justify-center">
      <div className="container flex flex-col xl:flex-row lg:justify-between gap-10 text-cyan-900 text-lg">

        {/* SKILLS */}
        <div className="w-full max-w-[600px]">

          <div className="space-y-6 h-[350px]">
            <HeadTitle str="Information" />
            <div className="space-y-1">
              <SubsectionText text="Nguyen Van Tai" />
              <SubsectionText text="01/01/2001" />

              <p className="text-base lg:text-xl font-bold">
                <a href="https://mail.google.com/mail/?view=cm&to=taivn369@gmail.com" target="_blank" className="hover:underline hover:text-primary">taivn369@gmail.com</a>
              </p>

              <p className="text-base lg:text-xl font-bold">
                <a href="tel:0814499952" target="_blank" className="hover:underline hover:text-primary">0814499952</a>
              </p>

              <SubsectionText text="Binh Thanh distric, Ho Chi Minh city" />

            </div>
          </div>

          <div className="space-y-6 h-[350px]">
            <HeadTitle str="Hobbies" />
            <div className="space-y-2">
              <BulletItem>
                <p>Study new things</p>
              </BulletItem>
              <BulletItem>
                <p>Listening to music</p>
              </BulletItem>
              <BulletItem>
                <p>Playing game</p>
              </BulletItem>
              <BulletItem>
                <p>Reading manga</p>
              </BulletItem>
              <BulletItem>
                <p>My favourite youtube channels: Cosden Solutions, Web5ngay, BetterVersion,..</p>
              </BulletItem>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[600px] space-y-10">
          <div className="space-y-6 h-[350px]">
            <HeadTitle str="Skills" />
            <div>
              <SubsectionText text="Technical main skills:" />
              <BulletItem>
                <p>React.JS, Next.JS, Tailwindcss, Typescript.</p>
              </BulletItem>
            </div>

            <div>
              <SubsectionText text="Other skills:" />
              <BulletItem>
                <p>Git, Redux, Zustand, Axios, etc.</p>
              </BulletItem>
            </div>

            <div>
              <SubsectionText text="Soft skills:" />
              <BulletItem>
                <p>Teamwork, time management, task breakdown, and leveraging AI tools to support coding and documentation research.</p>
              </BulletItem>
            </div>
          </div>

          <div className="space-y-6 h-[350px]">
            <HeadTitle str="Education" />
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <SubTitle text="HCM City University of Economics and Finance (UEF)" />
                <p className="text-lg text-nowrap">(2019 - 2023)</p>
              </div>
              <div className="flex items-end gap-2">
                <SubsectionText text="Major:" />
                <p>Information Technology</p>
              </div>
              <div className="flex items-end gap-2">
                <SubsectionText text="GPA:" />

                <p>3.11 / 4.0</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

const HeadTitle = ({ str }: { str: string }) => {
  return (
    <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold inline-block border-b-2 border-primary">{str}</h1>
  )
}

const SubTitle = ({ text, colorClassName }: { text: string, colorClassName?: React.HTMLAttributes<HTMLElement>["className"] }) => {
  return (
    <h3 className={cn("text-lg lg:text-xl xl:text-2xl font-semibold inline-block", colorClassName)}>{text}</h3>
  )
}

const SubsectionText = ({ text }: { text: string }) => {
  return (
    <h4 className="text-base lg:text-xl font-bold">{text}</h4>
  )
}

export default SkillsAndEducation;