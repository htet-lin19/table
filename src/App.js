import "./App.css";
import Button from "./component/Button";
import ListComponent from "./component/Table";

import React, { useState } from "react";

function App() {
    const [components, setComponents] = useState(["Table"]);

    const addComponent = () => {
        setComponents([...components, "Table"]);
    };

    return (
        <div className="App">
            <Button onClick={addComponent} text="Add Table" />
            {components.map((item, i) => (
                <ListComponent text={item} key={i} />
            ))}
        </div>
    );
}

export default App;
