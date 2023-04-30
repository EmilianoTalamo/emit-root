export interface FetcherResult<T> {
	data: T | null
	err: null | { [key: string]: any }
}

export const fetcher = async <T>(
	path: string,
	method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
	body = {},
	token: string | undefined = undefined,
): Promise<FetcherResult<T>> => {
	const uri = `${path}`

	try {
		if (!path) throw ''

		const options = {
			method,
			...(method != 'GET' && {
				body: JSON.stringify(body),
			}), // fetch won't fetch with a body sent on a GET payload
			headers: {
				'Content-Type': 'application/json',
				Authorization: token ? `Bearer ${token}` : 'none',
			},
		}

		const res = await fetch(uri, options)

		const isJsonResponse = res.headers
			.get('content-type')
			?.includes('application/json')
		if (res.ok) {
			const data: T = isJsonResponse ? await res.json() : null
			return { data, err: null }
		}
		if (isJsonResponse) throw await res.json()
		else throw {}
	} catch (err: any) {
		return { data: null, err }
	}
}
