<script lang="ts">
	import { diceState, gameState } from "./store";
	import { GameBoard, SidePanel } from "./components";
</script>

<style>
	:global(body) {
		background-color: #eafdf8;
		min-height: 100%;
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
			"Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
			"Helvetica Neue", sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		overflow: hidden;
	}

	:global(button) {
		outline: none;
	}

	.App {
	}

	.Checkboxes {
		/* display: flex;
		flex-direction: column;
		float: left; */
	}

	.Checkbox {
	}

	.GameBoard {
		/* position: absolute; */
		/* justify-content: center; */
		display: flex;
		justify-content: center;
	}
</style>

<main class="App">
	<div class="Checkboxes">
		<input
			type="checkbox"
			class="Checkbox"
			bind:checked="{$gameState.playerActive}"
		/>
		Activate Cells
	</div>
	<div class="GameBoard">
		<GameBoard rows="{25}" columns="{24}" />
	</div>
	<SidePanel />
</main>
