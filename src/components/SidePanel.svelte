<script>
	import { gameState } from "../store";
	import DiceContainer from "./DiceContainer.svelte";
</script>

<style>
	.SidePanel {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 250px;
		background-color: #bbdfc5;
		box-shadow: -20px 0px 10px rgba(0, 0, 0, 0.5);
		position: fixed;
		z-index: 1;
		top: 0;
		right: 0;
		padding: 10px;
		user-select: none;
		transition: right ease-in-out 0.35s, box-shadow ease-in 0.25s;
	}

	#ShowHideCheck {
		display: none;
	}

	:not(#ShowHideCheck:checked) ~ .SidePanel {
		right: -270px;
		box-shadow: none;
	}

	label[for="ShowHideCheck"] {
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: absolute;
		top: 50vh;
		right: 80%;
	}

	.ShowHide {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		background-color: #6b4d57;
		cursor: pointer;
		margin: 0;
	}
</style>

<input
	id="ShowHideCheck"
	type="checkbox"
	bind:checked="{$gameState.showPanel}"
/>
<div class="SidePanel">
	<div class="DiceContainer">
		<DiceContainer numberOfDice="{2}" showButton="{true}" />
	</div>
	<label for="ShowHideCheck">
		<div class="ShowHide"></div>
	</label>
</div>
