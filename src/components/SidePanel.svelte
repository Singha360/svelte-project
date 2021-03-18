<script>
	import DiceContainer from "./DiceContainer.svelte";
</script>

<style>
	.SidePanel {
		height: 100%;
		width: fit-content;
		position: fixed;
		z-index: 1;
		top: 0;
		right: 0;
		overflow-x: hidden;
		padding-top: 20px;
		display: flex;
	}

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
