<svelte:head>
  <script src="https://kit.fontawesome.com/dacbc752b2.js" crossorigin="anonymous"></script>
</svelte:head>

<script lang="ts">
  import About from "./lib/About.svelte"
  import Store from "./lib/Store.svelte"
  import { Arr } from "./TitlesArr"

  const currentSub = Arr[Math.floor(Math.random() * Arr.length)]

  var page: number;
  function mainPage() {
    page = 0
  }
  function storePage() {
    page = 1
  }
  function aboutPage() {
    page = 2
  }
  function requestPage() {
    page = 3
  }

</script>

<main>
  <ul class="nav">
    <li>
      <button id="btn" on:click={mainPage}>
        <i class="fa-solid fa-gamepad"></i> PBP-Store
      </button>
    </li>
    <li>
      <button on:click={storePage}>
        Plugins
      </button>
    </li>
    <li>
      <button on:click={requestPage}>
        Request
      </button>
    </li>
    <div class="align-right">
      <li><a href="#news">Github</a></li>
      <li><a href="#contact">PBP Github</a></li>
      <button on:click={aboutPage}>
        About
      </button>
    </div>
  </ul>

  {#if page === 0}
    <div class="main center">
      <span class="title">PBP Store</span><br>
      <span class="subtitle">{currentSub}</span>
      <p>
          A "Store" to facilitate the gathering of PBP plugins<br>
          Read the About page to know how to get your plugin in here!
      </p>

      <button on:click={storePage}>
          Let's Start!
      </button>
    </div>
  {:else if page === 1}
    <Store/>
  {:else if page === 2}
    <About/>
  {:else}
    <div class="main center">
      <span class="title">PBP Store</span><br>
      <span class="subtitle">{currentSub}</span>
      <p>
          A "Store" to facilitate the gathering of PBP plugins<br>
          Read the About page to know how to get your plugin in here!
      </p>

      <button on:click={storePage}>
          Let's Start!
      </button>
    </div>
  {/if}
</main>
