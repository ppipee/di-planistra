import { useCallback, useState } from 'react'

import useOnChange from 'common/hooks/useOnChange'

import { useActivityStore } from 'modules/trips/stores/ActivityStore/context'

export default function useActivityState() {
	const [placeSelectedIndex, setPlaceIndex] = useState<number>(0)
	const { setActivity, favoritePlaces, ...activityInfo } = useActivityStore((store) => ({
		memo: store.memo,
		activityHour: store.hour,
		setActivity: store.setActivity,
		favoritePlaces: store.favoritePlaces,
	}))

	const setTime = useCallback(
		(time: Date, stateKey: 'to' | 'from') => {
			const minute = time.getMinutes()
			const hour = time.getHours()

			const newTime = `${hour}:${minute}`
			setActivity({
				hour: {
					...activityInfo.activityHour,
					[stateKey]: newTime,
				},
			})
		},
		[activityInfo.activityHour],
	)

	const setMemo = useCallback((memo: string) => {
		setActivity({ memo })
	}, [])

	const { onChange: onMemoChange } = useOnChange(activityInfo.memo || '', [setMemo])

	const setPlace = useCallback(
		(placeSelectedIndex: number) => {
			const placeId = favoritePlaces[placeSelectedIndex].publicId

			setPlaceIndex(placeSelectedIndex)
			setActivity({ placeId })
		},
		[favoritePlaces],
	)

	return { setPlace, onMemoChange, setTime, placeSelectedIndex, ...activityInfo }
}
