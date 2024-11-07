import { resolve } from "path";
import {defineConfig} from "vite";

export default defineConfig ({
    build: {
        rollupoption: {
            Input: {
                main: resolve(__dirname, "index.html"),
                main: resolve(__dirname, "news.html"),
            },
        },
    },
});