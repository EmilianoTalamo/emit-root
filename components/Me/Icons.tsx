import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, SvgIcon } from '@mui/material'
import styles from './me.module.scss'

const Icons = () => {
	const list = [
		{
			icon: <FontAwesomeIcon icon={faEnvelope} />,
			link: 'mailto:emilianotalamo@gmail.com',
			title: 'E-mail',
		},
		{
			icon: <FontAwesomeIcon icon={faLinkedinIn} />,
			link: 'http://linkedin.com/in/emilianotalamo',
			title: 'LinkedIn',
		},
		{
			icon: <FontAwesomeIcon icon={faGithubAlt} />,
			link: 'https://github.com/emilianotalamo',
			title: 'GitHub',
		},
	]

	return (
		<ul className={styles.icons}>
			{list.map((item) => (
				<li key={item.title} className={styles['icons--item']}>
					<a
						title={item.title}
						target="_blank"
						href={item.link}
						className={styles['icons--link']}
					>
						<Button variant="text">
							<SvgIcon>{item.icon}</SvgIcon>
						</Button>
					</a>
				</li>
			))}
		</ul>
	)
}

export default Icons
