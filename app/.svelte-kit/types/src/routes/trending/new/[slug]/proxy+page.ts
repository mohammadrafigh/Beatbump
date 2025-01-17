// @ts-nocheck
import type { PageLoad } from "./$types";
export const load = async ({ params, fetch, url }: Parameters<PageLoad>[0]) => {
	// const params = url.searchParams.get('params')
	const response = await fetch(
		`/trending/new/${params.slug}.json` +
			`${url.searchParams.get("params") ? `?params=${url.searchParams.get("params")}` : ""}` +
			`${url.searchParams.get("itct") ? `&itct=${encodeURIComponent(url.searchParams.get("itct"))}` : ""}`,
	);
	const { sections = [], header = "", title = [] || "", data } = await response.json();
	// console.log(sections, header, title)
	if (response.ok) {
		return {
			sections,
			header,
			title,
			data,
		};
	}
};
