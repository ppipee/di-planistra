import apiClient from 'core/api'

import plannerEndpoints from 'common/endpoints/planner'

import { ActivityPlan, EditActivity, InitPlanner, Planner, PlannerPreview } from 'modules/trips/types/planner'

export const getPlanners = () =>
	apiClient.fetch<PlannerPreview[]>({
		method: 'get',
		path: plannerEndpoints.planners(),
	})

export const getPlanner = (plannerId: string) =>
	apiClient.fetch<Planner>({
		method: 'get',
		path: plannerEndpoints.planner(plannerId),
	})

export const createPlanner = (data: InitPlanner) =>
	apiClient.fetch<Planner>({
		method: 'post',
		path: plannerEndpoints.planners(),
		body: data,
	})

export const updatePlanner = (
	plannerId: string,
	planner: Partial<Planner>, // planner will not update activities
) =>
	apiClient.fetch<Planner>({
		method: 'put',
		path: plannerEndpoints.planner(plannerId),
		body: planner,
	})

export const deletePlanner = (plannerId: string) =>
	apiClient.fetch({
		method: 'delete',
		path: plannerEndpoints.planner(plannerId),
	})

export const createActivity = (plannerId: string, day: number, activityInfo: EditActivity) =>
	apiClient.fetch<ActivityPlan>({
		method: 'post',
		path: plannerEndpoints.plannerActivities(plannerId),
		params: {
			day,
		},
		body: activityInfo,
	})

export const updateActivity = (plannerId: string, day: number, activityId: string, activityInfo: EditActivity) =>
	apiClient.fetch<ActivityPlan>({
		method: 'put',
		path: plannerEndpoints.plannerActivity(plannerId, activityId),
		params: {
			day,
		},
		body: activityInfo,
	})

export const deleteActivity = (plannerId: string, day: number, activityId: string) =>
	apiClient.fetch({
		method: 'delete',
		path: plannerEndpoints.plannerActivity(plannerId, activityId),
		params: {
			day,
		},
	})

export const deleteDayPlanner = (plannerId: string, day: number) =>
	apiClient.fetch({
		method: 'delete',
		path: plannerEndpoints.planner(plannerId),
		params: {
			day,
		},
	})
