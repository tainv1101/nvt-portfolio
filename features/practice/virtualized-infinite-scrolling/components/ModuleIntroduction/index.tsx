import { truncateString } from "@/lib/utils";

const library = [
  {
    name: "react-window",
    link: "https://www.npmjs.com/package/react-window",
    description: [
      "Helps optimize performance by rendering only the visible elements within the viewport",
      "Instead of rendering the entire list, the library only renders the necessary items, reducing the load on the DOM and improving app responsiveness"
    ]
  },
  {
    name: "react-window-infinite-loader",
    link: "https://www.npmjs.com/package/react-window-infinite-loader",
    description: [
      "It integrates with react-window to provide an infinite scrolling mechanism.",
      "Allows for data fetching only when necessary (when the user scrolls near the end of the list).",
      "Reducing the number of API calls and improving app performance."
    ]
  }
]

const API = [
  {
    name: "Random User",
    link: "https://randomuser.me",
    description: [
      "A free, open-source API for generating random user data.",
    ]
  },
]
function ModuleIntroduction() {
  return (
    <div className="rounded-md border p-4 w-full xl:h-full space-y-4">
      <h4 className="text-lg font-bold">Virtualized Infinite Scrolling Detail:</h4>

      <div className=" space-y-2">
        <h5 className="text-base font-semibold">#Library:</h5>
        <Detail details={library} />
      </div>

      <div className=" space-y-2">
        <h5 className="text-base font-semibold">#API:</h5>
        <Detail details={API} />
      </div>
    </div>
  );
}


function Detail({ details, isHideIndex }: { isHideIndex?: boolean, details: { name: string, description: string[], link?: string }[] }) {
  const libName = (name: string, index: number) => isHideIndex ? name : `${index + 1}. ${name}`
  return (
    details.map((lib, index) => (
      <div key={`lib#${index}`} className="mb-2">
        <p>{libName(lib.name, index)}</p>
        <div className="pl-4 flex flex-col gap-1">
          {lib.description.map((des, idx) => (
            <span key={`${lib.name}#des#${idx}`}>- {des}</span>
          ))}
          {lib.link ? <p>- Link: <a className="underline hover:text-accent" href={lib.link} target="_blank">{truncateString(lib.link, 35)}</a></p> : null}
        </div>
      </div>
    ))
  )
}

export default ModuleIntroduction;