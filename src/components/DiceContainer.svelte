<script>
	import Dice from "./Dice.svelte";

	function rollDices() {}
</script>

<div class="Dice">
	{#each new Array(2) as _, id}
		<Dice id="{id}" value="{1}" />
	{/each}
	<button class="roll" on:click="{rollDices}">Roll</button>
</div>
