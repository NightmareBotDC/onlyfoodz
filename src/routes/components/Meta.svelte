<script lang="ts">
	export let Title: string;
	export let Description: string;
	export let Image: string = '/logo.png';
</script>

<svelte:head>
	<title>{Title}</title>
	<meta property="og:title" content={Title} />
	<meta property="og:site_name" content="Onlyfoodz" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://onlyfoodz.nightmarebot.tk/" />
	<meta property="og:image" content={Image} />
	<meta property="og:description" content={Description} />
        <meta property="theme-color" content="#3c3c3c" />
        <link rel="manifest" href="https://onlyfoodz.nightmarebot.tk/manifest.json">
</svelte:head>
