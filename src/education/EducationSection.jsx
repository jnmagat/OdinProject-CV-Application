import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBriefcase, faEye} from "@fortawesome/free-solid-svg-icons";
import EducationForm from "./EducationForm";
import { useState } from "react";

export default function EducationSection (
    {
        onInputChange,
        educationFormData,
        setEducationFormData,
        setEducationDetails
    }
) {

    const [buttonStatus, setButtonStatus] = useState(0);
    const [sign, setSign] = useState("+");
    const [item, setItem] = useState("+");
    const [showData, setShowData] = useState("disabled");

    const [tempArr, setTempArr] = useState();

    const [inputValues, setInputValues] = useState({
        school: "",
        degree: "",
        educStartDate: "",
        educEndDate: "",
        location: ""
    });
    
    let educationLists = educationFormData.map( (data) =>{
        return (
            <>
                <div className="listofExperience" id={data.school} onClick={()=>educationDetails(data)}>
                    <h4>{data.school}</h4> 
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
    function addEducation() {
        setItem((prevItem) => (prevItem === "+" ? "-" : "+"));
        setButtonStatus((prevItem) => (prevItem === 1 ? 0: 1));
        setInputValues("");
    }

    function educationDetails (data) {
        // UI CHANGES
        setItem((prevItem) => (prevItem === "+" ? "-" : "+"));
        setButtonStatus((prevItem) => (prevItem === 1 ? 0: 1));

        // CHECK IF HAS DATA THEN LOAD IT TO THE FORM
        if(data) {
            setInputValues(data); 
            console.log(data);
            // THROWS THE DATA TO TEMPARRAY USING STATE
            educationFormData.map( (fdata) =>{
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
                <h3> <FontAwesomeIcon icon={faBriefcase} /> Education </h3>
                <h1>{sign}</h1>
            </div>
            <div className="workContent">
                { showData === "enabled" &&  item !== "-" ? educationLists : '' }
                {
                buttonStatus === 0 || item === "-"
                ? ""
                : <div className="workContentButton">
                    <button className="addExperience" onClick={addEducation}>+ Experience</button>
                  </div>
                }
                { 
                item === "-" && sign === "-"
                ? 
                <EducationForm
                    onInputChangeForm={onInputChange}
                    educationFormData={educationFormData} 
                    setEducationFormData={setEducationFormData} 
                    setEducationDetails={setEducationDetails}
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
