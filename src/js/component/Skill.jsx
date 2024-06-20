function Skill({ data, handleSkill, handleAddBtn, handleDeleteBtn }) {
    return (
        <>
            <div className="skill-form form">
                <div className="form-header">Skill</div>
                {data.skills.map((skill) => (
                    <div className="skill-row" key={skill.id}>
                        <input
                            type="text"
                            maxLength={20}
                            autoComplete="off"
                            name="skill-input"
                            id="skill-input"
                            value={skill.text}
                            onChange={(e) => handleSkill(e, skill.id)}
                        />
                        {data.skills.length > 1 &&
                            <button className="del-btn" onClick={() => handleDeleteBtn(skill.id)}>
                                <img src="./images/delete.svg" alt="" />
                            </button>
                        }
                    </div>
                ))}
                <button className="add-btn skill-btn" onClick={handleAddBtn}>+</button>
            </div>
        </>
    )
}
export default Skill;