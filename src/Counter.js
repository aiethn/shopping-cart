import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addOrder, removeOrder } from "./features/cost";

function Counter(props) {
  const [counter, setCounter] = useState(1);
  const { price } = props;
  const dispatch = useDispatch();
  const harga = parseInt(price);

  // useEffect(() => {
  //   dispatch(addOrder(harga));
  // }, []);

  const handleOnChange = () => {};

  const handleOnClick = (handling) => {
    if (handling === "dec") {
      setCounter((count) => (count > 1 ? count - 1 : 1));
      dispatch(removeOrder(harga));
    } else if (handling === "inc") {
      setCounter((count) => count + 1);
      dispatch(addOrder(harga));
    }
  };

  return (
    <div>
      <div className="h-10 w-32">
        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
          <button
            data-action="decrement"
            className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
            onClick={(e) => handleOnClick("dec")}
            disabled={counter === 1 ? true : false}
          >
            <span className="m-auto text-2xl font-thin">−</span>
          </button>
          <input
            type="text"
            className="outline-none appearance-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 "
            name="custom-input-number"
            value={counter}
            onChange={(e) => handleOnChange(e)}
          />
          <button
            data-action="increment"
            className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
            onClick={(e) => handleOnClick("inc")}
          >
            <span className="m-auto text-2xl font-thin">+</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
