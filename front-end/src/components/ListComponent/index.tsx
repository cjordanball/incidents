import React from 'react';
import styles from './listComp.module.css';
import { ListItem } from '../../components';

interface ListComponentProps {
	incidentData: any;
	chooseIncident: (e: any) => void;
	selectedIncident?: string;
}

const ListComponent = ({
	incidentData,
	chooseIncident,
	selectedIncident,
}: ListComponentProps) => {
	const incidentArr = incidentData.data.map((incident: any) => {
		return (
			<ListItem
				key={incident.description.event_id}
				compData={{
					id: incident.description.event_id,
					city: incident.address.city,
					state: incident.address.state,
					apparatusNumber: incident.apparatus.length,
					deptName: incident.fire_department.name,
					deptShift: incident.fire_department.shift,
					weather: incident.weatherObj,
				}}
				chooseIncident={chooseIncident}
				isSelected={selectedIncident === incident.description.event_id}
			/>
		);
	});

	return (
		<div className={styles.container}>
			<span className={styles.headline}>Incidents</span>
			{incidentArr}
		</div>
	);
};

export default ListComponent;
