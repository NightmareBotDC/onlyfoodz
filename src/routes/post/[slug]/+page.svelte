<script lang="ts">
	import Meta from '../../components/Meta.svelte';
	import PostCard from '../../components/PostCard.svelte';

	export let data: any;
</script>

{#if !data.post || data.post.error}
	<Meta Title="Post" Description="Sorry, that post does not exist in this universe!" />

	<section class="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
		<div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
			<div class="max-w-md text-center">
				<h2 class="mb-8 font-extrabold text-9xl dark:text-gray-600">
					<span class="sr-only">Error</span>404
				</h2>
				<p class="text-2xl font-semibold md:text-3xl">
					Sorry, that post does not exist here in this universe.
				</p>
				<p class="mt-4 mb-8 dark:text-gray-400">
					But, don't worry there are other posts available here!
				</p>
				<a
					rel="noopener noreferrer"
					href="/"
					class="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
					>Back Home!</a
				>
			</div>
		</div>
	</section>
{:else}
	<Meta Title="Post" Description="`{data.post.post.Caption}` - {data.post.user.Username}" />

	<PostCard
		User={data.post.user}
		Caption={data.post.post.Caption}
		Image={data.post.post.Image}
		CreatedAt={data.post.post.CreatedAt}
		PostID={data.post.post.PostID}
        Team={data.post.team}
	/>
{/if}
