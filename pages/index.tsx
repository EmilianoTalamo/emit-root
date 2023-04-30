import Me from '@/components/Me'
import Spotify from '@/components/Spotify'
import React, { useCallback } from 'react'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'

import config from '@/public/config/particlesjs.json'
import { Engine } from 'tsparticles-engine'
import Head from 'next/head'

const Index = () => {
	const particlesInit = useCallback(async (engine: Engine) => {
		await loadFull(engine)
	}, [])

	return (
		<>
			<Head>
				<meta http-equiv="x-ua-compatible" content="ie=edge" />
				<meta
					name="viewport"
					content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, shrink-to-fit=no"
				/>
				<meta name="robots" content="index,follow" />
				<meta name="googlebot" content="index,follow" />
				<title>Emiliano Tálamo</title>
				<meta
					name="description"
					content="Homepage of Guido Emiliano Tálamo, Web Developer."
				/>
				<meta
					name="keywords"
					content="Portfolio, proyectos, projects, work, html, webdev, web, frontend, developer, resume, github, linkedin, links"
				/>
				<meta name="author" content="Emiliano Tálamo" />
				<link rel="me" href="mailto:emilianotalamo@gmail.com" />
				<meta name="theme-color" content="#673AB7" />
				<meta name="msapplication-TileColor" content="#673AB7" />
				<link rel="shortcut icon" type="image/x-icon" href="favicon.png" />
			</Head>
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
