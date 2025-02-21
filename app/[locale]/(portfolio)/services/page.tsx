import ServicesCards from "@/components/services/ServicesCards";

const services = [
  {
    num: "01",
    title: "Web Developer",
    description: "Lorem ipsum dolor sit amet conscectur adipiscing elit.",
    href: ""
  },
  {
    num: "02",
    title: "Web Developer",
    description: "Lorem ipsum dolor sit amet conscectur adipiscing elit.",
    href: ""
  },
  {
    num: "03",
    title: "Web Developer",
    description: "Lorem ipsum dolor sit amet conscectur adipiscing elit.",
    href: ""
  },
  {
    num: "04",
    title: "Web Developer",
    description: "Lorem ipsum dolor sit amet conscectur adipiscing elit.",
    href: ""
  }
]

function Services() {
  return (
    <section className="min-[80vh] flex flex-col justify-center py-12 xl:py-0 w-full mt-8">
      <div className="container h-full mx-auto group:">
        <ServicesCards data={services} />
      </div>
    </section>
  );
}

export default Services;