<script lang="ts">
	import Meta from '../../components/Meta.svelte';
	import PostCard from '../../components/PostCard.svelte';

	export let data: any;
</script>

<Meta
	Title="Profile"
	Description="Onlyfoodz is a social media platform where people share pictures and small videos of food."
/>

{#if !data.profile || data.profile.error}
	<h2 class="text-white">Sorry, that profile cannot be found.</h2>
{:else}
	<div
		class="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
	>
		<h2 class="flex">
			<img
				class="rounded-full"
				src={data.profile.Avatar}
				height="60px"
				width="60px"
				alt="Profile Picture"
			/>
			<p class="ml-2 mt-4 mb-4 font-bold text-xl text-white">
				{data.profile.Username}
			</p>
		</h2>

		<div class="p-2" />

		<h5 class="font-normal text-gray-700 dark:text-gray-400">
			Bio: {data.profile.Bio || 'None'}
		</h5>
		<p class="font-normal text-gray-700 dark:text-gray-400">
			Account Creation Date: {new Date(data.profile.CreatedAt)}
		</p>

		{#if data.user}
			{#if data.profile.UserID === data.user.UserID}
				<div class="p-2" />

				<div id="profile_actions">
					<button
						class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>Edit Profile</button
					>
				</div>
			{:else}
				<div class="p-2" />

				<div id="profile_actions">
					<button
						class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>Follow</button
					>
				</div>
			{/if}
		{/if}
	</div>

	<div class="p-4" />

	{#if !data.profilePosts || data.profilePosts.error}
		<h2 class="text-white font-bold">Unable to render posts.</h2>
	{:else if data.profilePosts.length === 0}
		<h2 class="text-white font-bold text-3xl text-center">Posts:</h2>
		<div class="p-1" />
		<h2 class="text-white font-bold">This user does not have any posts, at this time.</h2>
	{:else}
		<div id="posts">
			<h2 class="text-white font-bold text-3xl text-center">Posts:</h2>
			<div class="p-1" />

			{#each data.profilePosts as item}
				<PostCard
					User={data.profile}
					Caption={item.Caption}
					Image={item.Image}
					CreatedAt={item.CreatedAt}
					PostID={item.PostID}
				/>
			{/each}
		</div>
	{/if}

        {#if !data.profileTeams || data.profileTeams.error}
		<h2 class="text-white font-bold">Unable to render teams.</h2>
	{:else if data.profileTeams.length === 0}
		<h2 class="text-white font-bold text-3xl text-center">Teams:</h2>
		<div class="p-1" />
		<h2 class="text-white font-bold">You aren't in any teams yet!</h2>
	{:else}
		<h2 class="text-white font-bold text-3xl text-center">Teams:</h2>
		<div class="p-1" />

		{#each data.profileTeams as item}
			<h2 class="text-white font-bold text-3xl">{item.Username}</h2>
		{/each}
	{/if}
{/if}
