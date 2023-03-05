<script lang="ts">
	import '../app.css';
	import Header from './components/Header.svelte';
	import Status from './components/Status.svelte';

	export let data: any;
</script>

<Header user={data.user || null} />

<div class="p-3" />

<section id="content" class="m-4">
	<slot />
	<Status data={data.status || null} />
</section>
