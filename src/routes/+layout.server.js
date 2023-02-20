import cookie from 'cookie';

export const load = async ({ request, setHeaders }) => {
	const cookies = cookie.parse(request.headers.get('cookie') || '');
	const posts = await fetch('https://api.nightmarebot.tk/api/posts/list?type=1').then((res) =>
		res.json()
	);

	if (cookies.token) {
		const userData = await fetch(
			`https://api.nightmarebot.tk/api/users/getwithtoken?token=${cookies.token}`
		)
			.then((res) => res.json())
			.catch((err) => {
				throw new Error(err);
			});

		if (userData.error)
			return {
				user: null,
				posts: posts
			};
		else
			return {
				user: userData,
				posts: posts
			};
	} else
		return {
			user: null,
			posts: posts
		};
};
