export default function ExperienceLayout (
    {
        educationFormData,
        educationDetails
    }
) {

    let educationLists = educationFormData.map( (
      {
        school,
        degree,
        educStartDate,
        educEndDate,
        location
      }
    ) =>{
        return (
        <>
        <div className="bottomWorkDetails" id={school} >
          <div className="school">
            <h4>{school}</h4>
          </div>
          <div className="degree">
            <p>{degree}</p>
          </div>
          <div className="educationDates">
            <p>{educStartDate} - {educEndDate}</p>
          </div>
          <div className="location">
            <p>{location}</p>
          </div>
        </div>
        </>
        );
      })


    return (
        <>
        <div className="topEducationDetails" >
            <h3
            style={{textAlign:'center',backgroundColor:'#445D48',color:'white',padding:5}}>Education</h3>
            {educationLists}
            <div className="bottomEducationDetails">
              <div className="school">
                <h4>{educationDetails.school}</h4>
              </div>
              <div className="degree">
                <p>{educationDetails.degree}</p>
              </div>
              <div className="educationDates">
                <p>{educationDetails.educStartDate || <span> – </span> }{educationDetails.educEndDate}</p>
              </div>
              <div className="location">
                <p>{educationDetails.location}</p>
              </div>
            </div>
          </div>
          </>
    );
}