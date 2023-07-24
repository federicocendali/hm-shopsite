import { Item } from "./Item";

export const ItemList = ({ items }) => {
  return (
    <div>
      <h2 className="list-container__title">Products</h2>
      <hr />
      <div className="row">
        {items.map((producto) => (
          <Item key={producto.id} item={producto} />
        ))}
      </div>
    </div>
  );
};
