import { component$, useStylesScoped$, useStore } from "@builder.io/qwik";
import { ChangeLocale } from "./change-locale";
import { $translate as t, Speak } from "qwik-speak";
import styles from "./header.css?inline";

export const Header = component$(() => {
	useStylesScoped$(styles);
	const store = useStore({ scrolled: false });

	const menuLinks = [
		{ title: t("home.about@@about"), link: "/#about" },
		{ title: "Portfolio", link: "/#portfolio" },
		{
			title: "CV",
			link: "/MarcelaFikrlovaCV.pdf",
			download: true,
			img: "/imgs/svg/downloadIcon.svg",
		},
		// { title: "Certificates", link: "/certificates" },
	];
	return (
		<header
			class={`py-4 px-4 z-50 fixed top-0 left-0 w-full transition duration-500 backdrop-blur border-b flex items-center  ${
				store.scrolled ? " border-b-black " : "border-b-transparent"
			}`}
			document:onScroll$={() => {
				if (window.scrollY > 0) {
					store.scrolled = true;
				} else {
					store.scrolled = false;
				}
			}}
		>
			<div class="logo"></div>
			<ChangeLocale />
			<ul class="uppercase font-sans">
				{menuLinks.map((link) => (
					<li class="mr-4 pb-1 ">
						<a
							href={link.link}
							download={link.download}
							class="headerLink flex hover:text-redLink"
						>
							{link.title}
							{link.img ? (
								<img
									src={link.img}
									alt="download CV"
									class="h-5 w-5 blackBlob"
								/>
							) : null}
						</a>
					</li>
				))}
			</ul>
		</header>
	);
});

export default component$(() => {
	return (
		<Speak assets={["home"]}>
			<Header />
		</Speak>
	);
});
