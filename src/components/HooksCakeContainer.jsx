import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

function HooksCakeContainer () {
  const numOfCakes = useSelector( state => state.cake.numOfCakes );
  const dispatch = useDispatch();
  return (
    <div className="mx-auto flex flex-col gap-2">
      <h2 className="font-medium text-lg tracking-wide">Number of cakes - { numOfCakes }</h2>
      <button className="text-white uppercase tracking-widest font-semibold bg-amber-700 px-5 py-2.5 rounded hover:bg-amber-800 focus:ring-4 focus:ring-amber-300" onClick={ () => dispatch( buyCake() ) }>Buy Cake</button>
    </div>
  );
}

export default HooksCakeContainer;