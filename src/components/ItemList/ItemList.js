import React from "react";
import Item from "../Item/Item";

export const ItemList = ({ data }) => {
    return (
      <div className="row">
        {data.map((producto) => (
          <Item producto={producto} key={producto.id} />
        ))}
      </div>
    );
  };
  