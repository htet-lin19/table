import React, { useState } from "react";
import Draggable from "react-draggable";
import "./Table.css";
const Table = (props) => {
    const [col1, setCol1] = useState(false);
    const [col2, setCol2] = useState(false);
    const [col3, setCol3] = useState(false);
    const [col4, setCol4] = useState(false);
    return (
        <Draggable defaultPosition={{ x: 0, y: 0 }}>
            <div>
                <div className="cg">
                    <button
                        className="c1"
                        onClick={() => {
                            setCol1(!col1);
                        }}
                        style={{ backgroundColor: col1 ? "yellow" : "red" }}
                    ></button>
                    <button
                        className="c2"
                        onClick={() => {
                            setCol4(!col4);
                        }}
                        style={{ backgroundColor: col4 ? "yellow" : "red" }}
                    ></button>
                </div>
                <div className="Component">{props.text}</div>
                <div className="cg1">
                    <button
                        className="c1"
                        onClick={() => {
                            setCol2(!col2);
                        }}
                        style={{ backgroundColor: col2 ? "yellow" : "red" }}
                    ></button>
                    <button
                        className="c2"
                        onClick={() => {
                            setCol3(!col3);
                        }}
                        style={{ backgroundColor: col3 ? "yellow" : "red" }}
                    ></button>
                </div>
            </div>
        </Draggable>
    );
};

export default Table;
