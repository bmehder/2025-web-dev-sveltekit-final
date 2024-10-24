export async function load({ fetch, params }) {
	// const endpoint = 'https://jsonplaceholder.typicode.com/posts/' + params.id

	const endpoint =
		'https://public-api.wordpress.com/rest/v1.1/sites/repo995752852.wordpress.com/posts/slug:' +
		params.slug

	// const endpoint =
	// 	'https://public-api.wordpress.com/rest/v1.1/sites/brad34937f1e4bb.wordpress.com/posts/slug:' +
	// 	params.slug

	const response = await fetch(endpoint)
	const post = await response.json()

	return {
		post,
	}
}
