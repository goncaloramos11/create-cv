import './App.css'
import FormDetails from './FormDetails/FormDetails.jsx';
import PreviewCV from "./PreviewCV/PreviewCV.jsx";
import person_data from './data/data.jsx';
import { useState } from 'react';

function App() {

  const [cv, setCV] = useState(person_data);

  return (
    <div className="container">
      <FormDetails cv={cv} setCV={setCV}/>
      <PreviewCV cv={cv}/>
    </div>
  );
}

export default App
