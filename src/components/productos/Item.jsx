import React from "react";
import carrito from "../../assets/svg/cart.svg";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  const { titulo, precio, img, id } = producto;

  return (
    <div className="hover:cursor-pointer mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-[#E1E6E1] shadow-md duration-300 hover:scale-105 hover:shadow-lg">
      <img
        src={img}
        alt="imagen card"
        className="h-48 w-full object-cover object-center"
      />
      <div className="p-4 flex flex-col items-center">
        <h3 className="mb-2 text-lg font-medium  text-gray-900">{titulo}</h3>

        <h4 className="mr-2 text-lg font-semibold text-gray-900 my-2">
          {precio}$
        </h4>
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dicta itaque nemo harum pariatur aliquam voluptate recusandae quam praesentium adipisci dolor, quas, autem magnam eos repellendus sit eius impedit suscipit? */}

        <div className="flex flex-col items-center">
          <button className="flex text-white bg-[#7a28bc] max-w-max p-2 mb-2 rounded-md hover:bg-[#eb5e28] duration-300">
            <Link to={`/producto/${id}`}>Detalles</Link>
          </button>
          <button className="flex text-white bg-[#7a28cb] max-w-max p-2 rounded-md hover:bg-[#eb5e28] duration-300">
            <img src={carrito} alt="cart-icon" className="max-w-[20px]" />
            <span>Agregar al carrito</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
