import { AttractionCategory, FoodCategory, HotelCategory } from 'modules/search/constants'
import {
	LOCALE_NATIONAL_FOOD,
	LOCALE_FOOD_TYPE,
	LOCALE_BUSINESS_TYPE,
	LOCALE_RESTAURANT_TYPE,
	LOCALE_COFFEE_AND_DESSERT,
	LOCALE_HOTEL_RESORT,
	LOCALE_GUEST_HOUSE,
	LOCALE_HOME_STAY,
	LOCALE_NATIONAL_PARK,
	LOCALE_VILLA,
	LOCALE_OTHER_ACCOMMODATIONS,
	LOCALE_SHOPPING,
	LOCALE_SEA,
	LOCALE_ACTIVITIES,
	LOCALE_HISTORICAL,
	LOCALE_MUSEUM,
	LOCALE_BUILDING,
	LOCALE_LOCAL,
	LOCALE_AMUSEMENT,
	LOCALE_NATURE,
	LOCALE_TRANSPORTATION,
	LOCALE_HOSTEL,
} from 'modules/search/locale'

export const LOCALE_PLACE_CATEGORY = ['ประเภท', 'Category']

export const LOCALE_FOODS: Record<FoodCategory, string[]> = {
	nationality: LOCALE_NATIONAL_FOOD,
	foodType: LOCALE_FOOD_TYPE,
	businessType: LOCALE_BUSINESS_TYPE,
	restaurant: LOCALE_RESTAURANT_TYPE,
	coffeeDessert: LOCALE_COFFEE_AND_DESSERT,
}

export const LOCALE_HOTELS: Record<HotelCategory, string[]> = {
	hotelResort: LOCALE_HOTEL_RESORT,
	guestHouse: LOCALE_GUEST_HOUSE,
	homeStay: LOCALE_HOME_STAY,
	nationalPark: LOCALE_NATIONAL_PARK,
	villa: LOCALE_VILLA,
	hostel: LOCALE_HOSTEL,
	other: LOCALE_OTHER_ACCOMMODATIONS,
}

export const LOCALE_ATTRACTIONS: Record<AttractionCategory, string[]> = {
	shopping: LOCALE_SHOPPING,
	sea: LOCALE_SEA,
	activities: LOCALE_ACTIVITIES,
	historical: LOCALE_HISTORICAL,
	museum: LOCALE_MUSEUM,
	building: LOCALE_BUILDING,
	local: LOCALE_LOCAL,
	amusementPark: LOCALE_AMUSEMENT,
	nature: LOCALE_NATURE,
	transportation: LOCALE_TRANSPORTATION,
}
