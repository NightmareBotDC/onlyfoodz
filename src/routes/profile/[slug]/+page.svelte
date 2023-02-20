<script lang="ts">
    import Meta from '../../components/Meta.svelte';

    export let data: any;
</script>

<Meta
	Title="Profile"
	Description="Onlyfoodz is a social media platform where people share pictures and small videos of food."
/>

{#if !data.profile || data.profile.error}
    <h2 class="text-white">Sorry, that profile cannot be found.</h2>
{:else}
    <h2 class="text-white">{JSON.stringify(data.profile)}</h2>
{/if}