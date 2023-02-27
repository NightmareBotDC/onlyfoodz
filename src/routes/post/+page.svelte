<script lang="ts">
	import Meta from '../components/Meta.svelte';
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

	let imagePreview: any;

	let file: any;
	let fileInput: any;

	const chooseImage = () => {
		const element = document.getElementById('image') as HTMLInputElement;
		element.click();
	};

	const onImageSelected = (e: any) => {
		let image = e.target.files[0];

		let reader = new FileReader();
		reader.readAsDataURL(image);

		reader.onload = (a: any) => {
			imagePreview = a.target.result;
			file = a.target.result;
		};
	};

	const submitData = () => {
		let formData: any = {};
		const caption = document.getElementById('caption') as HTMLInputElement;
        const team = document.getElementById("team") as HTMLSelectElement;

		if (file) formData['image'] = file.split(',')[1];
		else formData['image'] = null;

		if (caption.value !== '') formData['caption'] = caption.value;
		else formData['caption'] = null;

		if (team.value === "myself") formData["user"] = data.token;
        else formData["user"] = team.value;

		fetch('https://api.nightmarebot.tk/api/posts/post', {
			method: 'POST',
			body: JSON.stringify(formData),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(async (res) => {
			const data = await res.json();
            
			if (data.success) window.location.href = '/';
			else return Alert('Error:', 'Something went Wrong :(', 5000);
		});

		return formData;
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
		<form>
			<label for="caption" class="sr-only">Caption (required)</label>
			<input
				type="text"
				placeholder="Write your Caption here!"
				id="caption"
				name="caption"
				class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 bg-gray-700 text-white placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
			/>

			<div class="p-2" />

			<label for="image" class="sr-only">Choose an Image (optional)</label>
			<button
				on:click={chooseImage}
				class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>Choose an Image</button
			>
			<input
				type="file"
				id="image"
				style="display: none;"
				accept="image/*"
				on:change={(e) => onImageSelected(e)}
				bind:this={fileInput}
				name="image"
			/>

			{#if imagePreview}
				<div class="p-2" />
				<img
					height="120px"
					width="120px"
					class="rounded-md"
					src={imagePreview}
					alt="Image Preview"
				/>
			{/if}

			<div class="p-2" />

            <label class="text-white font-bold" for="team">Choose a Team:</label>
            <select name="team" id="team">
                <option value="myself">My Profile</option>

                {#each data.userTeams as item}
                    <option value={item.UserID}>{item.Username}</option>
                {/each}
            </select>

            <div class="p-2"></div>

			<button
				class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				type="button"
				on:click={submitData}>Submit</button
			>
		</form>
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
					c
                    lass="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
					>Login</button
				>
			</div>
		</div>
	</section>
{/if}
