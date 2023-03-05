import { component$ } from "@builder.io/qwik";
import { Speak } from "qwik-speak";

export const Side = component$(() => {
	return (
		<aside class="hidden md:flex fixed top-1/3 right-2 pt-4  flex-col items-center justify-center gap-2 md:gap-4 text-pink-300">
			<a href="https://github.com/fikymar" target="_blank" class="rounded-full">
				<img
					src="/imgs/logos/github.svg"
					alt="github"
					class="w-8 h-8 blackBlob group-hover:scale-110 "
				/>
			</a>
			<a
				href="https://www.linkedin.com/in/fikymar/"
				target="_blank"
				class="w-8 h-8 blackBlob group-hover:scale-110 "
			>
				<img
					src="/imgs/svg/linkedin.svg"
					alt="linkedin"
					class="w-8 h-8 blackBlob group-hover:scale-110 "
				/>
			</a>
			<a href="mailto:marcela.jaklova@gmail.com" class="rounded-full">
				<img
					src="/imgs/svg/mailIcon.svg"
					alt="mail"
					class="w-8 h-8 blackBlob group-hover:scale-110 "
				/>
			</a>
			<a href="tel:+420739567245">
				<img
					src="/imgs/svg/phoneIcon.svg"
					alt="github"
					class="w-8 h-8 blackBlob group-hover:scale-110 "
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
