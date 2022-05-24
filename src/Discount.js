import { AiOutlineArrowDown } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addCode } from "./features/shipping";

function Discount() {
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    dispatch(addCode(e.target.value));
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-md w-full p-4">
      <div className="relative overflow-hidden">
        <input
          type="checkbox"
          className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
        />
        <div className="h-12 w-full pl-5 flex items-center justify-between">
          <h1>Add a Discount Code (Optional)</h1>
          <AiOutlineArrowDown />
        </div>
        <div className="overflow-hidden bg-white transition-all duration-500 max-h-0 peer-checked:max-h-40 m-4">
          <input
            className="p-5 border-t rounded-lg w-full border-2"
            placeholder="Input Code"
            type="text"
            onChange={(e) => handleOnChange(e)}
          />
        </div>
      </div>
    </div>
  );
}

export default Discount;
