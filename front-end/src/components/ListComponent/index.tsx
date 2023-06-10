import React from 'react';
import styles from './listComp.module.css';
import { ListItem } from '../../components';
import { dateFormat } from '../../helpers';

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
					date: dateFormat(incident.description.event_opened),
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
			<div className={styles.list}>{incidentArr}</div>
		</div>
	);
};

export default ListComponent;
