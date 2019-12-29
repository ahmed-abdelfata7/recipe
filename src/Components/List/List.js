import React from "react";
const List = props => {
  let key = 0;
  const recipeImage = props.recipe.map(element => {
    key++;
    return <img src={element.recipe.image} alt="" key={key} />;
  });
  return <div>{recipeImage}</div>;
};
export default List;
