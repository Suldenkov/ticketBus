import moment from 'moment'

export const convertDate = (date: string) => {
	let t = moment.utc(date)
	return ((f: string) => {
		return (moment(t).local().format(f))
	})
}