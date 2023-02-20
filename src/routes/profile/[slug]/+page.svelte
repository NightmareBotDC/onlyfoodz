<script lang="ts">
	import Meta from '../../components/Meta.svelte';

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
		class="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
	>
		<h2 class="flex">
			<img
				class="rounded-full"
				src="https://cdn.discordapp.com/avatars/{data.profile.UserID}/{data.profile.Avatar}"
				height="120px"
				width="120px"
				alt="Profile Picture"
			/>
			<p class="ml-2 mt-1 mb-1 font-normal text-gray-700 dark:text-gray-400">
				{data.profile.Username}
			</p>
		</h2>

		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			Bio: {data.profile.Bio || 'None'}
		</h5>
		<p class="font-normal text-gray-700 dark:text-gray-400">
			Account Creation Date: {new Date(data.profile.CreatedAt)}
		</p>
	</div>
{/if}
