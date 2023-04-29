import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

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
		<ul>
			{list.map((item) => (
				<li key={item.title}>
					<a href={item.link}>{item.icon}</a>
				</li>
			))}
		</ul>
	)
}

export default Icons
