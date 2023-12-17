<script>
  import { onMount } from 'svelte';
  import { makeTitle } from '../scripts/make_title.svelte';
  import Footer from "./footer.svelte";
  import Head from "./head.svelte";
  import Header from "./header.svelte";
  import Header_2 from "./header_2.svelte";
  import Header2 from "./header_2.svelte";
  export let content, layout, env, allContent, allLayouts, user;
</script>

<html lang="en">
  <Head title={makeTitle(content.filename)} {env} />
  <body id="bg">
    {#if user && $user.isAuthenticated}
      <svelte:component this={$user.menu} bind:content {user} />
    {/if}
    <main>
      <div class="page-wraper home-dark">
        <Header_2 {user} />
        <svelte:component
          this={layout}
          {...content.fields}
          {allContent}
          {allLayouts}
          {content}
        />
        <Footer />
      </div>
    </main>
  </body>
</html>
