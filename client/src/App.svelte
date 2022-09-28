<script lang="ts">
  import Router from "svelte-spa-router";
  import Home from "./pages/Home.svelte";
  import NotFound from "./pages/NotFound.svelte";
  const routes = {
    "/": Home,
    "*": NotFound,
  };
</script>

<main><Router {routes} /></main>
