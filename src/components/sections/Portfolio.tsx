import { component$ } from "@builder.io/qwik";
import { Speak } from "qwik-speak";

export const Portfolio = component$(() => {
	return (
		<section id="portfolio" class="h-[95vh]">
			<h2 class=" text-xl">Portfolio</h2>
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
