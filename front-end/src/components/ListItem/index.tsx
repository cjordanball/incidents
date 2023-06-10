import { useState } from 'react';
import styles from './listItem.module.css';

interface ListItemProps {
	compData: {
		id: string;
		date: string;
		city: string;
		state: string;
		apparatusNumber: string;
		deptName: string;
		deptShift: string;
		weather: {
			temperature: string;
			conditions: string;
			humidity: string;
		};
	};
	chooseIncident: (id: string) => void;
	isSelected: boolean;
}
const ListItem = ({ compData, chooseIncident, isSelected }: ListItemProps) => {
	const [selected, setSelected] = useState<string>();
	return (
		<div
			className={`${isSelected ? styles.containerSelected : styles.container}`}
			onClick={() => {
				chooseIncident(compData.id);
				setSelected(compData.id);
			}}
		>
			<span>{`Incident No. - ${compData.id}`}</span>
			<span>{`Date - ${compData.date}`}</span>
			<span>{`Location - ${compData.city}, ${compData.state}`}</span>
			<span>{`Responder - ${compData.deptName}`}</span>
			<span>{`Vehicles Responding - ${compData.apparatusNumber}`}</span>
			<span>{`Responding Shift - ${compData.deptShift}`}</span>
			<div>
				<span>Weather Conditions:</span>
				<div>
					<span className={styles.weatherData}>
						{`Temperature - ${compData.weather.temperature} ${
							compData.weather.temperature === 'Unknown' ? '' : 'F'
						}`}
					</span>
					<span className={styles.weatherData}>
						{`Humidity - ${compData.weather.humidity}`}
					</span>
					<span className={styles.weatherData}>
						{`Conditions - ${compData.weather.conditions}`}
					</span>
				</div>
			</div>
		</div>
	);
};

export default ListItem;
