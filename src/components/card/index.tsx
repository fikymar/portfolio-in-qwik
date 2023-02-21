import { component$ } from "@builder.io/qwik";
import { $translate as t, Speak } from "qwik-speak";

interface IProject {
	title: string;
	link: string;
	img: string;
	desc: string;
	techs: string[];
	img2?: string;
	code?: string;
}

export const Card = component$((props: IProject) => {
	const { title, link, img, desc, img2, code } = props;

	return (
		<article class="group wrapper antialiased text-gray-900 w-80 ">
			<div>
				<div class="relative w-80 h-80">
					<img
						src={img}
						alt={title}
						class="w-full h-full object-cover object-center rounded-lg shadow-md"
					/>
					<img
						src={img2}
						alt={title}
						class="absolute top-0 w-full h-full object-cover object-center rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition duration-500"
					/>
				</div>
				<div class="relative px-4 -mt-16  ">
					<div class="bg-white p-6 rounded-lg shadow-lg absolute top-0 left-[5%] z-30 w-[90%]">
						<div class="flex items-baseline">
							{/* <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
								New
							</span> */}
							<div class=" text-gray-600  text-xs font-semibold tracking-wider">
								{t(`home.${desc}`)}
							</div>
						</div>

						<h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">
							{title}
						</h4>

						<ul class="list-none list-inside my-2 flex-wrap gap-2 hidden group-hover:flex">
							{props.techs.map((tech) => (
								<li class="">{tech} |</li>
							))}
						</ul>

						<div class=" gap-2 mt-4 hidden group-hover:flex">
							{code ? (
								<a href={code} target="_blank" class="">
									<figure class="group">
										<img
											src="/imgs/svg/codeIcon.svg"
											alt={title}
											class="h-5 w-5"
										/>
										{/* <figcaption class="opacity-0 group-hover:opacity-1  text-black">
											code
										</figcaption> */}
									</figure>
								</a>
							) : null}

							<a href={link} target="_blank" class="group">
								<img src="/imgs/svg/liveIcon.svg" alt={link} class="h-5 w-5" />
								{/* <p class="group-hover:opacity-1 opacity-0 text-black">live</p> */}
							</a>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
});

export default component$(() => {
	return (
		<Speak assets={["home"]}>
			<Card />
		</Speak>
	);
});
