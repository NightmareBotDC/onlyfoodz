/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const profile = await fetch(`https://api.nightmarebot.tk/api/users/get?id=${params.slug}`).then(
		(res) => {
			const status = res.status;

			if (status === 200) return res.json();
			else
				return {
					error: 'Unable to reach server.'
				};
		}
	);

	let profilePosts;
	if (!profile || profile.error) profilePosts = null;
	else
		profilePosts = await fetch(
			`https://api.nightmarebot.tk/api/posts/list_user?user_id=${profile.UserID}&type=1`
		).then((res) => {
			const status = res.status;

			if (status === 200) return res.json();
			else
				return {
					error: 'Unable to reach server.'
				};
		});

	let profileTeams;
	if (!profile || profile.error || profile.team === true) profileTeams = null;
	else
		profileTeams = await fetch(
			`https://api.nightmarebot.tk/api/users/list_teams?id=${profile.UserID}`
		).then((res) => {
			const status = res.status;

			if (status === 200) return res.json();
			else
				return {
					error: 'Unable to reach server.'
				};
		});

	return {
		profile: profile,
		profilePosts: profilePosts,
		profileTeams: profileTeams
	};
}
