import { ICurrentlyPlayingResponse } from '@/interfaces/spotify.interface'
import React from 'react'

import styles from './spotify.module.scss'

const Player = ({
	spotifyData,
}: {
	spotifyData: ICurrentlyPlayingResponse
}) => {
	return (
		<aside className={styles.player}>
			<figure className={styles['album--cover']}>
				<img
					src={spotifyData?.item.album.images[0]?.url || '/img/default_album.svg'}
					alt={spotifyData?.item.album.name}
				/>
			</figure>
			<p className={styles.title}>
				<span className={styles['title--status']}>
					{spotifyData.is_playing
						? `I'm currently listening to`
						: `The last song I've listened was`}
					:{' '}
				</span>
				<span className={styles['title--song']}>
					{spotifyData?.item.artists[0].name} - {spotifyData?.item.name}
				</span>
			</p>
		</aside>
	)
}

export default Player
