<script lang="ts">
	export let User: any;
	export let Caption: string;
	export let Image: string;
	export let Likes: number;
	export let Dislikes: number;
	export let PostID: string;
	export let Team: boolean;
</script>

<div
	class="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
>
	<a href="/{Team ? 'team' : 'profile'}/{User.UserID}">
		<h2 class="flex">
			<img
				class="h-8 rounded-full"
				src={User.Avatar}
				height="30px"
				width="30px"
				alt="Profile Picture"
			/>
			<p class="ml-2 mt-1 mb-1 font-normal text-gray-700 dark:text-gray-400">{User.Username}</p>
		</h2>
	</a>

	<a href="/post/{PostID}">
		<div class="p-2" />

		{#if Image}
			<img src={Image} alt="Post Card" height="120px" width="120px" />
		{/if}

		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{Caption}</h5>
		<p class="font-normal text-gray-700 dark:text-gray-400">
			Likes: {String(Likes)} | Dislikes: {String(Dislikes)}
		</p>
	</a>
</div>

<div class="p-2" />
