<script>
	import Title from '../../lib/Title.svelte'

	export let data
</script>

<Title name="Blog" />

<section>
	<div class="outer">
		<div class="inner auto-fit">
			{#each data.posts.posts as post}
				<div class="flow">
					<a href="/blog/{post.slug}"
						><img src={post.featured_image} alt={post.title} /></a
					>
					<h2><a href="/blog/{post.slug}">{@html post.title}</a></h2>
					<p>{@html post.excerpt}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	img {
		aspect-ratio: 1 / 1;
		object-fit: cover;
	}
</style>
