import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { BlueprintHUD } from "@/components/layout/BlueprintHUD";
import { CursorLabel } from "@/components/interaction/CursorLabel";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ivan Sierra — UI/UX & Experience Designer",
    template: "%s — Ivan Sierra",
  },
  description:
    "UI/UX & Experience Designer with 13+ years crafting interfaces, design systems and information architecture for global tech companies.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-dvh flex flex-col">
        <BlueprintHUD />
        {children}
        <CursorLabel />
      </body>
    </html>
  );
}
