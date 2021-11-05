import React from "react";
import FlightsSearch from "../../../components/FlightsSearch/FlightsSearch";
import style from './SearchForm.module.scss'

const SearchForm:React.FC = () => {
	return (
		<div className={style.searchForm}>
			<div className={style.searchPanel}>
					<FlightsSearch/>
			</div>
		</div>
	)
}

export default SearchForm

