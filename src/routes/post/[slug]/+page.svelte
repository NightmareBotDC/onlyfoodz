<script lang="ts">
   import Meta from '../../components/Meta.svelte';
   import PostCard from '../../components/PostCard.svelte';

   export let data;
</script>

{#if data.post}
   <Meta
	Title="Post"
	Description="`{data.post.post.Caption}` - {data.post.user.Username}"
   />

   <PostCard User={data.post.user} Caption={data.post.post.Caption} Image={data.post.post.Image} CreatedAt={data.post.post.CreatedAt} PostID={data.post.post.PostID} />
{:else}
   <h2 class="text-white">Sorry, that post does not exist in this universe!</h2>
{/if}
