import React from 'react'

import { IconProps } from '../types'

const HomeIcon = ({ size, ...props }: IconProps) => {
	return (
		<svg height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M11.6666 23.3333V16.3333H16.3333V23.3333H22.1666V14H25.6666L14 3.5L2.33331 14H5.83331V23.3333H11.6666Z"
				fill="currentColor"
			/>
		</svg>
	)
}

export default HomeIcon
