<script lang="ts">
   const data = fetch("https://nightmare-project.instatus.com/summary.json").then(async (res) => { return await res.json(); });
</script>

<h2 class="text-white font-bold">{JSON.stringify(data)}</h2>
