/** @format */

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ContactVisiblity } from "../../contexts/ContactUs";
import { SearchVisiblity } from "../../contexts/SearchUs";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContactVisiblity>
      <SearchVisiblity>
        <Component {...pageProps} />
      </SearchVisiblity>
    </ContactVisiblity>
  );
}
