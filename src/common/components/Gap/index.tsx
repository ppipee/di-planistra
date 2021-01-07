import styled, { css } from 'styled-components'

import { GapProps } from './types'

export const applyPosition = ({
	$alignCenter: alignCenter,
	$justifyCenter: justifyCenter,
	$justifyContent,
	$alignItems,
}: GapProps) => css`
	${justifyCenter &&
	css`
		justify-content: center;
	`};
	${alignCenter &&
	css`
		align-items: center;
	`};
	${$justifyContent &&
	css`
		justify-content: ${$justifyContent};
	`}
	${$alignItems &&
	css`
		align-items: ${$alignItems};
	`}
`

export const horizontalStyle = ({ $responsive: responsive, $size: size }: GapProps) => css`
	${responsive &&
	css`
		width: 100%;
	`};
	> *:not(:last-child) {
		margin-right: ${size};
	}
`

export const verticalStyle = ({ $responsive: responsive, $size: size }: GapProps) => css`
	flex-direction: column;
	${responsive &&
	css`
		width: 100%;
		height: 100%;
	`}
	> *:not(:last-child) {
		margin-bottom: ${size};
	}
`

const STYLE_MAPPER = {
	horizontal: horizontalStyle,
	vertical: verticalStyle,
}

const Gap = styled.div<GapProps>`
	display: flex;
	padding: ${({ $padding = '0' }) => $padding};
	flex-wrap: ${({ $wrap: wrap = 'nowrap' }) => wrap};
	${({ $type: type = 'horizontal' }) => STYLE_MAPPER[type]};
	${applyPosition}
`

export default Gap
