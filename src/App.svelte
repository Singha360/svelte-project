<script lang="ts">
	import GameBoard from "./components/GameBoard.svelte";
	import Dice from "./components/Dice.svelte";
	import { activeState } from "./store/store";

	function activate() {
		activeState.set(!$activeState);
	}
</script>

<style>
	:global(body) {
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
			"Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
			"Helvetica Neue", sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
</style>

<main class="App">
	<button on:click="{activate}">{$activeState ? "Deactivate" : "Activate"}
	</button>
	<GameBoard numOfCell="{100}" columns="{10}" />
</main>
