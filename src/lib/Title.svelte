<script>
	let { name } = $props()
</script>

<section>
	<div class="outer bg-blue white">
		<div class="inner">
			<h1>{name}</h1>
		</div>
	</div>
</section>

<style>
	h1 {
		text-transform: capitalize;
	}
</style>
