import styled from 'styled-components'

import { gray, white } from 'common/styles/colors'
import Borders from 'common/styles/mixins/borders'
import getColorWithAlpha from 'common/styles/utils/getColorWithAlpha'

export const InputWrapper = styled.div`
	input {
		color: ${white};
		border-color: transparent;
		border-radius: 0 ${Borders.Curve} ${Borders.Curve} 0;
		background-color: ${getColorWithAlpha(white, 0.33)};
	}
`

const DROP_DOWN_WIDTH = '140px'

export const DropDownWrapper = styled.div`
	width: ${DROP_DOWN_WIDTH};
	& > div {
		color: ${white};
		background-color: ${getColorWithAlpha(white, 0.3)};
		border-radius: ${Borders.Curve} 0 0 ${Borders.Curve};

		& > :first-child {
			border-color: transparent;
			border-radius: ${Borders.Curve} 0 0 ${Borders.Curve};
		}

		& > :nth-child(2) {
			top: 44px;
			border-radius: ${Borders.Normal};
			border: 1px solid ${gray[700]};

			& > :first-child {
				border-radius: ${Borders.Normal} ${Borders.Normal} 0 0;
			}
		}
	}

	svg {
		color: ${white} !important;
	}
`
