import React from "react";
import "./List.css";
const List = props => {
  let key = 0;
  const recipeDetails = props.recipe.map(element => {
    key++;
    return (
      <div className="list-card" key={key}>
        <div className="list-card-image">
          <img src={element.recipe.image} alt="" />
        </div>
        <div className="list-card-content">
          <h2>{element.recipe.label}</h2>
          <p>
            Hello this is a data from displayed view again and again Hello this
            is a data from displayed view again and again
          </p>
          <a
            className="btn"
            href={element.recipe.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
    );
  });
  return <div className="list-main">{recipeDetails}</div>;
};
export default List;
