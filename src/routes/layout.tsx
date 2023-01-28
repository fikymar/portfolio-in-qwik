import { component$, Slot, useStore, useClientEffect$ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { config } from "~/speak-config";
import Header from "../components/header/header";

export default component$(() => {
	const store = useStore({ pageX: 0, pageY: 0 });
	useClientEffect$(() => {
		window.addEventListener("mousemove", (e) => {
			store.pageX = e.pageX;
			store.pageY = e.pageY;
		});
	});

	return (
		<>
			<div class="bg-zinc-100 text-black">
				<main>
					<Header />
					<section>
						<Slot />
					</section>
				</main>
				<footer>
					<a href="https://github.com/fikymar" target="_blank" class="">
						Created by FikyMar 2023
					</a>
				</footer>
			</div>
			<div
				class="cursor"
				style={{ left: store.pageX + "px", top: store.pageY + "px" }}
			/>
		</>
	);
});

export const onRequest: RequestHandler = ({ request, response }) => {
	const acceptLanguage = request.headers?.get("accept-language");

	let lang: string | null = null;
	// Try to use user language
	if (acceptLanguage) {
		lang = acceptLanguage.split(";")[0]?.split(",")[0];
	}

	// Set locale in response
	response.locale = lang || config.defaultLocale.lang;
};
