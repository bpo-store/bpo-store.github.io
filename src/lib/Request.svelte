<script lang="ts">
    import { writable } from "svelte/store";
    import { send } from "./Webhook"
    const data = writable({
        pluginName: "",
        pluginAuthor: "",
        pluginGit: ""
    })

    function sendData() {
        const uri = "https://canary.discord.com/api/webhooks/1037830603627835453/PQ0pM1pkthn3rWasXDhmFVRHdnA-0V1n58KzfvPEF3ZdDbi17dCc-fXwrgAU1cSt4Eqb"

        let postData = {
            user: "PBP-Store",
            embeds: [
                {
                    title: "New request!",
                    type: "rich",
                    fields: [
                        {
                            name: "Plugin Name:",
                            value: `${$data.pluginName}`,
                        },
                        {
                            name: "Plugin Author:",
                            value: `${$data.pluginAuthor}`,
                        },
                        {
                            name: "Plugin Git:",
                            value: `${$data.pluginGit}`,
                        }
                    ]
                }
            ]
        }

        send(uri, postData)
    }
</script>

<div class="request-form">
    <form action="/">
        <input type="text" placeholder="Plugin Name" bind:value={$data.pluginName}><br>
        <input type="text" placeholder="Plugin Author" bind:value={$data.pluginAuthor}><br>
        <input type="text" placeholder="Plugin Git" bind:value={$data.pluginGit}><br>
    </form>
    <div class="button">
        <button on:click={sendData}>
            Submit
        </button>
    </div>
</div>