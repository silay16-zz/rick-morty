import React from "react";
import "./char.css";
//allCharstan gelen data type
interface IProps {
  id?: number | null;
  image?: string | null;
  name?: string | null;
  location: {
    name?: string | null;
  };
}

const CharList: React.FC<IProps> = ({ id, image, name, location }) => {
  return (
    <>
      <div className="card-component">
        <div className="image-char">
          <img src={image || " "} alt="img" />
        </div>
        <div className="side-content">
          <div>
            <p>
              <strong>id:</strong> {id}
            </p>
          </div>
          <div>
            <p>
              <strong>Name:</strong> {name}
            </p>
            <p>
              <strong>Location:</strong> {location.name}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharList;
