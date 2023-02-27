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
        const element = document.getElementById("image") as HTMLInputElement;
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
        let formData = {};
        const caption = document.getElementById("caption") as HTMLInputElement;

        if (file) formData["image"] = file.split(",")[1];
        else formData["image"] = null;

        if (caption.value !== "") formData["caption"] = caption.value;
        else formData["caption"] = null;

        formData["user"] = data.token;

        fetch("https://api.nightmarebot.tk/api/posts/post", {
             method: "POST", 
             body: JSON.stringify(formData), 
             headers: { 
                "Content-Type": "application/json" 
             } 
        }).then(async (res) => {
           const data = await res.json();
           console.log(data);

           if (data.success) window.location.href = "/";
           else return Alert("Error:", "Something went Wrong :(", 5000);
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
			<input type="text" placeholder="Write your Caption here!" id="caption" name="caption" class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 bg-gray-700 text-white placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />

                        <div class="p-2"></div>

			<label for="image" class="sr-only">Choose an Image (optional)</label>
                        <button on:click={chooseImage} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Choose an Image</button>
			<input type="file" id="image" style="display: none;" accept="image/*" on:change={(e) => onImageSelected(e)} bind:this={fileInput} name="image" />
                        
                        {#if imagePreview}
                           <div class="p-2"></div>
                           <img height="120px" width="120px" class="rounded-md" src={imagePreview} alt="Image Preview">
                        {/if}

                        <div class="p-2"></div>

                        <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" on:click={submitData}>Submit</button>

                        <div>
  <label id="listbox-label" class="block text-sm font-medium text-gray-700">Assigned to</label>
  <div class="relative mt-1">
    <button type="button" class="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
      <span class="flex items-center">
        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-6 w-6 flex-shrink-0 rounded-full">
        <span class="ml-3 block truncate">This Profile</span>
      </span>
      <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
        <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clip-rule="evenodd" />
        </svg>
      </span>
    </button>

    <ul class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
      <li class="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" id="listbox-option-0" role="option">
        <div class="flex items-center">
          <img src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-6 w-6 flex-shrink-0 rounded-full">
          <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
          <span class="font-normal ml-3 block truncate">Wade Cooper</span>
        </div>

        <span class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
          </svg>
        </span>
      </li>
    </ul>
  </div>
</div>
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
					class="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
					>Login</button
				>
			</div>
		</div>
	</section>
{/if}
