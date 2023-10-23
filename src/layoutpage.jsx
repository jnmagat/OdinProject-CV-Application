
import Personaldetailsform from "./PersonalDetails";
import EducationSection from "./education/EducationSection";
import EducationLayout from "./education/EducationLayout";
import ExperienceSection from "./experience/ExperienceSection";
import ExperienceLayout from "./experience/ExperienceLayout";
import './App.css'


export default function LayoutPage(
  {
    personalDetails,
    setPersonalDetails,
    educationDetails,
    setEducationDetails,
    educationFormData,
    setEducationFormData,
    workDetails,
    setWorkDetails,
    workFormData,
    setWorkFormData
  }) {

  const {fullName,email,phoneNumber,address} = personalDetails;

  
  const handlePersonalChange = (value) => {
    setPersonalDetails(value);
  }
  const handleEducationChange = (value) => {
    setEducationDetails(value);
  }
  const handleWorkChange = (value) => {
    setWorkDetails(value);
  }
  
    return (
        <div className="layout">
            <div className="personalDetails">
              <Personaldetailsform 
                onInputChange={handlePersonalChange} 
              />
            </div>
            <div className="educationDetails">
            <EducationSection  
                onInputChange={(e)=>handleEducationChange(e)} 
                educationFormData={educationFormData} 
                setEducationFormData={setEducationFormData} 
                setEducationDetails={setEducationDetails} 
              /> 
            </div>
            <div className="workDetails">
              <ExperienceSection  
                onInputChange={(e)=>handleWorkChange(e)} 
                workFormData={workFormData} 
                setWorkFormData={setWorkFormData} 
                setWorkDetails={setWorkDetails} 
              /> 
            </div>
        <div
        className="blankPage"
        style={{
            backgroundColor:'white',
            margin: 100,
            marginTop: 10,
            borderRadius: 10,
            height:1000
        }}
        >
        <div className=""
        style={{backgroundColor:'#001524', color: 'white', padding: 20,marginBottom: 5}}
        >
          {/* PERSONAL DETAILS */}
          <h1 style={{textAlign:'center'}}>{fullName}</h1>
            <div className="subPersonalDetails">
            <h6>{email}</h6>
            <h6>{phoneNumber}</h6>
            <h6>{address}</h6>
          </div>
        </div>
        <hr />
        {/* EDUCATION */}
        <EducationLayout
          educationFormData={educationFormData}
          educationDetails={educationDetails}
        />
        

        <ExperienceLayout
          workFormData={workFormData}
          workDetails={workDetails}
        />


        </div>
        </div>
    )
}
