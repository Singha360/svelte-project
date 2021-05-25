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

	main {
		/* position: absolute; */
	}

	.Checkboxes {
		float: left;
	}

	.Checkbox {
	}

	.GameBoard-Container {
		position: absolute;
		display: grid;
		place-items: center;
		height: 100vh;
		width: 100vw;
		z-index: -1;
	}
</style>

<main>
	<div class="Checkboxes">
		<input
			type="checkbox"
			class="Checkbox"
			bind:checked={$gameState.playerActive}
		/>
		Activate Cells
	</div>
	<div class="GameBoard-Container">
		<GameBoard rows={25} columns={24} />
	</div>
	<SidePanel />
</main>