import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { changeLocale, $translate as t, useSpeakContext } from "qwik-speak";
import { LocaleCode } from "~/constants/enums";
import styles from "./header.css?inline";

export const ChangeLocale = component$(() => {
	const ctx = useSpeakContext();
	useStylesScoped$(styles);

	return (
		<div>
			{ctx.config.supportedLocales.map((locale) => (
				<button
					class={`localebtn text-black border border-black text-xs font-bold p-2  rounded-full mx-1 my-2 `}
					onClick$={async () => await changeLocale(locale, ctx)}
				>
					{locale.lang === "cs-CS" ? LocaleCode.CS : LocaleCode.EN_US}
				</button>
			))}
		</div>
	);
});
