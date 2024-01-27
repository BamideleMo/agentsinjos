// vite.config.js
import { defineConfig } from "file:///home/bamidelemo/solidjs/agentsinjos/node_modules/vite/dist/node/index.js";
import solidPlugin from "file:///home/bamidelemo/solidjs/agentsinjos/node_modules/vite-plugin-solid/dist/esm/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    solidPlugin()
  ],
  server: {
    port: 3e3
  },
  build: {
    target: "esnext"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9iYW1pZGVsZW1vL3NvbGlkanMvYWdlbnRzaW5qb3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL2JhbWlkZWxlbW8vc29saWRqcy9hZ2VudHNpbmpvcy92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9iYW1pZGVsZW1vL3NvbGlkanMvYWdlbnRzaW5qb3Mvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBzb2xpZFBsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1zb2xpZCc7XG4vLyBpbXBvcnQgZGV2dG9vbHMgZnJvbSAnc29saWQtZGV2dG9vbHMvdml0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICAvKiBcbiAgICBVbmNvbW1lbnQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIGVuYWJsZSBzb2xpZC1kZXZ0b29scy5cbiAgICBGb3IgbW9yZSBpbmZvIHNlZSBodHRwczovL2dpdGh1Yi5jb20vdGhldGFybmF2L3NvbGlkLWRldnRvb2xzL3RyZWUvbWFpbi9wYWNrYWdlcy9leHRlbnNpb24jcmVhZG1lXG4gICAgKi9cbiAgICAvLyBkZXZ0b29scygpLFxuICAgIHNvbGlkUGx1Z2luKCksXG4gIF0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDMwMDAsXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgdGFyZ2V0OiAnZXNuZXh0JyxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4UixTQUFTLG9CQUFvQjtBQUMzVCxPQUFPLGlCQUFpQjtBQUd4QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTVAsWUFBWTtBQUFBLEVBQ2Q7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsRUFDVjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==