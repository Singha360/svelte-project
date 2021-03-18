import { Writable, writable } from "svelte/store";

export const gameState = writable({
	playerActive: true
});

export const diceState = writable({
	dice: [],
	value: 0
});

export let bitBoard: Writable<number[][]> = writable([]);
