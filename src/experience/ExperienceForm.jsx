
export default function ExperienceForm(
    {
        onInputChangeForm,
        workFormData,
        setWorkFormData,
        setWorkDetails,
        setItem,
        setButtonStatus,
        inputValues,
        setInputValues,
        tempArr,
        setTempArr
    } 
) {
    
    let newValue;
    let {id,companyName,positionTitle,workStartDate,workEndDate,workLocation,description} = inputValues;
    let tempFormData;
  

    function handleChange(event){

        setInputValues({
            ...inputValues,
            [event.target.id]: event.target.value
        });

        if(tempArr) {
            onInputChangeForm(
                tempFormData = workFormData.map( (fdata) => {
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
            const updatedFormData = workFormData.map( (fdata) =>{
                if(fdata.id === tempArr.id) {
                    return { ...fdata, 
                            companyName: inputValues.companyName,
                            positionTitle: inputValues.positionTitle,
                            workStartDate: inputValues.workStartDate,
                            workEndDate: inputValues.workEndDate,
                            workLocation: inputValues.workLocation,
                            description: inputValues.description
                    };
                } 
                return fdata;
            })
            setWorkFormData(updatedFormData);
        } else {
            // MAKE ID
            let counter =0;
            for (let i = 0; i < workFormData.length; i++) {
              counter++;
            }
            inputValues.id = counter;

            // SET DATA FOR NEW ITEM
            setWorkFormData([...workFormData, inputValues]);
            setWorkDetails("");
            // console.log(workFormData);
        }
        setInputValues({
            companyName: "",
            positionTitle: "",
            workStartDate: "",
            workEndDate: "",
            workLocation: "",
            description: ""
        });
        setTempArr(null);
        newValue ="";
        setItem("+");
        setButtonStatus(1);
    }

    function cancelForm() {

        setWorkDetails("");

        if(tempArr) {
            const returnFormData = workFormData.map( (fdata) =>{
                if(fdata.id === tempArr.id) {
                    return { ...fdata, 
                            companyName: tempArr.companyName,
                            positionTitle: tempArr.positionTitle,
                            workStartDate: tempArr.workStartDate,
                            workEndDate: tempArr.workEndDate,
                            workLocation: tempArr.workLocation,
                            description: tempArr.description
                    };
                } 
                return fdata;
            })
            setWorkFormData(returnFormData);
        }
        setTempArr(null);
        setItem("+");
        setButtonStatus(1);
        
       
    }

    return (
        <div className="workForm">
        <div className="workFormItem">
            <h5>Company Name</h5>
            <input type="text" id="companyName" value={inputValues.companyName} onChange={handleChange}/>
        </div>
        <div className="workFormItem">
            <h5>Position Title</h5>
            <input type="text" id="positionTitle" value={inputValues.positionTitle} onChange={handleChange} />
        </div>
        <div className="workFormItem">
            <h5>Start Date</h5>
            <input type="text" id="workStartDate" value={inputValues.workStartDate} onChange={handleChange} />
        </div>
        <div className="workFormItem">
            <h5>End Date</h5>
            <input type="text" id="workEndDate" value={inputValues.workEndDate} onChange={handleChange} /> 
        </div>
        <div className="workFormItem">
            <h5>Location</h5>
            <input type="text" id="workLocation" value={inputValues.workLocation} onChange={handleChange} /> 
        </div>
        <div className="workFormItem">
            <h5>Description</h5>
            <textarea type="text" cols={50} rows={5} maxLength={500} id="description" value={inputValues.description} onChange={handleChange} /> 
        </div>
        <div className="workFormItem">
            <button id="workCancel" onClick={cancelForm} >Cancel</button>
            <button id="workSave" onClick={handleSubmit}>Save</button>
        </div>
    </div>  
    );
}