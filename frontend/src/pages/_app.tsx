/** @format */

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { ContactVisiblity } from "../../contexts/ContactUs";
import { SearchVisiblity } from "../../contexts/SearchUs";
import { HomeSection } from "@/components/HomeSection";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContactVisiblity>
      <SearchVisiblity>

        <Header />
        <HomeSection />

        <Component {...pageProps} />
      </SearchVisiblity>
    </ContactVisiblity>
  );
}
