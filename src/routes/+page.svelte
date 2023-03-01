<script lang="ts">
	import Meta from './components/Meta.svelte';
	import PostCard from './components/PostCard.svelte';

	export let data: any;
</script>

<Meta
	Title="Home"
	Description="Onlyfoodz is a social media platform where people share pictures and small videos of food."
/>

<h2 class="text-white font-semibold text-2xl">Coming Soon!</h2>
<div class="p-6" />

{#if !data.posts || data.posts.error}
	<h2 class="text-white font-bold text-3xl">
		It seems that our servers are currently experiencing a little too much brain damage at this
		time, please try again later.
	</h2>
{:else}
	<h2 class="text-white font-semibold text-2xl">Posts:</h2>
	<div class="p-2" />

	{#each data.posts as item}
		<PostCard
			User={item.user}
			Caption={item.post.Caption}
			Image={item.post.Image}
			CreatedAt={item.post.CreatedAt}
			PostID={item.post.PostID}
            Team={item.user.team}
		/>
	{/each}
{/if}
