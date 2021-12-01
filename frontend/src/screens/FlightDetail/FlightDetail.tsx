import React from "react";
import { useHistory} from "react-router";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import BusScheme from "../../components/BusScheme/BusScheme";
import FlightPrompt from "./FlightPrompt/FlightPrompt";
import './FlightDetail.scss';
import { useQuery } from "../../hooks/useQuery";

interface FlightDetailProps{
	path:string;
	selectPlace: number[];
	setSelectPlace: any;
}

const FlightDetail:React.FC<FlightDetailProps> = ({path, selectPlace, setSelectPlace, children}) => {
	const query = useQuery()
	const history = useHistory()
	const {flight} = useTypeSelector(state => state.flight)
	
	const onClickGoBack = () => {
		history.goBack()
	}
	
	const onClickNextPage = () => {
		const id = query.get('flight')
		if (id)
			history.push(`${path}?flight=${id}&amount=${selectPlace.length}`)
	}

	return (
		<div className="flight_detail">
			<div className="flight_detail__header">
					<span onClick={onClickGoBack}><span className="arrow">&#10140;</span>Go back</span>
			</div>
			<div className="flight_detail__content">
				<div className="bus_container">
					<div className="bus_container__title">
						<h3>Выберите место на схеме автобуса</h3>
					</div>
					<BusScheme countPlace={flight.countPlace} busyPlaces={flight.busyPlaces} setSelectPlace={setSelectPlace} selectPlace={selectPlace}/>
				</div>
				{children}
				<FlightPrompt selectPlace={selectPlace} onClickHandler={onClickNextPage}/>
			</div>
		</div>
	)
}

export default FlightDetail