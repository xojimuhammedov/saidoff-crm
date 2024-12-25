import "@/styles/globals.css";
import AppContextProvider from "../context";
import UiProvider from "@/ui";
import 'flowbite/dist/flowbite.min.css';
import { useEffect } from "react";
export default function App({ Component, pageProps }) {

  useEffect(() => {
    import('flowbite'); 
  }, []);

  return (
    <AppContextProvider>
      <UiProvider>
        <Component {...pageProps} />
      </UiProvider>
    </AppContextProvider>
  );
}
