import { component$ } from "@builder.io/qwik";
import { Speak } from "qwik-speak";
import { About } from "~/components/sections/About";
import Portfolio from "~/components/sections/Portfolio";

export const Home = component$(() => {
	return (
		<>
			<About />
			<Portfolio />
		</>
	);
});

export default component$(() => {
	return (
		<Speak assets={["home"]}>
			<Home />
		</Speak>
	);
});
