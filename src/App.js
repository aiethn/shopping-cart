import logo from "./logo.svg";
import "./App.css";
import Display from "./Display";
import Cart from "./Cart";
import Discount from "./Discount";

function App() {
  return (
    <div className="font-montserrat">
      <div className="flex justify-center align-center py-10 bg-gray-200 font-bold text-3xl ">
        <h2>Shopping Cart</h2>
      </div>
      <div className="flex flex-col md:flex-row mx-10 md:mx-20 mt-10 md:space-x-4 mdMax:space-y-10">
        <div className="md:w-[70%] w-full">
          <Display />
        </div>
        <div className="flex flex-col space-y-6 md:w-[30%] w-full">
          <Cart />
          <Discount />
        </div>
      </div>
    </div>
  );
}

export default App;
