export default function EducationForm (
    {
        onInputChangeForm,
        educationFormData,
        setEducationFormData,
        setEducationDetails,
        setItem,
        setButtonStatus,
        inputValues,
        setInputValues,
        tempArr,
        setTempArr
    } 
) {
    
    let newValue;
    let {id,school,degree,educStartDate,educEndDate,location} = inputValues;
    let tempFormData;
  

    function handleChange(event){

        setInputValues({
            ...inputValues,
            [event.target.id]: event.target.value
        });

        if(tempArr) {
            onInputChangeForm(
                tempFormData = educationFormData.map( (fdata) => {
                    if(fdata.id === tempArr.id) {   
                        newValue = {...tempArr};
                        setTempArr(newValue);
                        fdata[event.target.id] =  event.target.value;
                        return newValue;

                    } else {
                        // return fdata;
                    }
                })
            )
        } else {
            onInputChangeForm( (prev) => {
                newValue = {...prev}
                newValue[event.target.id] = event.target.value;
                return newValue;
            });
        }
    }

    function handleSubmit() {
        // modify
        if(tempArr) {
            const updatedFormData = educationFormData.map( (fdata) =>{
                if(fdata.id === tempArr.id) {
                    return { ...fdata, 
                            school: inputValues.school,
                            degree: inputValues.degree,
                            educStartDate: inputValues.educStartDate,
                            educEndDate: inputValues.educEndDate,
                            location: inputValues.location
                    };
                } 
                return fdata;
            })
            setEducationFormData(updatedFormData);
        } else {
            // MAKE ID
            let counter =0;
            for (let i = 0; i < educationFormData.length; i++) {
              counter++;
            }
            inputValues.id = counter;

            // SET DATA FOR NEW ITEM
            setEducationFormData([...educationFormData, inputValues]);
            setEducationDetails("");
            // console.log(workFormData);
        }
        setInputValues({
            school: "",
            degree: "",
            educStartDate: "",
            educEndDate: "",
            location: ""
        });
        setTempArr(null);
        newValue ="";
        setItem("+");
        setButtonStatus(1);
    }

    function cancelForm() {
        
        console.log(educationFormData);
        setEducationDetails("");

        if(tempArr) {
            const returnFormData = educationFormData.map( (fdata) =>{
                if(fdata.id === tempArr.id) {
                    return { ...fdata, 
                            school: tempArr.school,
                            degree: tempArr.degree,
                            educStartDate: tempArr.educStartDate,
                            educEndDate: tempArr.educEndDate,
                            location: tempArr.location
                    };
                } 
                return fdata;
            })
            setEducationFormData(returnFormData);
        }
        
        setTempArr(null);
        setItem("+");
        setButtonStatus(1);
        
       
    }

    return (
        <div className="educationForm">
        <div className="educationFormItem">
            <h5>Company Name</h5>
            <input type="text" id="school" value={inputValues.school} onChange={handleChange}/>
        </div>
        <div className="educationFormItem">
            <h5>Position Title</h5>
            <input type="text" id="degree" value={inputValues.degree} onChange={handleChange} />
        </div>
        <div className="educationFormItem">
            <h5>Start Date</h5>
            <input type="text" id="educStartDate" value={inputValues.educStartDate} onChange={handleChange} />
        </div>
        <div className="educationFormItem">
            <h5>End Date</h5>
            <input type="text" id="educEndDate" value={inputValues.educEndDate} onChange={handleChange} /> 
        </div>
        <div className="educationFormItem">
            <h5>Location</h5>
            <input type="text" id="location" value={inputValues.location} onChange={handleChange} /> 
        </div>
        <div className="educationFormItem">
            <button id="educationCancel" onClick={cancelForm} >Cancel</button>
            <button id="educationSave" onClick={handleSubmit}>Save</button>
        </div>
    </div>  
    );
}