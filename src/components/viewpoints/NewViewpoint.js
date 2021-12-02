import React from 'react';
import styles from './Viewpoint.module.css';
import Card from '../ui/Card';
import { useRef } from 'react';

function NewViewpoint(props) {

    const titleInputRef = useRef();
    const ImageInputRef = useRef();
    const AddressInputRef = useRef();
    const DescInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = ImageInputRef.current.value;
        const enteredAddress = AddressInputRef.current.value;
        const enteredDesc = DescInputRef.current.value;

        const newViewpointData = {
            name: enteredTitle,
            address: enteredAddress,
            url: enteredImage,
            description: enteredDesc
        }

        props.onAddNewViewpoint(newViewpointData);
    }
    return (
        <Card>
            <form className={styles.form} onSubmit={submitHandler}>
                <div className={styles.control}>
                    <label>New Viewpoint title
                         <input type="text" required id="name" ref={titleInputRef} />
                    </label>
                </div>
                <div className={styles.control}>
                    <label>New Viewpoint Image
                         <input type="url" required id="image" ref={ImageInputRef} />
                    </label>
                </div>
                <div className={styles.control}>
                    <label>New Viewpoint Address
                         <input type="text" required id="address" ref={AddressInputRef} />
                    </label>
                </div>
                <div className={styles.control}>
                    <label>New Viewpoint Description
                         <textarea id="description" required rows='5' ref={DescInputRef}></textarea>
                    </label>
                </div>
                <div className={styles.actions}>
                    <button>Save the Viewpoint</button>
                </div>
            </form>

        </Card>
    )
}

export default NewViewpoint;