"use client";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const translate = useTranslations("HomePage")
  console.log("router", router)
  return (
    <div className="realive bg-black-100">
      <p>
        {translate("title")}
      </p>
    </div>
  )
}
