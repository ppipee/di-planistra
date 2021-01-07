import React from 'react'

import { IconProps } from '../types'

const SettingIcon = ({ size, ...props }: IconProps) => {
	return (
		<svg height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M25.5201 17.248C25.5681 16.848 25.6001 16.432 25.6001 16C25.6001 15.568 25.5681 15.152 25.5041 14.752L28.2081 12.64C28.4481 12.448 28.5121 12.096 28.3681 11.824L25.8081 7.39195C25.6481 7.10395 25.3121 7.00795 25.0241 7.10395L21.8401 8.38395C21.1681 7.87195 20.4641 7.45595 19.6801 7.13595L19.2001 3.74395C19.1521 3.42395 18.8801 3.19995 18.5601 3.19995H13.4401C13.1201 3.19995 12.8641 3.42395 12.8161 3.74395L12.3361 7.13595C11.5521 7.45595 10.8321 7.88795 10.1761 8.38395L6.99206 7.10395C6.70406 6.99195 6.36806 7.10395 6.20806 7.39195L3.64806 11.824C3.48806 12.112 3.55206 12.448 3.80806 12.64L6.51206 14.752C6.44806 15.152 6.40006 15.584 6.40006 16C6.40006 16.416 6.43206 16.848 6.49606 17.248L3.79206 19.36C3.55206 19.552 3.48806 19.904 3.63206 20.176L6.19206 24.608C6.35206 24.896 6.68806 24.992 6.97606 24.896L10.1601 23.616C10.8321 24.128 11.5361 24.544 12.3201 24.864L12.8001 28.256C12.8641 28.576 13.1201 28.8 13.4401 28.8H18.5601C18.8801 28.8 19.1521 28.576 19.1841 28.256L19.6641 24.864C20.4481 24.544 21.1681 24.112 21.8241 23.616L25.0081 24.896C25.2961 25.008 25.6321 24.896 25.7921 24.608L28.3521 20.176C28.5121 19.888 28.4481 19.552 28.1921 19.36L25.5201 17.248ZM16.0001 20.8C13.3601 20.8 11.2001 18.64 11.2001 16C11.2001 13.36 13.3601 11.2 16.0001 11.2C18.6401 11.2 20.8001 13.36 20.8001 16C20.8001 18.64 18.6401 20.8 16.0001 20.8Z"
				fill="currentColor"
			/>
		</svg>
	)
}

export default SettingIcon
