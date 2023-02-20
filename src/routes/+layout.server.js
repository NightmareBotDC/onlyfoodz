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
				posts: posts,
				userPosts: null
			};
		else {
			const userPosts = await fetch(
				`https://api.nightmarebot.tk/api/posts/list_user?user_id=${userData.UserID}&type=1`
			).then((res) => res.json());

			return {
				user: userData,
				posts: posts,
				userPosts: userPosts
			};
		}
	} else
		return {
			user: null,
			posts: posts,
			userPosts: null
		};
};
