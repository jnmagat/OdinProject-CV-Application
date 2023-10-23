import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBriefcase, faEye} from "@fortawesome/free-solid-svg-icons";
import ExperienceForm from "./experienceForm";
import { useState } from "react";

export default function ExperienceSection({onInputChange,workFormData,setWorkFormData,setWorkDetails}) {

    const [buttonStatus, setButtonStatus] = useState(0);
    const [sign, setSign] = useState("+");
    const [item, setItem] = useState("+");
    const [showData, setShowData] = useState("disabled");

    const [tempArr, setTempArr] = useState();

    const [inputValues, setInputValues] = useState({
        companyName: "",
        positionTitle: "",
        workStartDate: "",
        workEndDate: "",
        workLocation: "",
        description: ""
    });
    
    let workLists = workFormData.map( (data) =>{
        return (
            <>
                <div className="listofExperience" id={data.companyName} onClick={()=>experienceDetails(data)}>
                    <h4>{data.companyName}</h4> 
                    <FontAwesomeIcon icon={faEye} />
                </div>
            </>
        );
    })
    
    function expandPanel() {
        setSign((prevItem) => (prevItem === "+" ? "-" : "+"));
        setButtonStatus((prevItem) => (prevItem === 0 ? 1: 0));
        setShowData((prevItem) => (prevItem === "disabled" ? "enabled": "disabled"));
    }
    function addExperience() {
        setItem((prevItem) => (prevItem === "+" ? "-" : "+"));
        setButtonStatus((prevItem) => (prevItem === 1 ? 0: 1));
        setInputValues("");
    }

    function experienceDetails (data) {

        // UI CHANGES
        setItem((prevItem) => (prevItem === "+" ? "-" : "+"));
        setButtonStatus((prevItem) => (prevItem === 1 ? 0: 1));

        // CHECK IF HAS DATA THEN LOAD IT TO THE FORM
        if(data) {
            setInputValues(data); 
            // THROWS THE DATA TO TEMPARRAY USING STATE
            workFormData.map( (fdata) =>{
                if(fdata.id === data.id) {
                  setTempArr(fdata);
                }
            });
        } else {console.log("Error on data not equal to the id of the element");
        }

       
    }

    return (
        <div
        style={ 
                {
                    backgroundColor: 'white',
                    margin: 20, 
                    padding:20, 
                    color: 'black',
                    borderRadius:10
                } 
            }
        >
            <div className="workHeading" style={{cursor:'pointer'}} onClick={expandPanel}>
                <h3> <FontAwesomeIcon icon={faBriefcase} /> Work Experiences </h3>
                <h1>{sign}</h1>
            </div>
            <div className="workContent">
                { showData === "enabled" &&  item !== "-" ? workLists : '' }
                {
                buttonStatus === 0 || item === "-"
                ? ""
                : <div className="workContentButton">
                    <button className="addExperience" onClick={addExperience}>+ Experience</button>
                  </div>
                }
                { 
                item === "-" && sign === "-"
                ? 
                <ExperienceForm 
                    onInputChangeForm={onInputChange}
                    workFormData={workFormData} 
                    setWorkFormData={setWorkFormData} 
                    setWorkDetails={setWorkDetails}
                    setItem={setItem}
                    setButtonStatus={setButtonStatus}
                    inputValues={inputValues}
                    setInputValues={setInputValues}
                    tempArr={tempArr}
                    setTempArr={setTempArr}
                />
                : ''               
                }
            </div>
        </div>
    );
}
