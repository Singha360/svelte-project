import { writable } from "svelte/store";

export const activeState = writable(true);

export const diceState = writable({
	dices: [],
	value: 0
});

export const bitBoard = (rows: number, columns: number) => {
	const bitBoard = Array.from(Array(rows), () => new Array(columns).fill(0));
	return writable(bitBoard);
};
