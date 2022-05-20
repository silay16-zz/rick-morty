import React from "react";
import './char.css';
//allCharstan gelen data type 
interface IProps {
    id?: number | null;
    image?: string | null;
    name?: string | null;
    location: {
        name?: string | null;
    };
}

const CharList: React.FC<IProps> = (props) => {
    const { id, image, name, location } = props;

    return (
        <>
            <div className="card-component">
                <div className="image-char">
                    <img src={props.image || " "} alt="img" />
                </div>
                <div className="side-content">
                    <div >
                        <p><strong>id:</strong> {props.id}</p>
                    </div>
                    <div >
                        <p>
                            <strong>Name:</strong> {props.name}
                        </p>
                        <p><strong>Location:</strong> {props.location.name}</p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default CharList;