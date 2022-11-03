<script lang="ts" defer>
  	import { readData } from '../Database'
  	const data = readData()
	const mdArray = data.MainData
</script>

<div class="store">
	<div class="center">
		{#each mdArray as data}
			<div class="cards">
				<div class="info">
					<span id="Name">{data.plugName}</span><br>
					<span id="Author">{data.author}</span><br>
				</div>
				<a href="{data.down}">
					<i class="fa-solid fa-download"></i> Download
				</a>
			</div>
    	{/each}
	</div>
</div>