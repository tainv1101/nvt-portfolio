import { TbChevronCompactDown } from "react-icons/tb";
import Image from "next/image"
import { cn } from "@/lib/utils";
import { FaPhone } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Socials from "./_components/Socials";



export default function IntroSection() {
  return (
    <section id="introduce" className="introduce__wrapper h-dvh w-dvw sticky top-0 bg-gray-50/50 text-primary">
      <div className="container relative h-full mx-auto flex justify-between items-center gap-10">
        <IntroInfo />
        <IntroPhoto />
      </div>
      <ScrollDownIndicator />
    </section>
  );
}

function IntroInfo() {
  return (
    <div className="introduce__info space-y-4 max-w-[600px] opacity-0 transition-all transform translate-y-32 text-lg lg:text-xl">
      <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-yellow-500">Nguyen Van Tai</h1>
      <h2 className="text-2xl md:text-3xl xl:text-4xl">Frontend Developer</h2>

      <p>As a Frontend developer with 1+ year of hands-on experience, I thrive on crafting intuitive, high-performance user interfaces.</p>

      <dl className="space-y-2">

        <div>
          <p>I have experience in:
            <strong className="ml-4">React.js, Next.js, Tailwindcss, Typescript.</strong>
          </p>
        </div>

        <div>
          <p>Other skills:
            <strong className="ml-4">Git, Redux, Zustand, Axios,... </strong>
          </p>
        </div>
      </dl>

      <div className="space-y-2">
        <p className="flex items-center gap-2">
          <IoMail size={25} />
          <a href="https://mail.google.com/mail/?view=cm&to=taivn@gmail.com" target="_blank" className="hover:underline hover:text-accent">taivn@gmail.com</a>
        </p>

        <p className="flex items-center gap-2">
          <FaPhone size={22} />
          <a href="tel:0814499952" target="_blank" className="hover:underline hover:text-accent">0814499952</a>
        </p>

        <Socials
          containerClassName={cn("flex gap-6 items-center")}
          iconClassName={cn("w-9 h-9 border border-accent rounded-full flex  justify-center items-center hover:scale-125 hover:text-primary hover:transition-all durations-500")}
        />
      </div>
    </div>
  )
}

function IntroPhoto() {
  return (
    <div className="max-w-[600px] hidden lg:flex flex-col items-center gap-10">
      <div
        className="introduce__photo relative size-[200px] xl:size-[400px] rounded-full overflow-hidden opacity-0 transition-all transform translate-y-32"
      >
        <Image
          src={"/assets/imgs/cv.jpg"}
          fill
          alt=""
          className="object-cover"
        />
      </div>
      <p className="introduce__description text-xl opacity-0 transition-all transform translate-y-32">Life isn’t about waiting for the storm to pass. It’s about learning to dance in the rain.</p>
    </div>
  )
}
function ScrollDownIndicator() {
  return (
    <div className="scroll__down  fixed left-1/2 translate-x-[-50%] xl:bottom-5 bottom-1 flex flex-col items-center justify-center opacity-0">
      <p className="xl:text-xl text-base">Scroll Down</p>
      <TbChevronCompactDown size={25} className="-mt-1" />
    </div>
  )
}