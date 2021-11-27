import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
// import { useTypeSelector } from "../../hooks/useTypeSelector";
import FlightService from "../../services/flight.service";
import BusScheme from "../../components/BusScheme/BusScheme";
import FlightInfo from "./FlightInfo/FlightInfo";
import FlightPrompt from "./FlightPrompt/FlightPrompt";
import './FlightDetail.scss';

interface FlightDetailProps{
	path:string;
}

const FlightDetail:React.FC<FlightDetailProps> = ({path}) => {
	const {id} = useParams<{id?: string}>()
	const [data, setData] = useState<any>({countPlace: 0, busyPlaces:[], scheduledDeparture: '', scheduledArrival: '', amount: ''})
	const [selectPlace, setSelectPlace] = useState<number[]>([])
	const history = useHistory()
	
	useEffect(() => {
		FlightService.fetchDeatilFlight(id)
		.then((response: any) => {
			response = response.data
			setData((oldData:any) => ({...oldData, amount:response.amount, scheduledDeparture: response.scheduledDeparture, scheduledArrival: response.scheduledArrival, countPlace:response.countPlace, busyPlaces: response.busyPlaces}))
		})
	}, [id])

	const onClickGoBack = () => {
		history.goBack()
	}

	const onClickNextPage = () => {
		history.push(`${path}?flight=${id}&amount=${selectPlace.length}`)
	}

	return (
		<div className="flight_detail">
			<div className="flight_detail_header">
					<span onClick={onClickGoBack}><span className="arrow">&#10140;</span>Go back</span>
			</div>
			<div className="flight_content">
				<div className="bus_container">
					<div className="bus_container_title">
						<h3>Выберите место на схеме автобуса</h3>
					</div>
					<BusScheme {...data} setSelectPlace={setSelectPlace}/>
				</div>
				<FlightInfo
					scheduledArrival={data.scheduledArrival}
					scheduledDeparture={data.scheduledDeparture}
					amount={Number(data.amount)}
					countPassenger={selectPlace.length}
					/>
				<FlightPrompt selectPlace={selectPlace} onClickHandler={onClickNextPage}/>
			</div>
		</div>
	)
}

export default FlightDetail