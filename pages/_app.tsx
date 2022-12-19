import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "components/layout";
import { StoreContextProvider } from "context/StoreContext";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<StoreContextProvider>
			<Layout>
				<Toaster />
				<Component {...pageProps} />
			</Layout>
		</StoreContextProvider>
	);
}
