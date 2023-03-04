<script lang="ts">
   export let data: any;
</script>

{#if data}
   <div class="p-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-md">
      {#if data.page.status === "UP"}
          <div class="flex items-center justify-center">
             <div class="p-2 bg-green-500 rounded-lg"></div>
             <h2 class="pl-2 text-green-500 font-bold text-center">All services are online!</h2>
          </div>
      {/if}
 
      {#if data.page.status === "HASISSUES"}
          <div class="flex items-center justify-center">
             <div class="p-2 bg-red-500 rounded-lg"></div>
             <h2 class="pl-2 text-red-500 font-bold text-center">Some services are having issues!</h2>
          </div>
      {/if}

      {#if data.page.status === "UNDERMAINTENANCE"}
          <div class="flex items-center justify-center">
             <div class="p-2 bg-white rounded-lg"></div>
             <h2 class="pl-2 text-white font-bold text-center">Some services are under maintenance!</h2>
          </div>
      {/if}
   </div>
{/if}
