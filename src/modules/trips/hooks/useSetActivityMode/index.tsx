import { useCallback } from 'react'

import { useActivityStore } from 'modules/trips/stores/ActivityStore/context'
import { EditorMode } from 'modules/trips/types/store'

export default function useSetActivityMode() {
	const setActivityMode = useActivityStore((store) => store.setActivityMode)

	const setCreatorMode = useCallback(() => {
		setActivityMode(EditorMode.Create)
	}, [])

	const setUpdaterMode = useCallback(() => {
		setActivityMode(EditorMode.Update)
	}, [])

	const setViewerMode = useCallback(() => {
		setActivityMode(EditorMode.View)
	}, [])

	return { setCreatorMode, setUpdaterMode, setViewerMode }
}
