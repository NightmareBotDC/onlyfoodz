/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
        const post = await fetch(`https://api.nightmarebot.tk/api/posts/get?post_id=${params.slug}`).then((res) => res.json());

	return {
	    post: post
	};
}
