"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Locale, routing, usePathname, useRouter } from "@/i18n/routing";
import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";

export default function LocaleSwitcherSelect() {
  const router = useRouter();

  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale()

  function onSelectChange(nextLocale: string) {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: nextLocale as Locale }
    );
    // window.location.reload();
  }

  return (
    <Select defaultValue={locale} onValueChange={onSelectChange}>
      <SelectTrigger
        className='w-[80px] h-8 border-none bg-transparent focus:ring-0 focus:ring-offset-0 '
      >
        <div className="flex items-center gap-1 border rounded-md px-4 py-1 hover:bg-accent hover:text-primary">
          <Globe className='h-4 w-4 text-muted-foreground' />
          <SelectValue />
        </div>
      </SelectTrigger>
      <SelectContent className="bg-primary">
        {routing.locales.map((locale) => (
          <SelectItem key={locale} value={locale}>
            {locale.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}