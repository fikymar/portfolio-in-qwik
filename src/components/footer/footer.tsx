import { component$ } from "@builder.io/qwik";
import { Speak } from "qwik-speak";

export const Footer = component$(() => {
	return (
		<footer class="border-t border-t-black w-full text-center pt-4 flex items-center justify-center gap-2 md:gap-4">
			<a href="https://github.com/fikymar" target="_blank" class="headerLink">
				Created by FikyMar 2023
			</a>

			<a href="https://github.com/fikymar" target="_blank" class="">
				<img
					src="imgs/logos/github.svg"
					alt="github"
					class="w-8 h-8 blackBlob  group-hover:scale-110 transition"
				/>
			</a>
			<a href="https://www.linkedin.com/in/fikymar/" target="_blank" class="">
				<img
					src="imgs/svg/linkedin.svg"
					alt="linkedin"
					class="w-8 h-8 blackBlob group-hover:scale-110 transition"
				/>
			</a>
			<a href="mailto:marcela.jaklova@gmail.com">
				<img
					src="imgs/svg/mailIcon.svg"
					alt="mail"
					class="w-8 h-8 blackBlob group-hover:scale-110 transition"
				/>
			</a>
		</footer>
	);
});

export default component$(() => {
	return (
		<Speak assets={["home"]}>
			<Footer />
		</Speak>
	);
});
