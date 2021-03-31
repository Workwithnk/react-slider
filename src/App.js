import React , {useState} from "react";
import data from './data.js';
import StructureOfData from './StructureOfData.js'
import "./App.css";

function App() {
  const [value, setValue] = useState(data)
  return (
     <StructureOfData detail={value} />
  );
}

export default App;
