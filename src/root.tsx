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
					<link rel="manifest" href="/manifest.json" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
					<link
						href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@300;400;700&family=Over+the+Rainbow&display=swap"
						rel="stylesheet"
					/>
					<RouterHead />
				</head>
				<body lang="en">
					<RouterOutlet />
					<ServiceWorkerRegister />
				</body>
			</QwikCityProvider>
		</QwikSpeak>
	);
});
