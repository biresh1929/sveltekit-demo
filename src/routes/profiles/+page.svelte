<script lang="ts">
    import Table from "$lib/Table.svelte";
  
    /** @type {import('./$types').PageData} */
    export let data;
    console.log("hello", data.names);
  
    /** @type {import('./$types').ActionData} */
    export let form;
  </script>
  
  <Table names={data.names} />
  
  <div
    class="mt-10 pt-10 "
  >
    <form method="POST" action="?/create">
      <div class="flex flex-wrap -mx-3 mb-2">
        <div class=" px-3 mb-6 ">
          <label
            class="block uppercase  text-gray-700 font-bold mb-2"
            for="grid-city"
          >
            Name
          </label>
          <input
            class="appearance-none block "
            id="name"
            type="text"
            placeholder="Enter name"
            name="name"
          />
        </div>
        <div class="px-3 mb-6">
          <label
            class="block uppercase  text-gray-700 font-bold mb-2"
            for="grid-city"
          >
            Email
          </label>
          <input
            class="appearance-none block  text-gray-700 "
            id="email"
            type="text"
            placeholder="Enter email"
            name="email"
          />
        </div>
        <button
          type="submit"
          class=" font-bold mt-5 ml-2 px-2"
        >
          Create Applicant
        </button>
      </div>
    </form>
    {#if form?.success}
      <p class="pt-2">Added new Applicant!</p>
    {/if}
  </div>
  