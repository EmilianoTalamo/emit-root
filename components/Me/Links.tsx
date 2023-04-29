import { Button } from '@mui/material'
import React from 'react'
import styles from './me.module.scss'

const Links = () => {
	return (
		<ul>
			<li>
				<a href="https://resume.emitalamo.dev/">
					<Button variant="text" className={styles['links--button']}>
						Resumé
					</Button>
				</a>
			</li>
		</ul>
	)
}

export default Links
