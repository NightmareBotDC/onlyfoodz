<script lang="ts">
   export let data: any;
</script>

{#if data.status}
   {#if data.status.page.status === "UP"}
       <h2 class="text-green-700 font-bold">All services are online!</h2>
   {/if}
{:else}
   <h2 class="text-red-800 font-bold">Unable to reach status information.</h2>
{/if}
