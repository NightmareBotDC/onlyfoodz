<script lang="ts">
	import Meta from '../components/Meta.svelte';
        import PostCard from '../components/PostCard.svelte';
	import Swal from 'sweetalert2';

	const Alert = (title: string, description: string, time: number) => {
		Swal.fire({
			title: title,
			text: description,
			timer: time,
			timerProgressBar: true
		});
	};

	const loginDiscord = async () => {
		const data = await fetch('https://api.nightmarebot.tk/auth/discord/login').catch((error) => {
			Alert('Error:', error, 4000);
		});

		if (data.status === 200) {
			const json = await data.json();
			if (json.error) Alert('Error:', json.error, 4000);
			else window.location.href = json.url;
		} else Alert('Error:', `It seems that our servers is having issues at this time!`, 2000);
	};

	export let data: any;
</script>

<Meta
	Title="Profile"
	Description="Onlyfoodz is a social media platform where people share pictures and small videos of food."
/>

{#if data.user}
	<div
		class="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
	>
		<h2 class="flex">
			<img
				class="rounded-full"
				src="https://cdn.discordapp.com/avatars/{data.user.UserID}/{data.user.Avatar}"
				height="60px"
				width="60px"
				alt="Profile Picture"
			/>
			<p class="ml-2 mt-4 mb-4 font-bold text-xl text-white">
				{data.user.Username}
			</p>
		</h2>

                <div class="p-2"></div>

		<h5 class="font-normal text-gray-700 dark:text-gray-400">
			Bio: {data.user.Bio || 'None'}
		</h5>
		<p class="font-normal text-gray-700 dark:text-gray-400">
			Account Creation Date: {new Date(data.user.CreatedAt)}
		</p>

                {#if data.user.UserID === data.user.UserID}
                    <div class="p-2"></div>

                    <div id="profile_actions">
                        <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit Profile</button>
                    </div>
                {/if}
	</div>

      {#if !data.userPosts || data.userPosts.error || data.userPosts.length === 0}
        <div class="p-4"></div>

        <div id="posts">
           <h2 class="text-white font-bold text-3xl text-center">Posts:</h2>
           <div class="p-1"></div>

           {#each data.userPosts as item}
	       <PostCard
		  User={data.user}
		  Caption={item.Caption}
		  Image={item.Image}
		  CreatedAt={item.CreatedAt}
		  PostID={item.PostID}
	       />
           {/each}
        </div>
      {/if}
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
