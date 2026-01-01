import { component$ } from "@builder.io/qwik";
import { $translate as t, Speak } from "qwik-speak";

export const logos = [
  { src: "/imgs/logos/html.svg", title: "HTML" },
  { src: "/imgs/logos/css.svg", title: "CSS" },
  { src: "/imgs/logos/git.svg", title: "Git" },
  { src: "/imgs/logos/js.svg", title: "JavaScript" },
  { src: "/imgs/logos/ts.svg", title: "TypeScript" },
  { src: "/imgs/logos/angular.svg", title: "Angular" },
  { src: "/imgs/logos/react.svg", title: "React js" },
  { src: "/imgs/logos/next.svg", title: "Next js" },
  { src: "/imgs/logos/umbracblue.svg", title: "Umbraco" },
  { src: "/imgs/logos/tailwind.svg", title: "Tailwind" },
  { src: "/imgs/logos/styledcomponents.svg", title: "Styled Components" },
  { src: "/imgs/logos/sass.svg", title: "SCSS" },
  { src: "/imgs/logos/figma.svg", title: "Figma" },
  { src: "/imgs/logos/photoshop.svg", title: "Photoshop" },
  { src: "/imgs/logos/indesign.svg", title: "InDesign" },
  { src: "/imgs/logos/inkscape.svg", title: "Inkscape" },
];

export const triedLogos = [
  { src: "/imgs/logos/dotnet.svg", title: "DotNet" },
  { src: "/imgs/logos/UE.svg", title: "UE 5" },
  { src: "/imgs/logos/c++.svg", title: "C++" },
  { src: "/imgs/logos/blender.svg", title: "Blender" },
  { src: "/imgs/logos/illustrator.svg", title: "Illustrator" },
  { src: "/imgs/logos/jQuery.svg", title: "jQuery" },
  { src: "/imgs/logos/vue.svg", title: "Vue" },
  { src: "/imgs/logos/xd.svg", title: "Xd" },
  { src: "/favicon.svg", title: "Qwik" },
  { src: "/imgs/logos/gulp.svg", title: "Gulp" },
  { src: "/imgs/logos/wp.png", title: "WordPress" },
  { src: "/imgs/logos/bitbucket.svg", title: "Bitbucket" },
  { src: "/imgs/logos/github.svg", title: "GitHub" },
];

export const About = component$(() => {
	return (
		<section
			id="about"
			class="mt-28 scroll-mt-28 flex flex-col items-center gap-20 justify-center text-center"
		>
			<div>
				<h1 class="text-3xl md:text-5xl font-medium">Marcela Fikrlová</h1>
				<p class="text-base font-light">{t("home.aboutDesc")}</p>
			</div>
			<p class="font-medium">{t("home.tools")}</p>
			<div class="flex gap-3 flex-wrap justify-center ">
				{logos.map(({ src, title }) => (
					<div class="group max-w-[3rem]" key={title}>
						<img
							src={src}
							alt={title}
							class="w-10 h-10 blackBlob group-hover:scale-110 transition"
						/>
						<span class="invisible text-xs group-hover:visible font-sans">
							{title}
						</span>
					</div>
				))}
			</div>
			<p class="font-medium">{t("home.toolsTried")}</p>
			<div class="flex gap-3 flex-wrap justify-center">
				{triedLogos.map(({ src, title }) => (
					<div class="group max-w-[3rem]    h-auto" key={title}>
						<img
							src={src}
							alt={title}
							class="w-10 h-10 blackBlob group-hover:scale-110 transition"
						/>
						<span class="invisible group-hover:visible text-xs font-sans">
							{title}
						</span>
					</div>
				))}
			</div>
			<img
				src="/imgs/ai2.webp"
				class="fixed left-0 bottom-0 w-20 md:w-40 transition-all z-[60]"
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
