<script lang="ts" defer>
  const fake = {
    themes: [
      {
        name: "DarkCyanSaffron",
        author: "TideTwo",
        colors: ["#131414", "#2393ab", "#faba12"],
        ghUrl: "https://github.com/TideTwo/BPOThemes/blob/main/DarkCyanSaffron.css",
      },
    ],
  };
  const data = fake || ghReq("https://raw.githubusercontent.com/BPO-Store/themes-list/main/themes-bpo.json");

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
      {#if mdArray.themes.length <= 0}
        <div class="grid-container">
          <article>
            <span class="Nothing"><i class="fa-solid fa-dog" /> Wow! such nothing! </span>
          </article>
        </div>
      {:else}
        {#each mdArray.themes as d}
          <article class="flex-container">
            <span id="Name">{d.name}</span>
            <span id="Author">{d.author}</span>
            <a href={d.ghUrl}>
              <i class="fa-brands fa-github-alt" /> Github
            </a>
            <div class="themeColors">
              {#each d.colors as color}
                <i class="fa-solid fa-circle themeColor" style={`color:${color}`} />
              {/each}
            </div>
          </article>
        {/each}
      {/if}
    {/await}
  </div>
</div>
