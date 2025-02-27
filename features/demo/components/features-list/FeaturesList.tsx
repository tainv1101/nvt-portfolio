// import { DemoFeatureListItems } from "@/types/demo";
// import { FaWpforms, FaInfinity } from "react-icons/fa6";
// import { SiReactquery, SiLazyvim } from "react-icons/si";
// import { IoExitOutline } from "react-icons/io5";
// // import Link from "next/link";
// const FEATURES_LIST: DemoFeatureListItems[] = [
//   {
//     name: "Form",
//     url: "#",
//     description: "Use form hook + Zod to validate form",
//     docs: "",
//     icon: FaWpforms,
//   },
//   {
//     name: "React-query (Catching)",
//     url: "#",
//     description: "",
//     docs: "",
//     icon: SiReactquery,
//   },
//   {
//     name: "Permission",
//     url: "#",
//     description: "",
//     docs: "",
//     icon: IoExitOutline,
//   },

//   {
//     name: "Lazy loading",
//     url: "#",
//     description: "",
//     docs: "",
//     icon: SiLazyvim,
//   },
//   {
//     name: "Infinity loading",
//     url: "#",
//     description: "",
//     docs: "",
//     icon: FaInfinity,
//   },
// ];



function FeaturesList() {
  return (
    <div className="space-y-4">
      {/* {FEATURES_LIST.map((el, idx) => (
        <div key={idx} className="flex space-x-4">
          <el.icon />
          <div>
            <p className="font-semibold">{el.name}</p>
            <p className="text-xs">{el.description}</p>
            <Link href={el.url}>Learn more</Link>
          </div>
        </div>
      ))} */}

      <h1>Comming soon...</h1>
    </div>
  );
}

export default FeaturesList;