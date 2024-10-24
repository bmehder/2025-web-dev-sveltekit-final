<script>
	import Title from '$lib/Title.svelte'

	export let data
</script>

<Title name={data.post.title} />

<section>
	<div class="outer">
		<div class="inner">
			<div class="post-content flow">
				<img src={data.post.featured_image} alt={data.post.title} />
				<div class="flow">{@html data.post.content}</div>
			</div>
		</div>
	</div>
</section>

<style>
	img {
		max-width: 65ch;
	}

	/* .post-content :global(h2) {
		color: tomato;
	}

	.post-content :global(p) {
		max-width: unset;
	} */
</style>
