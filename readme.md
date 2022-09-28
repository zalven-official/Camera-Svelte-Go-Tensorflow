## Tech Stack
- Rustc 1.64.0
- Yew v0.19
- Tailwind css v3.1.8
- Go v1.18

# Client Side

## Running Client Side
0. Dependecies before starting
```
$ rustup target add wasm32-unknown-unknown 
$ cargo install trunk
```

1. Go to the client directory
```bash
$ cd client
```
2. Install dependencies
```bash
$ cargo run
```
3. This runs and builds the tailwind components while 
developing the clients side
```bash
$ npx tailwindcss -i ./styles/input.css -o ./styles/output.css --watch 
```
4. Run the client side and the tailwind building side at the same time
```
$ trunk serve
```
## Adding Eslint tailwind on Rust
Go to the settings json file and add this script below.
```json
  "emmet.includeLanguages": {
    "rust": "html",
    "*.rs": "html"
  },
  "tailwindCSS.includeLanguages": {
    "rust": "html",
    "*.rs": "html"
  },
  "files.associations": {
    "*.rs": "rust"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
  "rust-analyzer.server.extraEnv": {
    "RUSTFLAGS": "--cfg=web_sys_unstable_apis"
  }
```


---


# Running Server Side 