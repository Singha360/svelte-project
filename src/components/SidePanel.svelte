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
		box-shadow: -20px 0px 10px rgba(0, 0, 0, 0.5);
		position: fixed;
		z-index: 1;
		right: 0;
		padding: 10px 10px;
		user-select: none;
		transition: right ease-in-out 0.35s, box-shadow ease-in 0.25s;
	}

	#ShowHideCheck {
		display: none;
	}

	:not(#ShowHideCheck:checked) ~ .SidePanel {
		position: absolute;
		right: -270px;
		box-shadow: none;
	}

	label[for="ShowHideCheck"] {
		position: absolute;
		margin: -10px;
		width: fit-content;
		transform: translate(-50%, -50%);
		top: 50%;
	}

	.ShowHide {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		background-color: #6b4d57;
		cursor: pointer;
		margin: 0;
	}

	.DiceContainer {
		display: flex;
		flex-direction: column;
	}

	.Glass {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
		/* background: red;
		background: linear-gradient(
			to right bottom,
			rgba(255, 255, 255, 0.7),
			rgba(255, 255, 255, 0.3)
		); */
	}
</style>

<input
	id="ShowHideCheck"
	type="checkbox"
	bind:checked="{$gameState.showPanel}"
/>
<div class="SidePanel">
	<div class="Glass"></div>
	<div class="DiceContainer">
		<DiceContainer numberOfDice="{2}" showButton="{true}" />
	</div>
	<label for="ShowHideCheck">
		<div class="ShowHide"></div>
	</label>
</div>
