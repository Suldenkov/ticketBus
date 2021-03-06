export const  formatDate = (date:Date | null) => {
	let dat:string = ''
	if (date !== null)
	{
		let year = date.getFullYear();
		dat = year < 10 ? `${year}-` : `${year}-`

		let month = date.getMonth() + 1;
		dat += month < 10 ? `0${month}-` : `${month}-`

		let day = date.getDate();
		dat += day < 10 ? `0${day}` : `${day}`
	}
  return dat;
}