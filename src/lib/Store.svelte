<script lang="ts" defer>
  const data = ghReq(
    "https://raw.githubusercontent.com/PBP-Store/plugins-list/main/plugins.json"
  );

  async function ghReq(uri: string) {
    const response = await fetch(uri);
    const data = await response.json();

    return data;
  }
</script>

<div class="store">
  <div class="container">
    {#await data}
      <div class="grid-container">
        <article>
          <span>Loading...</span>
        </article>
      </div>
    {:then mdArray}
      {#if mdArray.plugins.length <= 0}
        <div class="grid-container">
          <article>
            <span class="Nothing"
              ><i class="fa-solid fa-dog" /> Wow! such nothing!
            </span>
          </article>
        </div>
      {:else}
        {#each mdArray.plugins as d}
          <article class="flex-container">
            <span id="Name">{d.name}</span>
            <span id="Author">{d.author}</span>
            <a href={d.ghUrl}>
              <i class="fa-brands fa-github-alt" /> Github
            </a>
          </article>
        {/each}
      {/if}
    {/await}
  </div>
</div>
