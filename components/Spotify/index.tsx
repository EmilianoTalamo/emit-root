import { useSWRConfig } from 'swr'
import { useApi } from '@/hooks/useApi'
import { fetcher } from '@/services/fetcher'
import React, { useEffect, useState } from 'react'
import { ICurrentlyPlayingResponse } from '@/interfaces/spotify.interface'
import Player from './Player'

const Spotify = () => {
	const [auth, setAuth] = useState<false | string>(false)


	const endpoint = 'https://api.spotify.com/v1/me/player/currently-playing'

	const { apidata } = useApi<ICurrentlyPlayingResponse>(
		endpoint,
		'GET',
		undefined,
		auth || '',
		!!auth
	)

	const getAuth = async () => {
		const { data } = await fetcher<{ token: false | string }>(
			'/api/spotify/token',
		)
		setAuth(data?.token || false)
	}

	useEffect(() => {
		// Get token on load page
		getAuth()
	}, [])

	useEffect(() => {
		// Revalidate token if it expires
		if (apidata !== null && apidata?.error?.status === 401) getAuth()
	}, [apidata])

	const { mutate } = useSWRConfig()
	useEffect(() => {
		// Try to fetch API when token changes
		if(auth) mutate(`${endpoint}GET`)
	}, [auth])

	return (
		<div>
			<pre>{JSON.stringify(apidata?.error?.status)}</pre>
			{apidata !== null && apidata?.item && <Player spotifyData={apidata} />}
		</div>
	)
}

export default Spotify
