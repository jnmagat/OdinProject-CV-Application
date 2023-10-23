import { useState } from "react";
import LayoutPage from "./layoutpage"

export default function useStateDeclared () {
    // USE STATE BEGIN

  // PERSONAL
  const [personalDetails, setPersonalDetails] = useState(
    {
        fullName: "JOMA",
        email: "jomathegreat@hotmailgmail.com",
        phoneNumber: "09870901233",
        address: "#0995 New York City"
    }
  );

  // EDUCATION
  const [educationFormData, setEducationFormData] = useState([
    {
      id: 0,
      school: "City College of Calamba",
      degree: "Computer Science",
      educStartDate: '01/01/2013',
      educEndDate: '06/03/2017',
      location: "Calamba City, Laguna"
    }
  ]);

  // WORK
  const [workFormData, setWorkFormData] = useState([
    {
    id: 0,
    companyName: "Al-Amanah Islamic Investment Bank of the Philippines",
    positionTitle: "IT Programmer",
    workStartDate: "11/02/2017",
    workEndDate: "08/02/2023",
    workLocation: "Greenhills, San Juan City",
    description: "Assist in the managing of systems and networks, Troubleshooting of computers, LAN connections, Provide assistance to the branches and departments, Log errors / issues from branches and departments, Perform other jobs that may be assigned from time to time."
  }
  ]);
  
  const [educationDetails, setEducationDetails] = useState([]);
  const [workDetails, setWorkDetails] = useState([]);

// USE STATE ENDS


//THROWS STATES ON LAYOUT
return(
  <>
    <LayoutPage
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
        educationDetails={educationDetails}
        setEducationDetails={setEducationDetails}
        educationFormData={educationFormData}
        setEducationFormData={setEducationFormData}
        workDetails={workDetails}
        setWorkDetails = {setWorkDetails}
        workFormData = {workFormData}
        setWorkFormData = {setWorkFormData}
    />
  </>

);


}