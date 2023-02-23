import { component$ } from "@builder.io/qwik";
import { Speak } from "qwik-speak";

export const Side = component$(() => {
	return (
		<aside class="fixed top-1/3 right-2 pt-4 flex flex-col items-center justify-center gap-2 md:gap-4">
			<a href="https://github.com/fikymar" target="_blank" class="">
				<img
					src="/imgs/logos/github.svg"
					alt="github"
					class="w-8 h-8 blackBlob  group-hover:scale-110 transition"
				/>
			</a>
			<a href="https://www.linkedin.com/in/fikymar/" target="_blank" class="">
				<img
					src="/imgs/svg/linkedin.svg"
					alt="linkedin"
					class="w-8 h-8 blackBlob group-hover:scale-110 transition"
				/>
			</a>
			<a href="mailto:marcela.jaklova@gmail.com">
				<img
					src="/imgs/svg/mailIcon.svg"
					alt="mail"
					class="w-8 h-8 blackBlob group-hover:scale-110 transition"
				/>
			</a>
		</aside>
	);
});

export default component$(() => {
	return (
		<Speak assets={["home"]}>
			<Side />
		</Speak>
	);
});
