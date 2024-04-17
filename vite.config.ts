import process from "node:process";
import { defineConfig } from "vite";

const deployEnv = process.env.DEPLOY_ENV;

export default defineConfig({
  base: deployEnv === "gh-pages"
    ? "/learn-udemy-gamedev-platformer-game/"
    : "/",
  assetsInclude: ["**/*.mp3", "**/*.jpeg", "**/*.png", "**/*.task"],
});
