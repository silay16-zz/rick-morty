import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import './filterModal.css';
import { IoIosClose } from "react-icons/io";


interface IModal {
    open: boolean,
    onClose: () => void,
    filteredValueDetecter: (name: string) => void,
}

const FilterModal: React.FC<IModal> = (props: IModal) => {
    const [selectedName, setSelectedName] = useState("");
    const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedName(event.target.value);

    };
    useEffect(() => {
        props.filteredValueDetecter(selectedName);
    }, [selectedName]);
    // const saveFilter = () => {
    //     props.onClose();
    // }

    if (!props.open) return null;
    return ReactDOM.createPortal(
        <>
            <div className="backdrop" onClick={props.onClose}></div>
            <div className="modal">
                <header className="header">
                    <h2> Filter </h2>
                    <button onClick={props.onClose} className="close-button-modal">
                        <IoIosClose />
                    </button>

                </header>

                <div className="filter-area" >
                    <hr />
                    <div className="radio-box" >
                        <label >Rick</label>
                        <input
                            type="radio"
                            name="deneme"
                            value="Rick"
                            id="rick"
                            onChange={radioHandler}


                        />
                    </div>
                    <div className="radio-box" >
                        <label >Morty</label>
                        <input
                            type="radio"
                            name="deneme"
                            value="Morty"
                            id="morty"
                            onChange={radioHandler}

                        />
                    </div>
                </div>
            </div>

        </>, document.getElementById('modal')!
    )
}

export default FilterModal;