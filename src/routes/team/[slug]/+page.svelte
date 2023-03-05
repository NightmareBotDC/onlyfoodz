<script lang="ts">
	import Meta from '../../components/Meta.svelte';
	import PostCard from '../../components/PostCard.svelte';

	export let data: any;
</script>

<Meta
	Title="Profile"
	Description="Onlyfoodz is a social media platform where people share pictures and small videos of food."
/>

{#if !data.team || data.team.error}
	<h2 class="text-white">Sorry, that team cannot be found.</h2>
{:else}
	<div
		class="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
	>
		<h2 class="flex">
			<img
				class="rounded-full"
				src={data.team.Avatar}
				height="60px"
				width="60px"
				alt="Team Avatar"
			/>
			<p class="ml-2 mt-4 mb-4 font-bold text-xl text-white">
				{data.team.Username}
			</p>
		</h2>

		<div class="p-2" />

		<h5 class="font-normal text-gray-700 dark:text-gray-400">
			Description: {data.team.Bio || 'None'}
		</h5>
		<p class="font-normal text-gray-700 dark:text-gray-400">
			Team Creation Date: {new Date(data.team.CreatedAt)}
		</p>

		{#if data.user}
			<div class="p-2" />

			<div id="profile_actions">
				<button
					class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>Follow</button
				>
			</div>
		{/if}
	</div>

	<div class="p-4" />

	{#if !data.teamPosts || data.teamPosts.error}
		<!-- There was an error, or our servers are experiencing issues. -->
	{:else if data.teamPosts.length === 0}
		<h2 class="text-white font-bold text-3xl text-center">Posts:</h2>
		<div class="p-1" />
		<h2 class="text-white font-bold">This team does not have any posts, at this time.</h2>
	{:else}
		<div id="posts">
			<h2 class="text-white font-bold text-3xl text-center">Posts:</h2>
			<div class="p-1" />

			{#each data.teamPosts as item}
				<PostCard
					User={data.team}
					Caption={item.Caption}
					Image={item.Image}
					Likes={item.Likes}
					Dislikes={item.Dislikes}
					PostID={item.PostID}
					Team={true}
				/>
			{/each}
		</div>
	{/if}
{/if}
