import React from "react";
//allCharstan gelen data type 
interface Props {
    id?: number | null;
    image?: string | null;
    name?: String | null;
    location: {
        name?: String | null;
    };
}

const CharList: React.FC<Props> = (props) => {
    const { id, image, name, location } = props;

    return (
        <>
            <img src={props.image || " "} alt="img" />
            <div className="side-content">
                <p><strong>id:</strong> {props.id}</p>
                <p>
                    <strong>Character name:</strong> {props.name}
                </p>
                <p><strong>Location:</strong> {props.location.name}</p>
            </div>
        </>
    );
};

export default CharList;