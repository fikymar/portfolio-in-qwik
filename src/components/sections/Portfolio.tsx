import { component$ } from "@builder.io/qwik";
import { Speak, $translate as t } from "qwik-speak";
import { Card } from "~/components/card";

export const projects = [
	{
		title: "Loonoy",
		link: "https://www.loonoy.com/",
		img: "/imgs/loonoy.webp",
		desc: "loonoyDesc",
		techs: [
			"Next",
			"Redux",
			"Styled Components",
			"Typescript",
			"Framer motion",
		],
		img2: "/imgs/loonoy2.webp",
		descCZ: "Eshop s chytrými kolébkami",
		descEN: "Eshop with smart cradles",
	},
	{
		title: "portfolio",
		link: "https://fikymar.netlify.app/",
		code: "https://github.com/fikymar/portfolio-in-qwik",
		img: "/imgs/portfolio1.webp",
		desc: "portfolioDesc",
		techs: ["Qwik", "Typescript", "Qwik Speak"],
		img2: "/imgs/portfolio2.webp",
		descCZ: "Jednoduché portfolio v Qwik",
		descEN: "Simple portfolio in Qwik",
	},
	{
		title: "Shopiik",
		link: "https://shopiik.netlify.app/",
		img: "/imgs/shopiik1.webp",
		img2: "/imgs/shopiik2.png",
		code: "https://github.com/fikymar/eshop",
		desc: "shopiikDesc",
		descCZ: "Cvičný eshop",
		descEN: "Training project - eshop",
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
	{
		title: "CRUD Blog app",
		link: "https://testblogapp.netlify.app/",
		img: "/imgs/blog2.webp",
		img2: "/imgs/blog.webp",
		code: "https://github.com/fikymar/blogapp-interview-task",
		desc: "blogDesc",
		descCZ: "CRUD cvičná aplikace ve Vue",
		descEN: "CRUD training project in Vue",
		techs: ["Vue", "Vue router", "Pinia", "Tailwind"],
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
		img: "/imgs/chytra1.webp",
		img2: "/imgs/chytra2.webp",
		desc: "chytraDesc",
		techs: ["Next", "Scss"],
		descCZ: "Investice do nemovitostí",
		descEN: "Investment in real estate offer",
	},
	{
		title: "Začni učit",
		link: "https://zacniucit.cz/",
		img: "/imgs/zacniucit1.png",
		img2: "/imgs/zacniucit2.png",
		desc: "zacniucitDesc",
		techs: ["Next", "Styled Components", "Typescript"],
		descCZ: "Web s rozcestníkem pro začínající učitele",
		descEN: "Website for aspiring teachers",
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
		descCZ: "Tržiště s živými jazykovými kurzy",
		descEN: "Marketplace with language courses",
	},
];

export const Portfolio = component$(() => {
	return (
		<section id="portfolio" class="mb-5 mt-10 scroll-mt-28">
			<h2 class="text-xl mb-10">{t("home.portfolio")}</h2>
			<div class="pb-72  grid snap-x scroll-px-5 overflow-x-scroll overflow-y-clip grid-flow-col gap-5 scrollbar ">
				{projects.map((project) => (
					<Card
						title={project.title}
						img={project.img}
						descCZ={project.descCZ}
						descEN={project.descEN}
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
