<script lang="ts">
   export let User: Object;
   export let Caption: String;
   export let Image: String;
   export let CreatedAt: Date;
</script>

<h2 class="text-white">{Caption}</h2>

{#if Image}
  <img src={Image} alt="Post Image" height="120px" width="120px" />
{/if}

<h4 class="text-white">{CreatedAt}</h4>

<div class="p-2"></div>


<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{Caption}</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">{CreatedAt}</p>
</a>
