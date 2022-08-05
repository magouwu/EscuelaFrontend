import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import "../Portal/container.css";
import useResources from "../hooks/useResources";

function Subjects(props) {
    const {sendRequest} = useResources()
  console.log(
    "consolelog de subjects",
    props.props.subjects.map((data) => data.name)
  );
  function selector(value) {
    let selectedbox = value;
    let selectedItem = document.getElementById(selectedbox);
    let values = {id: value}
    if (selectedItem.classList.contains("none")){
      selectedItem.classList.replace("none", "selected");
      setSave(current =>[...current, values])
      return
    }
    if (selectedItem.classList.contains("selected")){
      selectedItem.classList.replace("selected", "none");
      setSave(current =>
        current.filter(save => { return save.id !== value;}),
      );
      return
    }
  }

  const handleRequest = () => {
    sendRequest()
    
  };
  
  const [select, setSelect] = useState();
  const [save,setSave] = useState([])

  return (
    <form onSubmit={handleRequest()}>
      <div className="container">
        <div className="listContainer">
          {props.props.subjects.map((data) => (
            <div
              className="listcontent"
              key={data.id}
                onClick={() => {
                selector(data.id);
                console.log('estado del save',save)
                //      if(!select){
                //    setSelect(data.id)
                //    console.log("SELECTED",select)}
                //   else{setSelect(false)}
              }}
            >
              <h3>{data.name}</h3>
              <FontAwesomeIcon
                className="none"
                id={data.id}
                icon={faCheckCircle}
              />
            </div>
          ))}
        </div>
        <button type="Submit">Send</button>
      </div>
    </form>
  );
}

export default Subjects;
