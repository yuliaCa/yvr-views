import React from 'react';
import NewViewpoint from '../components/viewpoints/NewViewpoint';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function NewViewpointPage() {
    const navigate = useNavigate();
    function submitNewViewpoint(viewpointData) {
        axios.post('/api/v1/newViewpoint', viewpointData)
            .then(() => {
                navigate('/', { replace: true });
                // this directs us to the root of the app after we submit the form.
            })
            .catch(error => console.log(error))
    }

    return (
        <section>
            <h1>Add New Viewpoint</h1>
            <NewViewpoint onAddNewViewpoint={submitNewViewpoint} />
        </section>
    )
}

export default NewViewpointPage;