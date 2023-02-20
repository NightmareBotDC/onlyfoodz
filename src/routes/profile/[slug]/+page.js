/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const profile = await fetch(`https://api.nightmarebot.tk/api/users/get?id=${params.slug}`).then(
		(res) => res.json()
	);

        let profilePosts;
        if (!profile || profile.error) profilePosts = await fetch(`https://api.nightmarebot.tk/api/posts/list_user?user_id=${profile.UserID}&type=1`).then((res) => res.json());
        else profilePosts = null;

	return {
		profile: profile,
                profilePosts: profilePosts
	};
}
