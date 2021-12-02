import React from 'react';
import ViewpointItem from './ViewpointItem';
import styles from './ViewpointList.module.css';


function ViewpointsList(props) {

    return (
        <ul className={styles.list}>
            {props.viewpoints.map((viewpoint) => (
                <ViewpointItem
                    key={viewpoint._id}
                    id={viewpoint._id}
                    image={viewpoint.url[0]}
                    title={viewpoint.name}
                    address={viewpoint.address}
                    description={viewpoint.description} />
            ))}
        </ul>
    )
}

export default ViewpointsList;

