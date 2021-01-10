import React, { useCallback, useState } from 'react'

import { isEmpty } from 'lodash'

import useI18n from 'core/locale/hooks/useI18n'

import { CalenderDateProps } from 'common/components/Calendar/types'
import DateRangePicker from 'common/components/DateRangePicker'
import InputForm from 'common/components/form/InputForm'
import Gap from 'common/components/Gap'
import ConfirmableModal from 'common/components/modal/ConfirmableModal'
import useOnChange from 'common/hooks/useOnChange'
import { LOCALE_CANCEL, LOCALE_SAVE } from 'common/locale'
import spaces from 'common/styles/mixins/spaces'

import { TRIP_NAME } from 'modules/trips/locale'
import { useTripStore } from 'modules/trips/stores/TripStore/context'

type Props = {
	close: () => void
}

const CreatePlannerModalComponent = ({ close }: Props) => {
	const I18n = useI18n()
	const [date, setDate] = useState<CalenderDateProps>({})
	const { keyword: plannerName, onChange } = useOnChange()

	const { isLoading, createPlanner } = useTripStore((store) => ({
		isLoading: store.isActionLoading['createPlanner'],
		createPlanner: store.createPlanner,
	}))

	const currentDate = new Date()
	const dateRangeShown = {
		startRange: { month: currentDate.getMonth(), year: currentDate.getFullYear() },
	}

	const onCreate = useCallback(async () => {
		if (isEmpty(plannerName) || !date?.startDate || !date?.endDate) return

		await createPlanner({
			name: plannerName,
			startDate: date.startDate,
			endDate: date.endDate,
		})
		close()
	}, [date, plannerName, isLoading])

	return (
		<ConfirmableModal
			onConfirm={onCreate}
			onCancel={close}
			onClose={close}
			confirmText={I18n.t(LOCALE_SAVE)}
			cancelText={I18n.t(LOCALE_CANCEL)}
			width="auto"
			closeWithOverlay={false}
		>
			<Gap $type="vertical" $size={spaces(16)} $padding={`0 ${spaces(8)}`}>
				<InputForm label={I18n.t(TRIP_NAME)} value={plannerName} onChange={onChange} />
				<DateRangePicker date={date} setDate={setDate} dateRangeShown={dateRangeShown} />
			</Gap>
		</ConfirmableModal>
	)
}

export default CreatePlannerModalComponent
