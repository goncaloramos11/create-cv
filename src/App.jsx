import './App.css'
import FormDetails from './FormDetails/FormDetails.jsx';
import PreviewCV from "./PreviewCV/PreviewCV.jsx";

import { useState } from 'react';

function App() {

  const [cv, setCV] = useState({
    person: { name: "John Doe", email: "johndoe@example.com", phone: 999999999, location: "Lisboa"},
    education: [],
    experience: []
  });

  return (
    <div className="container">
      <FormDetails cv={cv} setCV={setCV}/>
      <PreviewCV person={cv.person}/>
    </div>
  );
}

export default App
