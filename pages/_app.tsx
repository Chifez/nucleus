import "@/styles/globals.css";
import type { AppProps } from "next/app";
import SidebarProvider from "@/context/sidebarContext";
// import "public/AvertaDemoPE-Regular.otf";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SidebarProvider>
      <Component {...pageProps} />
    </SidebarProvider>
  );
}
