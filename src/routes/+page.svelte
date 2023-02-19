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
<div class="p-6"></div>

<h2 class="text-white font-semibold text-2xl">Test Posts:</h2>
<div class="p-2"></div>

{#each data.posts as item}
   <PostCard User={item.user} Caption={item.post.Caption} Image={item.post.Image} CreatedAt={item.post.CreatedAt} />
{/each}
