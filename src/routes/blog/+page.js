export async function load({ fetch }) {
	const endpoint = 'https://jsonplaceholder.typicode.com/posts'

	const response = await fetch(endpoint)
	const posts = await response.json()

	return {
		posts,
	}
}
