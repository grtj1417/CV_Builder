function Education({ data, handleEducation, handleAddBtn, handleDeleteBtn }) {
    return (
        <>
            <div className="education-form form">
                <div>
                    <svg width="30" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="10 14 105 105" fill="rgb(223, 232, 244)" x="0px" y="0px"><path d="M95,66.2v5.74a2.18,2.18,0,0,1-2.17,2.17H90a2.17,2.17,0,0,1-2.17-2.17V66.2a3.61,3.61,0,0,1,2.09-3.27V46.2l3-1.1V62.93A3.6,3.6,0,0,1,95,66.2ZM46.45,59.7,19.78,50V62.43a6.34,6.34,0,0,0,2.47,5.11c17,13.46,37.91,13.46,54.93,0a6.34,6.34,0,0,0,2.47-5.11V50L53,59.7A9.29,9.29,0,0,1,46.45,59.7ZM52,56.88l36-13.14L49.62,41.33a1.51,1.51,0,0,1-1.4-1.59,1.49,1.49,0,0,1,1.59-1.4L91.5,41a1.5,1.5,0,0,1,1.31,1A2.18,2.18,0,0,0,93,37.79l-41-15a6.26,6.26,0,0,0-4.47,0l-41,15a2.17,2.17,0,0,0,0,4.08l41.05,15A6.26,6.26,0,0,0,52,56.88Z" /></svg>
                    <div className="form-header">Education</div>
                </div>
                {data.educations.map((education, idx) => (
                    <form className="education-row form-row" key={education.id}>
                        <div>
                            Education{idx + 1}
                            {data.educations.length > 1 &&
                                <button className="del-btn" onClick={() => handleDeleteBtn(education.id)}>
                                    <img src="./images/delete.svg" alt="" />
                                </button>
                            }
                        </div>
                        <div>
                            <label id="school-name">School</label>
                            <input
                                type="text"
                                maxLength={66}
                                autoComplete="off"
                                id="school-name-input"
                                name="school"
                                placeholder="Enter School / University"
                                value={education.school}
                                onChange={(e) => handleEducation(e, education.id)}
                            />
                        </div>
                        <div>
                            <label id="degree">Degree</label>
                            <input
                                type="text"
                                maxLength={150}
                                autoComplete="off"
                                id="degree-input"
                                name="degree"
                                placeholder="Enter Degree"
                                value={education.degree}
                                onChange={(e) => handleEducation(e, education.id)}
                            />
                        </div>
                        <div>
                            <label id="start-date">Start Date</label>
                            <input
                                type="text"
                                autoComplete="off"
                                id="start-date-input"
                                name="startDate"
                                placeholder="Enter Start Date"
                                value={education.startDate}
                                onChange={(e) => handleEducation(e, education.id)}
                            />
                        </div>
                        <div>
                            <label id="end-date">End Date</label>
                            <input
                                type="text"
                                autoComplete="off"
                                id="end-date-input"
                                name="endDate"
                                placeholder="Enter End Date"
                                value={education.endDate}
                                onChange={(e) => handleEducation(e, education.id)}
                            />
                        </div>
                    </form>
                ))}
                <button className="add-btn" onClick={handleAddBtn}>+</button>
            </div>
        </>
    )
}
export default Education;