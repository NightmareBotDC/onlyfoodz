<script lang="ts">
   export let data: any;
</script>

{#if data}
   <div class="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md">
      {#if data.page.status === "UP"}
          <div class="flex">
             <span class="p-2 bg-green-500 rounded-lg"><span> <h2 class="text-green-500 font-bold text-center">All services are online!</h2>
          </div>
      {/if}
 
      {#if data.page.status === "HASISSUES"}
          <div class="flex">
             <span class="p-2 bg-red-500 rounded-lg"><span> <h2 class="text-red-500 font-bold text-center">Some services are having issues!</h2>
          </div>
      {/if}

      {#if data.page.status === "UNDERMAINTENANCE"}
          <div class="flex">
             <span class="p-2 bg-white rounded-lg"><span> <h2 class="text-white font-bold text-center">Some services are under maintenance!</h2>
          </div>
      {/if}
   </div>
{/if}
