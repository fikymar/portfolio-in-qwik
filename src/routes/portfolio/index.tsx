import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Speak, $translate as t } from "qwik-speak";
import { Card } from "~/components/card";

export const projects = [
	{
		title: "Loonoy",
		link: "https://www.loonoy.com/",
		img: "/imgs/loonoy.png",
		desc: "loonoyDesc",
		techs: [
			"Next",
			"Redux",
			"Styled Components",
			"Typescript",
			"Framer motion",
		],
		img2: "/imgs/loonoy2.png",
	},
	{
		title: "This portfolio",
		link: "https://fikymar.netlify.app/",
		code: "https://github.com/fikymar/portfolio-in-qwik",
		img: "/imgs/portfolio1.webp",
		desc: "portfolioDesc",
		techs: ["Qwik", "Typescript", "Qwik Speak"],
		img2: "/imgs/portfolio2.webp",
	},
	{
		title: "Shopiik",
		link: "https://shopiik.netlify.app/",
		img: "/imgs/shopiik1.png",
		img2: "/imgs/shopiik2.png",
		code: "https://github.com/fikymar/eshop",
		desc: "shopiikDesc",
		techs: [
			"Next",
			"Redux",
			"Tailwind",
			"Framer motion",
			"Dark mode",
			"Firebase-auth",
			"Firestore",
			"Typescript",
		],
	},
	// {
	// 	title: "Visap",
	// 	link: "https://www.visap.cz/",
	// 	img: "/imgs/visap1.png",
	// 	img2: "/imgs/visap2.png",
	// 	desc: "visapDesc",
	// 	techs: ["JQuery", "HTML", "CSS"],
	// },
	// {
	// 	title: "Forest.io",
	// 	link: "https://forestio1.netlify.app/",
	// 	img: "/imgs/forestio1.png",
	// 	img2: "/imgs/forestio2.png",
	// 	desc: "forestioDesc",
	// 	techs: ["Next", "Tailwind", "Typescript"],
	// },
	{
		title: "Chytrá nemovitost",
		link: "https://chytranemovitost.cz/",
		img: "/imgs/chytra1.png",
		img2: "/imgs/chytra2.png",
		desc: "chytraDesc",
		techs: ["Next", "Scss"],
	},
	{
		title: "Začni učit",
		link: "https://zacniucit.cz/",
		img: "/imgs/zacniucit1.png",
		img2: "/imgs/zacniucit2.png",
		desc: "zacniucitDesc",
		techs: ["Next", "Styled Components", "Typescript"],
	},
	{
		title: "Studywise",
		link: "https://studywise.netlify.app/",
		img: "/imgs/studywise1.png",
		img2: "/imgs/studywise2.png",
		desc: "studywiseDesc",
		techs: [
			"Next",
			"Styled components",
			"Typescript",
			"Next-translate",
			"Stripe",
		],
	},
];

export const Portfolio = component$(() => {
	return (
		<section id="portfolio" class="mb-[300px] mt-24">
			<h2 class=" text-xl mt-10">Portfolio</h2>
			<div class="flex gap-40 flex-wrap justify-center">
				{projects.map((project) => (
					<Card
						title={project.title}
						img={project.img}
						desc={project.desc}
						link={project.link}
						techs={project.techs}
						img2={project.img2}
						code={project.code}
						key={project.title}
					/>
				))}
			</div>
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
