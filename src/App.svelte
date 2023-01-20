<script lang="ts">
  import About from "./lib/About.svelte";
  import Store from "./lib/Store.svelte";
  import Request from "./lib/Request.svelte";
  import { Arr } from "./TitlesArr";
  import "./Main.scss";
  import { Router, Route, Link } from "svelte-navigator";

  const currentSub = Arr[Math.floor(Math.random() * Arr.length)];
</script>

<svelte:head>
  <script
    src="https://kit.fontawesome.com/dacbc752b2.js"
    crossorigin="anonymous"
  ></script>
</svelte:head>

<div class="router-container">
  <Router>
    <main>
      <nav class="nav">
        <ul>
          <li class="li">
            <i class="fa-solid fa-gamepad" /> <strong>PBP-Store</strong>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/"><Link to="/">Home</Link></a>
          </li>
          <li>
            <a href="plugins"><Link to="plugins">Plugins</Link></a>
          </li>
          <li>
            <a href="about"><Link to="about">About</Link></a>
          </li>
        </ul>
      </nav>
    </main>

    <Route path="/">
      <div class="grid-container">
        <h1>PBP Store</h1>
        <span class="subtitle">{currentSub}</span>
        <p class="tagline">
          A "Store" to facilitate the gathering of PBP plugins. Read the About
          page to know how to get your plugin in here!
        </p>

        <div class="inline">
          <button>
            <Link class="white-text" to="plugins">Let's Start</Link>
          </button>
        </div>
      </div>
    </Route>
    <Route path="plugins" primary={false} component={Store} />
    <Route path="about" primary={false} component={About} />
    <Route primary={false}>
      <div class="grid-container">
        <article>
          <i class="fa-solid fa-bomb" /> <span>404 Not found</span>
        </article>
      </div>
    </Route>
  </Router>
</div>
