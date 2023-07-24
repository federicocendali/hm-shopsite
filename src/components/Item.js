import { Link } from "react-router-dom";

export const Item = ({ item }) => {
  return (
    <div className="col-5 m-2">
      <Link to={`/detail/${item.id}`} className="title">
        <h2>{item.name}</h2>
      </Link>
      <img className="img img-fluid" src={item.img} alt={item.name} />
      <p>
        <small>Category: {item.category}</small>
      </p>
      <p>Price: ${item.price}</p>
      {item.stock <= 5 && (
        <p>
          <strong>Only {item.stock} units left</strong>
        </p>
      )}
      <Link to={`/detail/${item.id}`} className="btn btn-outline-primary">
        See more
      </Link>
    </div>
  );
};
