import React from "react";
import BusSeat from "../BusSeat/BusSeat";
import './BusScheme.scss';

interface BusSchemeProps{
	countPlace: number;
	busyPlaces: number[];
	setSelectPlace: any;
}

const BusScheme: React.FC<BusSchemeProps> = ({countPlace, busyPlaces, setSelectPlace}) => {
	
	return (
		<div className="bus">
				<div className="bus_streing">
					<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
	width="1280.000000pt" height="1158.000000pt" viewBox="0 0 1280.000000 1158.000000"
	preserveAspectRatio="xMidYMid meet">
	<metadata>
	Created by potrace 1.15, written by Peter Selinger 2001-2017
	</metadata>
	<g transform="translate(0.000000,1158.000000) scale(0.100000,-0.100000)"
	fill="#A9A9A9" stroke="none">
	<path d="M6295 11574 c-349 -21 -564 -45 -830 -94 -1362 -251 -2601 -997
	-3470 -2090 -1023 -1286 -1444 -2922 -1174 -4560 172 -1045 637 -2027 1343
	-2840 129 -149 419 -439 566 -566 882 -764 1939 -1236 3085 -1378 359 -45 883
	-54 1220 -22 741 70 1410 258 2045 572 591 292 1081 644 1545 1108 877 878
	1444 1993 1629 3206 52 342 61 467 60 885 0 405 -8 524 -54 847 -223 1536
	-1082 2939 -2361 3855 -842 603 -1814 963 -2854 1058 -164 15 -626 27 -750 19z
	m500 -1179 c603 -51 1117 -190 1653 -446 607 -289 1189 -759 1623 -1309 415
	-526 716 -1157 868 -1817 30 -132 50 -278 34 -257 -14 20 -294 101 -928 269
	-2261 600 -3857 751 -5430 514 -667 -101 -1404 -298 -2022 -544 -379 -150
	-656 -279 -707 -331 -15 -14 -16 -13 -16 8 0 13 9 76 20 141 106 627 392 1305
	778 1842 757 1053 1888 1734 3162 1906 289 39 681 49 965 24z m2525 -5399
	c263 -42 629 -138 887 -232 57 -21 75 -32 79 -50 6 -25 19 -28 64 -15 18 5 54
	-4 125 -31 190 -74 387 -161 391 -173 7 -18 -68 -244 -138 -420 -505 -1255
	-1520 -2220 -2798 -2658 -167 -57 -552 -161 -562 -151 -5 4 10 438 22 626 76
	1226 291 2119 635 2633 192 287 386 427 666 480 102 19 485 14 629 -9z m-5375
	-177 c407 -50 640 -226 836 -633 184 -383 285 -887 330 -1641 12 -206 8 -1159
	-5 -1172 -9 -10 -212 58 -391 129 -872 350 -1622 962 -2140 1748 -180 274
	-310 520 -432 825 -55 135 -136 371 -145 419 -2 15 15 24 107 53 447 139 979
	250 1325 276 112 9 434 6 515 -4z"/>
	</g>
					</svg>
				</div>
				<div className="bus_seats">
					{
						Array.from(Array(countPlace).keys()).map((elem) => 
							<BusSeat 
								key={elem} 
								seat_no={elem + 1}
								setSelectPlace={setSelectPlace}
								className={ busyPlaces.includes(elem + 1) ? 'bus_seat_busy' : ''}/>
						)
					}
				</div>
			</div>
	)
}

export default BusScheme