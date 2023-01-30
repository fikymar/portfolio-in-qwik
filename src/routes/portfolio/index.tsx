import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Speak } from "qwik-speak";

export const Portfolio = component$(() => {
	return (
		<section id="portfolio" class="h-[95vh] ">
			<h2 class=" text-xl mt-10">Portfolio</h2>
		</section>
	);
});

export default component$(() => {
	return (
		<Speak assets={["home"]}>
			<Portfolio />
		</Speak>
	);
});

export const head: DocumentHead = {
	title: "FikyMar | Portfolio",
};
