import useSWR from 'swr'
import { fetcher, FetcherResult } from '@/services/fetcher'

export function useApi<T>(
	path: string,
	method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
	body = {},
	token: string | undefined = undefined,
	shouldFetch: boolean = true,
): {
	apidata: T | null | null
	isLoading: boolean
	isError: FetcherResult<T>['err']
} {
	const { data } = useSWR<FetcherResult<T>>(
		shouldFetch ? path + method : null,
		() => fetcher<T>(path, method, body, token),
	)

	const apidata = data?.data || null
	const apierr = data?.err || null

	return {
		apidata,
		isLoading: !apierr && !apidata,
		isError: apierr,
	}
}
