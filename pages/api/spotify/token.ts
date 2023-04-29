import { NextApiRequest, NextApiResponse } from 'next'
import { Base64 } from 'js-base64'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const CLIENT_ID = process.env.SPOTIFY_CLIENT
	const SECRET_ID = process.env.SPOTIFY_SECRET
	const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN || ''
	
	const token = Base64.encode(`${CLIENT_ID}:${SECRET_ID}`)

	const myHeaders = new Headers()

	myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

	myHeaders.append('Authorization', `Basic ${token}`)

	const urlencoded = new URLSearchParams()
	urlencoded.append('grant_type', 'refresh_token')
	urlencoded.append('refresh_token', REFRESH_TOKEN)
	urlencoded.append('redirect_uri', process.env.SPOTIFY_REDIRECT_URI || '')


	const requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: urlencoded,
	}

	const response = await fetch('https://accounts.spotify.com/api/token', requestOptions)

	let accessToken: boolean|string = false

	try {
		const data = await response.json()
		console.info(data)
		if(data.access_token) accessToken = data.access_token
	}
	catch ( err ) {
		res.status(422).json({ token: accessToken })
	}

	res.json({ token: accessToken })
}
