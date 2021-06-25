import { svelte } from "@sveltejs/vite-plugin-svelte";
import tsconfigPaths from "vite-tsconfig-paths";
import strip from "@rollup/plugin-strip";

// https://vitejs.dev/config/
export default ({ command, mode }) => {
	/**
	 * @type {import('vite').UserConfig}
	 */
	const config = {
		plugins: [svelte(), tsconfigPaths()],
		build: {
			outDir: "build",
			terserOptions: {
				compress: true
			}
		}
	};
	if (command === "build") {
		config.plugins.push(
			strip({
				include: ["**/*.svelte", "**/*.ts", "**/*.js", "**/*.mjs", "**/*.cjs"]
			})
		);
	}

	return config;
};
