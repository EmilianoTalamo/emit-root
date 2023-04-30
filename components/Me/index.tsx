import React from 'react'
import Name from './Name'
import Icons from './Icons'
import Links from './Links'

import styles from './me.module.scss'

const Me = () => {
	return (
		<article className={styles.me}>
			<Name />
			<Icons />
			<Links />
		</article>
	)
}

export default Me
