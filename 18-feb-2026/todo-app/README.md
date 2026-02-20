Install shadcn pertama kali:
npx shadcn-ui@latest init

Ambil komponen:
npx shadcn-ui@latest add input button card (sesuaikan dengan apa yang mau diambil)

Langkah selanjutnya:

- Setup TSCONFIG (tambahkan compiler options, baseurl, dan paths):
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "src/*"
      ]
    }
  },
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.node.json"
    }
  ]
}

- Setup TSCONFIG untuk tsconfig.app.json:
    "allowImportingTsExtensions": false,
    "noEmit": false,

- Setup TSCONFIG untuk tsconfig.node.json:
    "allowImportingTsExtensions": false,
    "noEmit": false,

- Setup VITE CONFIG:
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});