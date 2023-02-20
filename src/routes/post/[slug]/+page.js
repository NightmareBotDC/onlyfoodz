/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const post = await fetch(`https://api.nightmarebot.tk/api/posts/get?post_id=${params.slug}`).then(
		(res) => {
			const status = res.status;

			if (status === 200) return res.json();
			else
				return {
					error: 'Unable to reach server.'
				};
		}
	);

	return {
		post: post
	};
}
