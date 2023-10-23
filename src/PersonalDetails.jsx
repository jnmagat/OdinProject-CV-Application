
export default function Personaldetailsform({onInputChange}) {

    const handleChange = (event) => {
        onInputChange( (prev) => {
            let newValue = {...prev};
            newValue[event.target.id] = event.target.value;
            return newValue;
        });
    };


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
        <form>
            <h3>Personal Details</h3>
            <hr />
            <div className="personalForm">
                <div className="personalFormItem">
                    <h5>Fullname</h5>
                    <input type="text" id="fullName" onChange={handleChange} />
                </div>
                <div className="personalFormItem">
                    <h5>Email</h5>
                    <input type="email" id="email" onChange={handleChange} />
                </div>
                <div className="personalFormItem">
                    <h5>Phone number</h5>
                    <input type="text" id="phoneNumber"  onChange={handleChange} />
                </div>
                <div className="personalFormItem">
                    <h5>Address</h5>
                    <input type="text" id="address" onChange={handleChange} />
                </div>
            </div>
            
        </form>
        </div>
    );
};
