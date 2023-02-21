import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Speak, $translate as t } from "qwik-speak";

export const PageNotFound = component$(() => {
	return (
		<>
			<h1>{t("app.title@@{{name}} demo", { name: "Qwik Speak" })}</h1>
		</>
	);
});

export default component$(() => {
	return (
		<Speak assets={["home"]}>
			<PageNotFound />
		</Speak>
	);
});

export const head: DocumentHead = {
	title: "FikyMar | 404",
	meta: [
		{
			name: "description",
			content: "FikyMar portfolio",
		},
	],
};
