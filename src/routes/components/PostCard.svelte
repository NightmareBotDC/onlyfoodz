<script lang="ts">
   export let User: Object;
   export let Caption: String;
   export let Image: String;
   export let CreatedAt: Date;
</script>

<h2>{Caption}</h2>
<h2>{Image || "No image provided"}</h2>
<h4>{CreatedAt}</h4>
