import { component$, useSignal, useClientEffect$ } from "@builder.io/qwik";

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
	{
		title: "Dungeon Escape",
		link: "https://fikymar.itch.io/dungeon-escape",
		img: "/imgs/dungeon1.webp",
		desc: "portfolioDesc",
		techs: ["Unreal Engine 5.6", "Blueprints"],
		img2: "/imgs/dungeon.png",
		descCZ: "Jednoduchá 3D hra zaměřená na základní interakční systém",
		descEN: "A simple 3D puzzle game focused on a basic interaction system",
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
		descCZ: "Tržiště s živými jazykovými kurzy(stage)",
		descEN: "Marketplace with language courses(stage)",
	},
];

export const Portfolio = component$(() => {
	  const scrollRef = useSignal<HTMLElement>();

  useClientEffect$(() => {
    const el = scrollRef.value;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      el.classList.add("cursor-grabbing");
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };

    const onMouseLeave = () => {
      isDown = false;
      el.classList.remove("cursor-grabbing");
    };

    const onMouseUp = () => {
      isDown = false;
      el.classList.remove("cursor-grabbing");
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.5;
      el.scrollLeft = scrollLeft - walk;
    };

    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mouseleave", onMouseLeave);
    el.addEventListener("mouseup", onMouseUp);
    el.addEventListener("mousemove", onMouseMove);

    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mouseleave", onMouseLeave);
      el.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("mousemove", onMouseMove);
    };
  });


	return (
		<section id="portfolio" class="mb-5 mt-10 scroll-mt-28">
			<h2 class="arrow text-xl mb-10">{t("home.portfolio")}</h2>
			<div   ref={scrollRef}
class="pb-[19rem] grid snap-x scroll-px-5 overflow-x-scroll overflow-y-clip grid-flow-col gap-5 scrollbar md:mr-8 ">
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
