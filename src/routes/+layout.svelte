<script>
  import '$lib/style.css'
	import Footer from '$lib/Footer.svelte';
  import Header from '$lib/Header.svelte';
</script>

<div class="wrapper">
  <Header />
  
  <main>
    <slot></slot>
  </main>
  
  <Footer />
</div>

<style>
  .wrapper {
    min-height: 100dvh;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
</style>