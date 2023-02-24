import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Speak } from "qwik-speak";
import { About } from "~/components/sections/About";
import Portfolio from "~/components/sections/Portfolio";

export const Home = component$(() => {
	return (
		<>
			<About />
			<Portfolio />
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
	title: "FikyMar | Portfolio",
	meta: [
		{
			name: "description",
			content: "FikyMar portfolio",
		},
	],
};
