<script>
	import DiceContainer from "./DiceContainer.svelte";
</script>

<style>
	.DiceContainer {
		display: flex;
		justify-content: flex-end;
	}
</style>

<div class="SidePanel">
	<div class="DiceContainer">
		<DiceContainer numOfDice="{2}" showButton="{true}" />
	</div>
</div>
