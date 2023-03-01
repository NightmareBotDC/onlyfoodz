/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const team = await fetch(`https://api.nightmarebot.tk/api/users/get?id=${params.slug}`).then(
		(res) => {
			const status = res.status;

			if (status === 200) return res.json();
			else
				return {
					error: 'Unable to reach server.'
				};
		}
	);

	let teamPosts;
	if (!team || team.error) teamPosts = null;
	else
		teamPosts = await fetch(
			`https://api.nightmarebot.tk/api/posts/list_user?user_id=${profile.UserID}&type=1`
		).then((res) => {
			const status = res.status;

			if (status === 200) return res.json();
			else
				return {
					error: 'Unable to reach server.'
				};
		});

	return {
		team: team,
		teamPosts: teamPosts
	};
}
