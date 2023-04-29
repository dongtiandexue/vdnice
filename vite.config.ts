import { defineConfig } from "vite";
import Unocss from 'unocss/vite'
import uni from "@dcloudio/vite-plugin-uni";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni(), Unocss()],
});
