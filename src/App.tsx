import { useEffect, useRef, useState } from "react";
import ProductList from "./Components/ProductList";

// function App() {
//   const [category, setCategory] = useState("");

//   return (
//     <div>
//       <select
//         className="form-select"
//         onChange={(event) => setCategory(event.target.value)}
//       >
//         <option value=""></option>
//         <option value="Clothing">Clothing</option>
//         <option value="Household">Household</option>
//       </select>
//       <ProductList category={category} />
//     </div>
//   );
// }

function App() {
  // const ref = useRef<HTMLInputElement>(null);

  // // after Render, function passed here(in useEffect), will be called after each render
  // useEffect(() => {
  //   // Side Effect, as it is changing something outside of this component
  //   // It has no relation to rendering the data or to jsx
  //   // It is not a pure component, so to make it a pure component, use hook, useEffect
  //   if (ref.current) ref.current.focus();
  // });

  const connect = () => console.log("connecting");
  const disconnect = () => console.log("Disconnecting");

  useEffect(() => {
    connect();

    // The function passed to the ref hook, can optionally return
    // a function of cleaning up, this is not necessary, but if we want
    // to do clean up,this is the way to clean up
    // Our clean up function should stop or clean up whatever we were doing
    // ex. if we are fetching some data from a server, our clean up function
    // should either abort the fetch, or ignore the result
    return () => disconnect();
    // react mounts the component on the screen, and unmounts them,
    // when they are no longer needed
    // So, strict mode enabled, when react noumts the component on the screen
    // the second time, first it has to unmount it, that is why
    // our clean up code is executed i.e disconnect here, when we are running the code here
  });

  return (
    <div>{/* <input ref={ref} type="text" className="form-control" /> */}</div>
  );
}

export default App;
