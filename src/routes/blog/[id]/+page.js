export async function load({ fetch, params }) {
	const endpoint = 'https://jsonplaceholder.typicode.com/posts/' + params.id

	const response = await fetch(endpoint)
	const post = await response.json()

	return {
		post,
	}
}
