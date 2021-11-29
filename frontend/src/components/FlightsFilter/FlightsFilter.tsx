import React from 'react';
import { Isort } from '../../models/flight';
import style from './FlightsFilter.module.scss';


interface IFlightsFilterProps{
	onChange: (selectedSort: Isort) => void;
	selectedSort: Isort;
}

const FlightsFilter: React.FC<IFlightsFilterProps> = ({onChange, selectedSort}) =>{

	const onClickActive = (e: React.ChangeEvent<any>) => {
		if (selectedSort.active === e.target.dataset.sort)
			selectedSort.kind === 'top' ? onChange({...selectedSort, kind:'bottom'}) : onChange({...selectedSort, kind:'top'});
		else
			onChange({active: e.target.dataset.sort, kind:'bottom'})
	}
   
	return (
		<div className={style.filter}>
			<div
				data-sort="scheduledDeparture"
				onClick={onClickActive} 
				className={style.time__title}>Отправление
				<span className={style.arrow}>{selectedSort.active === 'scheduledDeparture' ? selectedSort.kind === 'bottom' ? '\u{1F823}': '\u{1F821}' : ''}</span>
			</div>
			<div
				data-sort="scheduledArrival"
				onClick={onClickActive}
				className={style.time__title}>Прибытие
				<span className={style.arrow}>{selectedSort.active === 'scheduledArrival' ? selectedSort.kind === 'bottom' ? '\u{1F823}': '\u{1F821}' : ''}</span>
			</div>
			<div 
				data-sort="duration"
				onClick={onClickActive}
				className={style.grap__title}>В пути
				<span className={style.arrow}>{selectedSort.active === 'duration' ? selectedSort.kind === 'bottom' ? '\u{1F823}': '\u{1F821}' : ''}</span>
			</div>
			<div
				data-sort="amount" 
				onClick={onClickActive}
				className={style.price__title}>Цена от
				<span className={style.arrow}>{selectedSort.active === 'amount' ? selectedSort.kind === 'bottom' ? '\u{1F823}': '\u{1F821}' : ''}</span>
			</div>
		</div>
	)
}

export default FlightsFilter