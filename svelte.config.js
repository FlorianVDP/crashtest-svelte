import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import {dirname} from 'path';
import {fileURLToPath} from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter()
    },
    preprocess: preprocess({
        sass: {
            prependData: `@import '${__dirname}/src/styles/env'`,
            renderSync: true,
        },
    })
};

export default config;