import { ICurrentlyPlayingResponse } from '@/interfaces/spotify.interface'
import React from 'react'

const Player = ({
	spotifyData,
}: {
	spotifyData: ICurrentlyPlayingResponse
}) => {
	return (
		<aside>
			<img
				src={spotifyData?.item.album.images[0].url}
				alt={spotifyData?.item.album.name}
			/>
			{spotifyData?.item.artists[0].name} - {spotifyData?.item.name}
		</aside>
	)
}

export default Player
