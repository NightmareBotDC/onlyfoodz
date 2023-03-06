<script lang="ts">
	import Meta from '../components/Meta.svelte';
	import Swal from 'sweetalert2';

    let Caption: string;
    let ImagePreview: string;

	const Alert = (title: string, description: string, time: number) => {
		Swal.fire({
			title: title,
			text: description,
			timer: time,
			timerProgressBar: true
		});
	};

	const loginDiscord = async () => {
		window.location.href = "https://api.nightmarebot.tk/auth/login?client_id=onlyfoodz-0091";
	};

	export let data: any;
</script>

<Meta
	Title="Post Something"
	Description="Onlyfoodz is a social media platform where people share pictures and small videos of food."
/>

{#if data.user}
	<h2 class="text-white font-bold text-3xl text-center">Post Something!</h2>
	<h4 class="text-white font-bold text-sm text-center">
		Make sure you are following our <a href="/legal/communityguidelines" class="text-red-600"
			>Community Guidelines</a
		> :)
	</h4>

	<div class="p-4" />

	<div id="data">
		<form method="POST" enctype="multipart/form-data" action="?/new_post">
			<label for="caption" class="sr-only">Caption (required)</label>
			<input
				type="text"
				placeholder="Write your Caption here! (required)"
				id="caption"
				name="caption"
				class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 bg-gray-700 text-white placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                bind:value={Caption}
            />

			<div class="p-2" />

			<label for="image" class="sr-only">Image URL (optional)</label>
			<input
				type="text"
				placeholder="Paste your Image Link here! (optional)"
				id="image"
				name="image"
				class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 bg-gray-700 text-white placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                bind:value={ImagePreview}
            />

			<div class="p-2" />

			<label class="text-white font-bold" for="team">Choose a Team:</label>
			<select name="team" id="team">
				<option value="myself" selected>My Profile</option>

				{#each data.userTeams as item}
					<option value={item.UserID}>{item.Username}</option>
				{/each}
			</select>

			<div class="p-2" />

			<button
				class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				type="submit">Submit</button
			>
		</form>

        <div class="p-2"></div>

        <div
            class="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
            <h2 class="flex">
                    <img
                        class="h-8 rounded-full"
                        src={data.user.Avatar}
                        height="30px"
                        width="30px"
                        alt="Profile Picture"
                    />
                    <p class="ml-2 mt-1 mb-1 font-normal text-gray-700 dark:text-gray-400">{data.user.Username} &bull; Preview</p>
                </h2>
        
                <div class="p-2" />
        
                {#if ImagePreview}
                    <img src={ImagePreview} alt="Post Card" height="120px" width="120px" />
                {/if}
        
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{Caption || "Caption"}</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                    Likes: 275 | Dislikes: 1
                </p>
        </div>      
	</div>
{:else}
	<section class="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
		<div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
			<div class="max-w-md text-center">
				<h2 class="mb-8 font-extrabold text-9xl dark:text-gray-600">
					<span class="sr-only">Error</span>401
				</h2>
				<p class="text-2xl font-semibold md:text-3xl">Unauthorized</p>
				<p class="mt-4 mb-8 dark:text-gray-400">To view this page, you need to login.</p>
				<button
					on:click={loginDiscord}
					class="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
					>Login</button
				>
			</div>
		</div>
	</section>
{/if}
