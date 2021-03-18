import { Writable, writable } from "svelte/store";

export const activeState = writable(true);

export const diceState = writable({
	dices: [],
	value: 0
});

export let bitBoard: Writable<number[][]> = writable([]);
