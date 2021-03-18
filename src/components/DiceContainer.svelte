<script>
	import Dice from "./Dice.svelte";

	function rollDice() {}
</script>

<div class="DiceContainer">
	{#each new Array(2) as _, id}
		<Dice id="{id}" value="{1}" />
	{/each}
	<button class="roll" on:click="{rollDice}">Roll</button>
</div>
