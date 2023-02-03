<script lang="ts">
	export let User: any;

	const navigation = [
		{
			name: 'Home',
			href: '/',
			current: true
		}
	];

	const profileMenu = [
		{
			name: 'Your Profile',
			href: '/profile'
		},
		{
			name: 'Settings',
			href: '/settings'
		},
		{
			name: 'Logout',
			href: '/auth/logout'
		}
	];

	const openMobileMenu = () => {
		const menu = document.getElementById('mobile-menu') as HTMLDivElement;
		const menuIcon = document.getElementById('menuIcon') as HTMLOrSVGImageElement;
		const closeIcon = document.getElementById('closeIcon') as HTMLOrSVGImageElement;
		const currentClass = menu.className;

		if (currentClass === 'hidden') {
			menu.className = 'block';
			menuIcon.className.baseVal = 'hidden h-6 w-6';
			closeIcon.className.baseVal = 'block h-6 w-6';
		} else {
			menu.className = 'hidden';
			menuIcon.className.baseVal = 'block h-6 w-6';
			closeIcon.className.baseVal = 'hidden h-6 w-6';
		}
	};

	const classNames = (...classes: any) => {
		return classes.filter(Boolean).join(' ');
	};
</script>

<div class="min-h-full">
	<nav class="bg-gray-800">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex h-16 items-center justify-between">
				<div class="flex items-center">
					<div class="flex-shrink-0">
						<img class="h-8 w-8 rounded-md" src="/logo.png" alt="Nightmare Project" />
					</div>
					<div class="hidden md:block">
						<div class="ml-10 flex items-baseline space-x-4">
							{#each navigation as item}
								<a
									href={item.href}
									class={classNames(
										item.current
											? 'bg-gray-900 text-white'
											: 'text-gray-300 hover:bg-gray-700 hover:text-white',
										'px-3 py-2 rounded-md text-sm font-medium'
									)}
									aria-current={item.current ? 'page' : undefined}>{item.name}</a
								>
							{/each}
						</div>
					</div>
				</div>

				{#if User}
					<div class="hidden md:block">
						<div class="ml-4 flex items-center md:ml-6">
							<button
								type="button"
								class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
							>
								<span class="sr-only">View notifications</span>
								<svg
									class="h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
									/>
								</svg>
							</button>

							<div class="relative ml-3">
								<div>
									<button
										type="button"
										class="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
										id="user-menu-button"
										aria-expanded="false"
										aria-haspopup="true"
									>
										<span class="sr-only">Open user menu</span>
										<img
											class="h-8 w-8 rounded-full"
											src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
											alt=""
										/>
									</button>
								</div>

								<div
									class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
									role="menu"
									aria-orientation="vertical"
									aria-labelledby="user-menu-button"
									tabindex="-1"
								>
									{#each profileMenu as item}
										<a
											href={item.href}
											class="block px-4 py-2 text-sm text-gray-700"
											role="menuitem"
											tabindex="-1">{item.name}</a
										>
									{/each}
								</div>
							</div>
						</div>
					</div>
				{/if}

				<div class="-mr-2 flex md:hidden">
					<button
						type="button"
						on:click={openMobileMenu}
						class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
						aria-controls="mobile-menu"
						aria-expanded="false"
					>
						<span class="sr-only">Open main menu</span>
						<svg
							id="menuIcon"
							class="block h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
						<svg
							id="closeIcon"
							class="hidden h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
			</div>
		</div>

		<div class="hidden" id="mobile-menu">
			<div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
				{#each navigation as item}
					<a
						href={item.href}
						class={classNames(
							item.current
								? 'bg-gray-900 text-white'
								: 'text-gray-300 hover:bg-gray-700 hover:text-white',
							'block px-3 py-2 rounded-md text-base font-medium'
						)}
						aria-current={item.current ? 'page' : undefined}>{item.name}</a
					>
				{/each}
			</div>

			{#if User}
				<div class="border-t border-gray-700 pt-4 pb-3">
					<div class="flex items-center px-5">
						<div class="flex-shrink-0">
							<img
								class="h-10 w-10 rounded-full"
								src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
								alt=""
							/>
						</div>
						<div class="ml-3">
							<div class="text-base font-medium leading-none text-white">Tom Cook</div>
							<div class="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
						</div>
						<button
							type="button"
							class="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
						>
							<span class="sr-only">View notifications</span>
							<svg
								class="h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
								/>
							</svg>
						</button>
					</div>
					<div class="mt-3 space-y-1 px-2">
						{#each profileMenu as item}
							<a
								href={item.href}
								class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
								>{item.name}</a
							>
						{/each}
					</div>
				</div>
			{/if}
		</div>
	</nav>
</div>
