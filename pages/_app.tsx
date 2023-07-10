import { AppProps } from "next/app";
import "../styles/globals.css";
import PlausibleProvider from "next-plausible";

const NEXT_PUBLIC_WEBSITE_DOMAIN = process.env.NEXT_PUBLIC_WEBSITE_DOMAIN;
if (NEXT_PUBLIC_WEBSITE_DOMAIN == null) {
  throw new Error("NEXT_PUBLIC_WEBSITE_DOMAIN is not set");
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <PlausibleProvider domain={NEXT_PUBLIC_WEBSITE_DOMAIN}>
        <Component {...pageProps} />
      </PlausibleProvider>
    </>
  );
};

export default App;
