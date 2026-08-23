import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hendi Saputra — Full-Stack Web Developer",
  description: "Hendi Saputra is a Full-Stack Web Developer focused on AI product development, business automation, web platforms, and system integration.",
  openGraph: { title: "Hendi Saputra — Full-Stack Web Developer", description: "Building web systems that think, automate, and scale.", type: "website", images: [{ url: "/og.webp", width: 1200, height: 630, alt: "Hendi Saputra — Full-Stack Web Developer" }] },
  twitter: { card: "summary_large_image", title: "Hendi Saputra — Full-Stack Web Developer", description: "Building web systems that think, automate, and scale.", images: ["/og.webp"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
