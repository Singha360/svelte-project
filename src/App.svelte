<script lang="ts">
	import { gameState } from "./store";
	import { GameBoard, DiceContainer } from "./components";

	$: playerActive = $gameState.playerActive;

	function activate() {
		$gameState.playerActive = !$gameState.playerActive;
		console.log($gameState);
	}
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
	}

	.GameBoard {
		display: flex;
		justify-content: center;
	}

	.DiceContainer {
		display: flex;
		justify-content: flex-end;
	}
</style>

<main class="App">
	<div class="button">
		<button on:click="{activate}">
			{playerActive ? "Deactivate" : "Activate"}
		</button>
	</div>
	<div class="GameBoard">
		<GameBoard rows="{25}" columns="{24}" />
	</div>
	<div class="DiceContainer">
		<DiceContainer numOfDice="{2}" showButton="{true}" />
	</div>
</main>
