<script>
	import Title from '$lib/Title.svelte'

	export let data
</script>

<Title name={data.post.title} />
