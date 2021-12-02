import React from 'react';
import axios from 'axios';
import ViewpointsList from '../components/viewpoints/ViewpointsList';
import { useState, useEffect } from 'react';


function AllViewpointsPage() {

    const [isLoading, setIsLoading] = useState(true);

    const [loadedViewpoints, setloadedViewpoints] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        axios.get('/api/v1/allViewpoints')
            .then(response => {
                return response.data
            }).then(data => {

                const viewpoints = [];
                for (let key in data) {
                    const viewpoint = {
                        id: key,
                        ...data[key]
                    }
                    viewpoints.push(viewpoint)
                }

                setIsLoading(false);
                setloadedViewpoints(viewpoints);
            })
    }, [])



    if (isLoading) {
        return <section>
            <p>
                Loading...
            </p>
        </section>
    }

    return (
        <section>
            <h1>All Viewpoints</h1>

            <ViewpointsList viewpoints={loadedViewpoints} />
        </section>
    )
}

export default AllViewpointsPage;