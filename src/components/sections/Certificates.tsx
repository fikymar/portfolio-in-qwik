import { component$ } from "@builder.io/qwik";
import { $translate as t, Speak } from "qwik-speak";

export const Certificates = component$(() => {
	return (
		<section id="certificates" class="h-[95vh]">
			<h2 class="text-xl">Certificates</h2>
		</section>
	);
});

export default component$(() => {
	return (
		<Speak assets={["home"]}>
			<Certificates />
		</Speak>
	);
});
