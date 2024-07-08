import { AppHeader } from "@cmp/AppHeader";
import { AppFooter } from "@cmp/AppFooter";
import { ReactNode } from "react";
import {rem} from "@mantine/core";

type LayoutProviderProps = { children: ReactNode };

export default function LayoutProvider({ children }: LayoutProviderProps) {
  return (
    <div
      style={{
          // backgroundImage: "linear-gradient( -60deg,var(--mantine-color-blue-4) 0%,var(--mantine-color-blue-7) 100%)",
      }}
    >
      <AppHeader />
      <main style={{minHeight:rem(500)}}>{children}</main>
      <AppFooter />
    </div>
  );
}
