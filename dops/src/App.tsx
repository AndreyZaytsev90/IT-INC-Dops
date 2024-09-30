import React, {useState} from 'react';
import './App.css';
import Component1 from "./components/Component1";



function App() {
    const [allGreen, setAllGreen] = useState(false);

    const handleFinalCallback = () => {
        setAllGreen(true);
        alert("Первый круг Ада пройден!")
    };

    return (
        <div className="App">
            <h1>Callback Hell</h1>
            <div className="container">
                <Component1
                   /* onCallback={handleFinalCallback}*/
                   onCallback={handleFinalCallback}
                />
            </div>
            {allGreen && <p>Первый круг Ада пройден!</p>}
        </div>
    );
}


export default App;
