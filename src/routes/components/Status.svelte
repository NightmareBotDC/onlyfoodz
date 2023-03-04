<script lang="ts">
   export let data: any;
</script>

{#if data.status.page.up === "UP"}
    <h2 class="text-green-700 font-bold">All services are online!</h2>
{/if}
