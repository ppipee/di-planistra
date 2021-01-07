import React from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'
import ClockIcon from 'common/components/icons/ClockIcon'
import HeartEmptyIcon from 'common/components/icons/HeartEmptyIcon'
import HeartIcon from 'common/components/icons/HeartIcon'
import TagIcon from 'common/components/icons/TagIcon'
import Rating from 'common/components/Rating'
import Text from 'common/components/Text'
import { KM } from 'common/locale'
import { gray, green, red } from 'common/styles/colors'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'
import { Business } from 'common/types/wongnai/business'
import convertCurrency from 'common/utils/convertCurrency'
import convertDistanceToKM from 'common/utils/convertDistanceToKM'
import filterArrayExistingValue from 'common/utils/filterArrayExistingValue'

import { CLOSED_STATUS, ENTRY_FEE, OPENED_STATUS, REVIEW_UNIT } from 'modules/place/locale'
import getCategoryTag from 'modules/place/utils/getCategoryTags'
import getWorkingHour from 'modules/place/utils/getWorkingHour'

import { CardDetail, CardTitle } from './styled'

type Props = {
	place: Business
	favorite?: boolean
	showDistance?: boolean
}

const FAV_ICON_SIZE = 20
const ICON_SIZE = 16

const PlaceDetailCard = ({ place, favorite, showDistance }: Props) => {
	const I18n = useI18n()

	const {
		displayName,
		rating,
		statistic: { numberOfReviews },
		workingHoursStatus,
		categories,
		attractionInformation,
	} = place

	const entryFee = attractionInformation?.entryFee

	const currency = convertCurrency(entryFee.currency) ? I18n.t(convertCurrency(entryFee.currency)) : entryFee.currency
	const reviewAndPriceRange = filterArrayExistingValue([
		numberOfReviews ? `${I18n.t(REVIEW_UNIT, { review: numberOfReviews })}` : null,
		entryFee ? `${I18n.t(ENTRY_FEE, { fee: entryFee.adult, currency })}` : null,
	]).join(' | ')

	const shopStatus = I18n.t(workingHoursStatus?.open ? OPENED_STATUS : CLOSED_STATUS)
	const workingHour = getWorkingHour(place.hours)
	const categoryTags = getCategoryTag(categories)
	const FavIcon = favorite ? HeartIcon : HeartEmptyIcon
	const distance = place.distance ? I18n.t(KM, { distance: convertDistanceToKM(place.distance) }) : null

	return (
		<CardDetail>
			<Text as="div" size={fontSizes(14)}>
				<Gap $size={spaces(8)} $type="vertical">
					<Flex $justifyContent="space-between" $responsive>
						<Flex $direction="column">
							<CardTitle size={fontSizes(16)} ellipsis={2} margin={`0 ${spaces(4)} 0 0`}>
								{displayName}
							</CardTitle>
							<Gap $size={spaces(4)} $alignCenter>
								{rating && <Rating rating={rating} />}
								{(numberOfReviews || entryFee) && <Text color={gray[700]}>{reviewAndPriceRange}</Text>}
							</Gap>
						</Flex>
						<Gap $size={spaces(4)} $type="vertical">
							<FavIcon cursor="pointer" size={FAV_ICON_SIZE} color={favorite ? red[500] : gray[200]} />
							{showDistance && distance && (
								<Text size={fontSizes(12)} color={gray[700]} whiteSpace="nowrap">
									{distance}
								</Text>
							)}
						</Gap>
					</Flex>
					<div>
						<Gap $size={spaces(8)} $alignCenter>
							{workingHour && (
								<Gap $size={spaces(4)} $alignCenter>
									<ClockIcon size={ICON_SIZE} color={gray[700]} />
									<span>{workingHour}</span>
								</Gap>
							)}
							{workingHoursStatus && (
								<Text size={fontSizes(14)} color={workingHoursStatus.open ? green[500] : red[500]}>
									{shopStatus}
								</Text>
							)}
						</Gap>
						{categoryTags && (
							<Gap $size={spaces(4)} $alignCenter>
								<TagIcon size={ICON_SIZE} color={gray[700]} />
								<Text ellipsis={1}>{categoryTags.join(', ')}</Text>
							</Gap>
						)}
					</div>
				</Gap>
			</Text>
		</CardDetail>
	)
}

export default PlaceDetailCard
