import { component$ } from "@builder.io/qwik";
import { $translate as t, Speak } from "qwik-speak";

export const logos = [
	{ src: "imgs/logos/html.svg", title: "HTML" },
	{ src: "imgs/logos/css.svg", title: "CSS" },
	{ src: "imgs/logos/js.svg", title: "JavaScript" },
	{ src: "imgs/logos/react.svg", title: "React js" },
	{ src: "imgs/logos/next.svg", title: "Next js" },
	{ src: "imgs/logos/tailwind.svg", title: "Tailwind" },
	{ src: "imgs/logos/styledcomponents.svg", title: "Styled Components" },
	{ src: "imgs/logos/sass.svg", title: "SCSS" },
	{ src: "imgs/logos/figma.svg", title: "Figma" },
	{ src: "imgs/logos/git.svg", title: "Git" },
	{ src: "imgs/logos/github.svg", title: "Github" },
	{ src: "imgs/logos/bitbucket.svg", title: "Bitbucket" },
];

export const About = component$(() => {
	return (
		<section class="h-screen overflow-hidden mt-10 grid place-items-center">
			<h1 class="text-3xl">Marcela Fikrlová</h1>
			<p class="text-base">{t("home.aboutDesc@@aboutDesc")}</p>
			<h3 class="">{t("home.tools@@tools")}</h3>
			<div class="flex gap-3">
				{logos.map(({ src, title }) => (
					<div class="group max-w-[3rem]">
						<img
							src={src}
							alt={title}
							class="w-10 h-10 grayscale aturate-50 group-hover:grayscale-0 group-hover:scale-110 group-hover:contrast-100 transition"
						/>
						<span class="invisible group-hover:visible text-sm">{title}</span>
					</div>
				))}
			</div>
			<h3 class="">{t("home.toolsTried@@toolsTried")}</h3>
			<img src="/imgs/ai2.png" class="absolute left-0 bottom-0" />
			<footer>
				<a
					href="https://github.com/fikymar"
					target="_blank"
					class="absolute bottom-0"
				>
					Created by FikyMar 2023
				</a>
			</footer>
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
