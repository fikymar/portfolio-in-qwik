import { component$, useStyles$ } from "@builder.io/qwik";
import {
	QwikCityProvider,
	RouterOutlet,
	ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { QwikSpeak } from "qwik-speak";
import { RouterHead } from "./components/router-head/router-head";

import globalStyles from "./global.css?inline";
import { config, translationFn } from "./speak-config";

export default component$(() => {
	/**
	 * The root of a QwikCity site always start with the <QwikCityProvider> component,
	 * immediately followed by the document's <head> and <body>.
	 *
	 * Dont remove the `<head>` and `<body>` elements.
	 */
	useStyles$(globalStyles);

	return (
		<QwikSpeak config={config} translationFn={translationFn}>
			<QwikCityProvider>
				<head>
					<meta charSet="utf-8" />
					<title>FikyMar | Portfolio</title>
					<RouterHead />
					<meta property="og:title" content="Marcela Fikrlová" />
					<meta property="og:description" content="Frontend developer" />
					<meta
						property="og:image"
						content="https://fikymar.netlify.app/og.jpg"
					/>
					<meta property="og:url" content="https://fikymar.netlify.app/" />
					<link rel="manifest" href="/manifest.json" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
					<link
						href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@300;400;500&display=block"
						rel="stylesheet"
					/>
				</head>
				<body lang="en">
					<RouterOutlet />
					<ServiceWorkerRegister />
				</body>
			</QwikCityProvider>
		</QwikSpeak>
	);
});
