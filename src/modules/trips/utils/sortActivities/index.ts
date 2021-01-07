import { ActivityPlan } from 'modules/trips/types/planner'

function convertHourToNumber(hour: string) {
	return Number(hour.replace(':', '')) // 12:10 => 1210
}

export default function sortActivities(activities: ActivityPlan[]) {
	return activities.sort((a, b) => convertHourToNumber(a.hour.from) - convertHourToNumber(b.hour.from))
}
