import cookie from 'cookie';

export const load = async ({ request, setHeaders }) => {
	const cookies = cookie.parse(request.headers.get('cookie') || '');
	const posts = await fetch('https://api.nightmarebot.tk/api/posts/list?type=1').then((res) => {
		const status = res.status;

		if (status === 200) return res.json();
		else
			return {
				error: 'Unable to reach server.'
			};
	});

	if (cookies.token) {
		const userData = await fetch(
			`https://api.nightmarebot.tk/api/users/getwithtoken?token=${cookies.token}`
		).then((res) => {
			const status = res.status;

			if (status === 200) return res.json();
			else
				return {
					error: 'Unable to reach server.'
				};
		});

		if (userData.error)
			return {
				user: null,
				posts: posts,
				userPosts: null
			};
		else {
                        const userTeams = await fetch(`https://api.nightmarebot.tk/api/users/list_teams?id=${user.UserID}`).then((res) => {
		const status = res.status;

		if (status === 200) return res.json();
		else
			return {
				error: 'Unable to reach server.'
			};
	});

			const userPosts = await fetch(
				`https://api.nightmarebot.tk/api/posts/list_user?user_id=${userData.UserID}&type=1`
			).then((res) => {
				const status = res.status;

				if (status === 200) return res.json();
				else
					return {
						error: 'Unable to reach server.'
					};
			});

			return {
				user: userData,
				posts: posts,
				userPosts: userPosts,
                                userTeams: userTeams
                                token: cookies.token
			};
		}
	} else
		return {
			user: null,
			posts: posts,
			userPosts: null,
                        userTeams: userTeams,
                        token: null
		};
};
