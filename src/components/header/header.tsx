import { component$, useStylesScoped$, useStore } from "@builder.io/qwik";

import { ChangeLocale } from "./change-locale";
import { $translate as t, Speak } from "qwik-speak";
import styles from "./header.css?inline";

export const Header = component$(() => {
	useStylesScoped$(styles);
	const store = useStore({ scrolled: false });

	const menuLinks = [
		{ title: t("home.about@@about"), link: "#about" },
		{ title: "Portfolio", link: "#portfolio" },
		{ title: "Certificates", link: "#certificates" },
	];
	return (
		<header
			class={`py-4 px-4 fixed top-0 left-0 w-full transition duration-500 backdrop-blur border-b  ${
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
			<ul class="uppercase">
				{menuLinks.map((link) => (
					<li class="mr-4 pb-1">
						<a href={link.link}>{link.title}</a>
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
