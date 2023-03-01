import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { changeLocale, useSpeakContext } from "qwik-speak";
import { LocaleCode } from "~/constants/enums";
import styles from "./header.css?inline";

export const ChangeLocale = component$(() => {
	const ctx = useSpeakContext();
	useStylesScoped$(styles);

	console.log(ctx.config);

	return (
		<div>
			{ctx.config.supportedLocales.map((locale) => (
				<button
					class={`localebtn text-black border border-black text-xs  p-2  rounded-full mx-1 my-2 font-sans transition ${
						ctx.locale.lang === locale.lang && "text-redLink font-medium"
					}`}
					onClick$={async () => await changeLocale(locale, ctx)}
				>
					{locale.lang === "cs-CS" ? LocaleCode.CS : LocaleCode.EN_US}
				</button>
			))}
		</div>
	);
});
