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
    <h2 class="text-white">Username: {data.profile.Username}</h2>
    <h2 class="text-white">UserID: {data.profile.UserID}</h2>
    <h2 class="text-white">Bio: {data.profile.Bio || "None"}</h2>
    <h2 class="text-white">Account Creation Date: {new Date(data.profile.CreatedAt)}</h2>
    <img class="rounded-full" src="https://cdn.discordapp.com/avatars/{data.profile.UserID}/{data.profile.Avatar}" height="120px" width="120px" />
{/if}