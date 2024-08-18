<script>
    export let names
</script>

<div
	class="mt-10 pt-10 p-12 mx-auto "
>
	<div class="flex items-center justify-between mb-4">
		<div>
			<h2 class="text-xl font-semibold">List of Users</h2>
			<p class="text-sm text-gray-500">
				Fetched {names.length} users
			</p>
		</div>
	</div>
	<div >
		{#each names as user (user.id)}
			<div class="flex items-center justify-between py-3">
				<div class="flex items-center ">
					<div class="flex">
						<p class="font-medium pt-1">{user.name}</p>
						<p class="font-medium pl-5 text-gray-500 pt-0">{user.email}</p>                        
					</div>
				</div>
                <form method="POST" action="/profiles?/delete">
                <input type="hidden" name="id" id="id" value={user.id}>
                <button type="submit">
                    <img class="w-4 float-right" src="./trash-can.svg" alt="delete"/>
                </button>
                </form>
			</div>
		{/each}
	</div>
</div>