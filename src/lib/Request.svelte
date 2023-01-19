<script lang="ts">
  import axios from "axios";
  let name: string;
  let author: string;
  let url: string;

  const handleSubmit = (e) => {
    const actionUrl = e.target.action;

    axios.post(actionUrl, {
      name: `${name}`,
      author: `${author}`,
      url: `${url}`,
    });
  };
</script>

<div class="grid-container">
  <article>
    <form
      class="form"
      action="https://api2webhook-jepb.vercel.app/webhook"
      on:submit|preventDefault={handleSubmit}
    >
      <input
        bind:value={name}
        type="text"
        name="plugin-name"
        placeholder="Plugin name"
      />
      <input
        bind:value={author}
        type="text"
        name="author"
        placeholder="Author"
      />
      <input bind:value={url} type="text" name="url" placeholder="Github URL" />

      <button type="submit">Submit</button>
    </form>
  </article>
</div>
