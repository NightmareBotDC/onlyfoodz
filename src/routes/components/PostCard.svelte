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
