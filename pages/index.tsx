import Me from '@/components/Me'
import Spotify from '@/components/Spotify'
import React, { useCallback } from 'react'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'

import config from '@/public/config/particlesjs.json'
import { Engine } from 'tsparticles-engine'

const Index = () => {
	const particlesInit = useCallback(async (engine: Engine) => {
		await loadFull(engine)
	}, [])

	return (
		<>
			<main>
				<Me />
				<Spotify />
			</main>
			<Particles
				init={particlesInit}
				id="particles-canvas"
				// @ts-ignore
				options={{ ...config }}
			/>
		</>
	)
}

export default Index
