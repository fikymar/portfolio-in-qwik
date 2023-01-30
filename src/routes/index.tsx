import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Speak } from "qwik-speak";
import { About } from "~/components/sections/About";

export const Home = component$(() => {
	return (
		<>
			{/* <h1>{t("app.title@@{{name}} demo", { name: "Qwik Speak" })}</h1> */}
			<About />
		</>
	);
});

export default component$(() => {
	return (
		<Speak assets={["home"]}>
			<Home />
		</Speak>
	);
});

export const head: DocumentHead = {
	title: "FikyMar | Home",
	meta: [
		{
			name: "description",
			content: "FikyMar portfolio",
		},
	],
};
