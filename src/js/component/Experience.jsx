function Experience({ data, handleExperience, handleAddBtn, handleDeleteBtn }) {
    return (
        <>
            <div className="experience-form form">
                <div>
                    <svg width="30" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="6 10 65 65" fill="rgb(223, 232, 244)"><path d="M11.866,32.418,27.5,34.8V32A1.5,1.5,0,0,1,29,30.5h6A1.5,1.5,0,0,1,36.5,32v2.8l15.634-2.384A5.785,5.785,0,0,0,56,30.209V24a6.006,6.006,0,0,0-6-6H44V16a6.006,6.006,0,0,0-6-6H26a6.006,6.006,0,0,0-6,6v2H14a6.006,6.006,0,0,0-6,6v6.209A5.785,5.785,0,0,0,11.866,32.418ZM24,16a2,2,0,0,1,2-2H38a2,2,0,0,1,2,2v2H24Z" /><path d="M52.586,35.383,36.5,37.836V42A1.5,1.5,0,0,1,35,43.5H29A1.5,1.5,0,0,1,27.5,42V37.836L11.414,35.383A9.43,9.43,0,0,1,8,34.17V48a6.006,6.006,0,0,0,6,6H50a6.006,6.006,0,0,0,6-6V34.17A9.43,9.43,0,0,1,52.586,35.383Z" /><rect x="30.5" y="33.5" width="3" height="7" /></svg>
                    <div className="form-header">Experience</div>
                </div>
                {data.experiences.map((experience, idx) => (
                    <form className="experience-row form-row" key={experience.id}>
                        <div>
                            Experience{idx + 1}
                            {data.experiences.length > 1 &&
                                <button className="del-btn" onClick={() => handleDeleteBtn(experience.id)}>
                                    <img src="./images/delete.svg" alt="" />
                                </button>
                            }
                        </div>
                        <div>
                            <label id="company-name">Company</label>
                            <input
                                type="text"
                                maxLength={30}
                                autoComplete="off"
                                id="company-name-input"
                                name="company"
                                placeholder="Enter Company Name"
                                value={experience.company}
                                onChange={(e) => handleExperience(e, experience.id)}
                            />
                        </div>
                        <div>
                            <label id="position-title">Position Title</label>
                            <input
                                type="text"
                                maxLength={38}
                                autoComplete="off"
                                id="position-title-input"
                                name="positionTitle"
                                placeholder="Enter Position Title"
                                value={experience.positionTitle}
                                onChange={(e) => handleExperience(e, experience.id)}
                            />
                        </div>
                        <div>
                            <label id="start-date">Start Date</label>
                            <input
                                type="text"
                                maxLength={12}
                                autoComplete="off"
                                id="start-date-input"
                                name="startDate"
                                placeholder="Enter start date"
                                value={experience.startDate}
                                onChange={(e) => handleExperience(e, experience.id)}
                            />
                        </div>
                        <div>
                            <label id="end-date">End Date</label>
                            <input
                                type="text"
                                maxLength={12}
                                autoComplete="off"
                                id="end-date-input"
                                name="endDate"
                                placeholder="Enter end date"
                                value={experience.endDate}
                                onChange={(e) => handleExperience(e, experience.id)}
                            />
                        </div>
                        <div>
                            <label id="description">Description</label>
                            <input
                                type="text"
                                maxLength={400}
                                autoComplete="off"
                                id="description-input"
                                name="description"
                                placeholder="Enter Description"
                                value={experience.description}
                                onChange={(e) => handleExperience(e, experience.id)}
                            />
                        </div>
                    </form>
                ))}
                <button className="add-btn" onClick={handleAddBtn}>+</button>
            </div>
        </>
    )
}
export default Experience;