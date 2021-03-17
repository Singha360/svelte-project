<script>
	import Dice from "./Dice.svelte";

	const dices = [
		{ id: 0, value: 1 },
		{ id: 1, value: 2 }
	];
</script>

<div class="Dice">
	{#each dices as dice, i}
		<Dice {...dice} />
	{/each}
	<button class="roll">Roll</button>
</div>
