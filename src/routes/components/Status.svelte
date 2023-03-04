<script lang="ts">
   export let data: any;
</script>

{#if data}
   <div class="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md">
      {#if data.page.status === "UP"}
          <h2 class="text-green-700 font-bold text-center">All services are online!</h2>
      {/if}
 
      {#if data.page.status === "HASISSUES"}
          <h2 class="text-red-800 font-bold text-center">Some services are having issues!</h2>
      {/if}

      {#if data.page.status === "UNDERMAINTENANCE"}
          <h2 class="text-white font-bold text-center">Some services are under maintenance!</h2>
      {/if}
   </div>
{:else}
   <h2 class="text-red-800 font-bold">Unable to reach status information.</h2>
{/if}
