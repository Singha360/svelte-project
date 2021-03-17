import { writable } from "svelte/store";

export const activeState = writable(true);

export const diceState = writable({
	dices: [],
	value: 0
});

export const bitBoard = (rows: number, columns: number) => {
	const bitBoard = new Array(rows).fill(new Array(columns).fill(0));
	return writable(bitBoard);
};
