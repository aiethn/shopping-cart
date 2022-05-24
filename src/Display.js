import Counter from "./Counter";
import { DataShop } from "./DataShop";
import { MdBookmarkRemove } from "react-icons/md";
import { FaRegListAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeOrder } from "./features/cost";

function Display() {
  const [data, setData] = useState([]);
  const [modalRemove, setModalRemove] = useState(false);
  const [modalWish, setModalWish] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setData(DataShop);
  }, []);

  const handleOnClick = (harga, idx, params) => {
    if (params === "remove") {
      setModalRemove(true);
    } else if (params === "wish") {
      setModalWish(true);
    }
    console.log(data.splice(idx, 1));
    setData(data.splice(idx, 1));
    dispatch(removeOrder(harga));

    // console.log(idx);
  };

  if (!data) return <div>Loading...</div>;
  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md w-full">
      <p className="font-bold text-2xl">Cart ({data.length} items)</p>
      {data.map((item, idx) => (
        <div key={idx}>
          <div className="flex flex-col xl:flex-row justify-between py-4">
            <div className="flex flex-col lg:flex-row">
              <img src={item.link} alt="Baju Bayi" className="max-w-xs"></img>
              <div className="flex flex-col justify-between lg:pl-10">
                <div className="flex flex-col space-y-4 mdMax:my-10">
                  <p className="font-bold text-xl">{item.name}</p>
                  <p>{item.type}</p>
                  <p>Color: {item.color}</p>
                  <p>Size: {item.size}</p>
                </div>
                <div className="flex space-x-4 cursor-pointer">
                  <div
                    className="flex space-x-2"
                    onClick={(e) => handleOnClick(item.price, idx, "remove")}
                  >
                    <MdBookmarkRemove />
                    <span>Remove Item</span>
                  </div>
                  <div
                    className="flex space-x-2"
                    onClick={(e) => handleOnClick(item.price, idx, "wish")}
                  >
                    <FaRegListAlt /> <span> Move To Wishlist</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col justify-between mdMax:my-10">
              <Counter price={item.price} />
              <p className="font-bold text-2xl  ">${item.price}</p>
            </div>
          </div>
          <hr />
        </div>
      ))}
      {modalRemove && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-center">
                    REMOVED
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setModalRemove(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Item has been removed
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-rose-500 text-white active:bg-rose-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setModalRemove(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
      {modalWish && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-center">
                    MOVE TO WISHLIST
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setModalWish(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Item has been moved
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setModalWish(false)}
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </div>
  );
}

export default Display;
