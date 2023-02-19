<script lang="ts">
   export let data;
</script>

{#if data.post}
   <PostCard User={data.post.user} Caption={data.post.post.Caption} Image={data.post.post.Image} CreatedAt={data.post.post.CreatedAt} />
{:else}
   <h2 class="text-white">Sorry, that post does not exist in this universe!</h2>
{/if}
