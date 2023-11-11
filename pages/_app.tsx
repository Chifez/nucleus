import "@/styles/globals.css";
import type { AppProps } from "next/app";
import SidebarProvider from "@/context/sidebarContext";
import Averta from "@next/font/local";

const font = Averta({
  src: "../public/AvertaDemoPE-Regular.otf",
  variable: "--Averta",
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <SidebarProvider>
      <main className={`${font.variable} font-averta`}>
        <Component {...pageProps} />
      </main>
    </SidebarProvider>
  );
}
