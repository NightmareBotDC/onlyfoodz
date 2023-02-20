/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const profile = await fetch(`https://api.nightmarebot.tk/api/users/get?id=${params.slug}`).then(
		(res) => res.json()
	);

	return {
		profile: profile
	};
}
