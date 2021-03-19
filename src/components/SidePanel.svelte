<script>
	import DiceContainer from "./DiceContainer.svelte";
</script>

<style>
	.SidePanel {
		background-color: #bbdfc5;
		height: 100%;
		width: fit-content;
		position: fixed;
		z-index: 1;
		top: 0;
		right: 0;
		overflow-x: hidden;
		padding: 10px;
		display: flex;
		box-shadow: -20px 0px 10px rgba(0, 0, 0, 0.5);
	}
</style>

<div class="SidePanel">
	<div class="DiceContainer">
		<DiceContainer numOfDice="{2}" showButton="{true}" />
	</div>
</div>
