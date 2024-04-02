/** @format */

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ContactVisiblity } from "../../contexts/ContactUs";
import { SearchVisiblity } from "../../contexts/SearchUs";
import { SearchValue } from "../../contexts/SearchValue";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContactVisiblity>
      <SearchVisiblity>
        <SearchValue>
          <Component {...pageProps} />
        </SearchValue>
      </SearchVisiblity>
    </ContactVisiblity>
  );
}
