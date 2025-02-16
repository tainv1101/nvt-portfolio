"use client"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { LocaleType, routing, usePathname, useRouter } from "@/i18n/routing";
import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";



export default function LocaleSwitcherSelect() {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const locale = useLocale()
  const [isPending, startTransition] = useTransition()
  const handleSelectLocale = (newLocale: string) => {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        // TypeScript sẽ kiểm tra xem các params được sử dụng có khớp với pathname hay không. Tuy nhiên, trong trường hợp này, 
        // pathname và params luôn khớp nhau (vì chúng được lấy từ route hiện tại), nên có thể bỏ qua việc kiểm tra runtime.
        { pathname, params },
        { locale: newLocale as LocaleType }
      );
    })

  }
  return (
    <Select
      disabled={isPending}
      defaultValue={locale}
      value={locale}
      onValueChange={handleSelectLocale}
    >
      <SelectTrigger
        className='w-[80px] h-8 border-white px-2 rounded-sm bg-transparent focus:ring-0 focus:ring-offset-0'
      >
        <Globe className='h-4 w-4' />
        <SelectValue placeholder={locale.toUpperCase()} />
      </SelectTrigger>
      <SelectContent className="bg-primary">
        {routing.locales.map((mapLocale) => (
          <SelectItem key={mapLocale} value={mapLocale}>
            {mapLocale.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}