export default function ExperienceLayout ({workFormData,workDetails}) {

    let workLists = workFormData.map( (
      {
        companyName,
        positionTitle,
        workStartDate,
        workEndDate,
        workLocation,
        description
      }
    ) =>{
        return (
        <>
        <div className="bottomWorkDetails" id={companyName} >
          <div className="companyName">
            <h4>{companyName}</h4>
          </div>
          <div className="positionTitle">
            <p>{positionTitle}</p>
          </div>
          <div className="workDates">
            <p>{workStartDate} - {workEndDate}</p>
          </div>
          <div className="workLocation">
            <p>{workLocation}</p>
          </div>
          <div className="description">
            <p>{description}</p>
          </div>
        </div>
        </>
        );
      })


    return (
        <>
        <div className="topWorkDetails" >
            <h3
            style={{textAlign:'center',backgroundColor:'#445D48',color:'white',padding:5}}>Work Experiences</h3>
            {workLists}
            <div className="bottomWorkDetails">
              <div className="companyName">
                <h4>{workDetails.companyName}</h4>
              </div>
              <div className="positionTitle">
                <p>{workDetails.positionTitle}</p>
              </div>
              <div className="workDates">
                <p>{workDetails.workStartDate || <span> – </span> }{workDetails.workEndDate}</p>
              </div>
              <div className="workLocation">
                <p>{workDetails.workLocation}</p>
              </div>
              <div className="description">
                <p>{workDetails.description}</p>
              </div>
            </div>
          </div>
          </>
    );
}