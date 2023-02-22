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

export const triedLogos = [
	{ src: "imgs/logos/php.svg", title: "PHP" },
	{ src: "imgs/logos/laravel.svg", title: "Laravel" },
	{ src: "imgs/logos/vue.svg", title: "Vue" },
	{ src: "imgs/logos/xd.svg", title: "Xd" },
	{ src: "imgs/logos/react.svg", title: "React native" },
	// { src: "imgs/pixlr.webp", title: "Pixlr" },
];

export const About = component$(() => {
	return (
		<section class="h-[88vh] overflow-hidden mt-10 grid place-items-center text-center">
			<h1 class="text-3xl">Marcela Fikrlová</h1>
			<p class="text-base">{t("home.aboutDesc")}</p>
			<h3 class="">{t("home.tools")}</h3>
			<div class="flex gap-3 flex-wrap justify-center ">
				{logos.map(({ src, title }) => (
					<div class="group max-w-[3rem]" key={title}>
						<img
							src={src}
							alt={title}
							class="w-10 h-10 blackBlob group-hover:scale-110 transition"
						/>
						<span class="invisible group-hover:visible text-sm font-sans">
							{title}
						</span>
					</div>
				))}
			</div>
			<h3 class="">{t("home.toolsTried")}</h3>
			<div class="flex gap-3 flex-wrap justify-center">
				{triedLogos.map(({ src, title }) => (
					<div class="group max-w-[3rem]" key={title}>
						<img
							src={src}
							alt={title}
							class="w-10 h-10 blackBlob group-hover:scale-110 transition"
						/>
						<span class="invisible group-hover:visible text-sm font-sans">
							{title}
						</span>
					</div>
				))}
			</div>
			<img
				src="/imgs/ai2.webp"
				class="fixed left-0 bottom-0 w-20 md:w-40 hover:w-56 transition-all"
			/>
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
