import React from 'react'

import { Link } from 'react-router-dom'

import useLocale from 'core/locale/hooks/useLocale'

import ClickableIcon from 'common/components/ClickableIcon'
import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'
import ArrowIcon from 'common/components/icons/ArrowIcon'
import SettingIcon from 'common/components/icons/SettingIcon'
import Text from 'common/components/Text'
import { white } from 'common/styles/colors'
import useFontSizeResponsive from 'common/styles/hooks/useFontSizeResponsive'
import spaces from 'common/styles/mixins/spaces'
import getDateTimeFormat from 'common/utils/datetime/getDateTimeFormat'

import { TRIP_PATH } from 'modules/trips/routes/paths'
import { usePlannerStore } from 'modules/trips/stores/PlannerStore/context'

import { Container, ArrowWrapper, IconWrapper, Background } from './styled'

const ICON_SIZE = 32
const DATE_FORMAT = 'D MMM YYYY'

const PlannerCover = () => {
	const planner = usePlannerStore((store) => store.planner)

	const locale = useLocale()
	const { largeSize, titleSize } = useFontSizeResponsive()

	const startDate = getDateTimeFormat(planner.startDate, locale, DATE_FORMAT)
	const endDate = getDateTimeFormat(planner.endDate, locale, DATE_FORMAT)
	const displayDateRange = `${startDate} - ${endDate}`
	const tripUrl = TRIP_PATH

	return (
		<Background $shadow>
			<Container>
				<Flex $responsive $direction="column" $justifyContent="space-between">
					<Flex $responsive $justifyContent="space-between">
						<Link to={tripUrl}>
							<ArrowWrapper>
								<ClickableIcon icon={ArrowIcon} size={ICON_SIZE} color={white} />
							</ArrowWrapper>
						</Link>
						<IconWrapper>
							<ClickableIcon icon={SettingIcon} size={ICON_SIZE} color={white} />
						</IconWrapper>
					</Flex>
					<Gap $type="vertical" $size={spaces(4)}>
						<Text color={white} size={largeSize}>
							{planner.name}
						</Text>
						<Text color={white} size={titleSize}>
							{displayDateRange}
						</Text>
					</Gap>
				</Flex>
			</Container>
		</Background>
	)
}

export default PlannerCover
