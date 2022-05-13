import { useState } from "react"

export const useGetPlace = (query: URLSearchParams) => {
	const places = query.get('place')?.split('_')
	return useState(places ? places.map((place) => Number(place)) : [])
}