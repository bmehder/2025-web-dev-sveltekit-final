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
	.post-content {
		max-width: 65ch;
	}
</style>
