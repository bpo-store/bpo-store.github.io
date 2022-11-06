<script lang="ts" defer>
	const data = ghReq("pbp-store")

	async function ghReq(user: string) {
	    // Defines a URI to make a request
	    let uri: string = `https://api.github.com/users/${user}/repos`

	    // Makes the request
	    const data = await fetch(uri)
	    const d = await data.json()
	    var ghObject = {
	        requests: [

	        ]
	    }

	    // For every object inside the response
	    // Get it's data and insert it to an object
	    // After that push to ghObject
	    for(var i = 0; i < d.length; i++) {
	        // Index
	        var index = d[i]

	        // Res Obj
	        var dataObj = {
	            name: index.name,
	            ghUrl: index.html_url,
	            author: index.description.replace("Author: ", "")
	        }

	        // Push to ghObject
	        ghObject.requests.push(dataObj)
	    }

	    return ghObject
	}
</script>

<div class="store">
	<div class="center">
		{#await data}
			<div class="loading">
				<p>Loading</p>
			</div>
		{:then mdArray} 
			{#each mdArray.requests as d}
				<div class="cards">
					<div class="info">
						<span id="Name">{d.name}</span><br>
						<span id="Author">{d.author}</span><br>
					</div>
					<a href="{d.ghUrl}">
						<i class="fa-solid fa-download"></i> Download
					</a>
				</div>
			{/each}
		{/await}
	</div>
</div>