<script lang="ts">
   import Meta from '../components/Meta.svelte';

   export let data;
</script>

<Meta
   Title="Post Something"
   Description="Onlyfoodz is a social media platform where people share pictures and small videos of food."
/>

{#if data.user}
   <h2 class="text-white">This page is coming soon.</h2>
{:else}
   <h2 class="text-white">You are not logged in.</h2>
{/if}
