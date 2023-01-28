import { component$ } from "@builder.io/qwik";
import { $translate as t, Speak } from "qwik-speak";

export const About = component$(() => {
	return (
		<section id="about" class="h-[95vh] mt-10">
			<h2 class="text-xl">{t("home.about@@about")}</h2>
		</section>
	);
});

export default component$(() => {
	return (
		<Speak assets={["home"]}>
			<About />
		</Speak>
	);
});
