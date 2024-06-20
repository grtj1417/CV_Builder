import "../../css/resume.css"

function Resume({ data, imageFile }) {
  return (
    <div className='display-resume'>
      <div className="resume-top"
        style={{ background: `linear-gradient(to left, ${data.color1}, ${data.color2})` }}
      ></div>
      <div className="resume-personal">
        <div>
          <div className="profile-pohto-line1"
            style={{ borderImage: `linear-gradient(to right, ${data.color1}, ${data.color2}) 8` }}></div>
          <div className="profile-pohto-line2"></div>
          <div className="profile-pohto-line3"></div>
          <div className="profile-pohto-line4"></div>
          <div className="profile-pohto-line5"></div>
        </div>
        <img className="profile-photo" src={imageFile} alt="" />
        <div className="name">{data.info[0].text}<div className="portfolio small">{data.info[3].text}</div></div>
      </div>

      <div className="education-skill">
        <div className="resume-education">
          <div className="resume-title">Education</div>
          <div className="white-area"></div>
          <div>
            {data.educations.map((education, idx) => {
              return (
                <div className="medium" key={education.id}>
                  {data.educations.length > 1 && idx !== 0 && <hr/>}
                  <div className="medium school">{education.school}</div>
                  <div className="medium degree">{education.degree}</div>
                  <div className="small">{education.startDate} {education.startDate && education.endDate && "~"} {education.endDate}</div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="resume-skill">
          <div className="resume-title">Skill</div>
          <div>
            {data.skills.map((skill) => {
              if (skill.text) {
                return (
                  <div className="skill" key={skill.id}>{skill.text}</div>
                )
              }
              return "";
            })}
          </div>
        </div>
      </div>

      <div className="resume-experience">
        <div className="resume-title">Experience</div>
        {data.experiences.map((experience, idx) => {
          return (
            <div className="experience" key={experience.id}>
              {data.experiences.length > 1 && idx !== 0 && <hr/>}
              <div className="medium">{experience.company}</div>
              <div className="medium">{experience.positionTitle}</div>
              <div className="small">{experience.startDate} {experience.startDate && experience.endDate && "~"} {experience.endDate}</div>
              <div>{experience.description}</div>
            </div>
          )
        })}
      </div>

      <div className="resume-contact">
        <div>
          <svg width="35" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="5.0 2.0 90.0 90.0" fill="#213f71">
            <path d="m83.418 27.543-33.418 29.875-33.418-29.875zm-70.211 2.582 23 20.582-23 19.375zm3.625 42.332 22.543-18.957 9.25 8.293c0.41797 0.33203 0.875 0.54297 1.375 0.54297s1-0.16797 1.375-0.54297l9.25-8.293 22.543 18.957zm69.961-2.4141-23-19.375 23-20.582z" /></svg>
          <div>{data.info[1].text}</div>
        </div>
        <div>
          <svg width="30" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-7.0 -10.0 110.0 111.0" fill="#213f71">
            <g>
              <path d="m60.188 89.562c3.5938 2.3125 7.625 3.4375 11.625 3.4375 6.9062 0 13.688-3.3125 17.969-9.4688l2.9375-4.25c0.4375-0.59375 0.53125-1.375 0.28125-2.0938-3.375-9.6875-9.5938-15.875-18.406-18.344-0.8125-0.21875-1.6875 0-2.3125 0.625l-6.875 6.875c-2.5 2.5-6.4062 2.875-9.2812 0.90625-9.1875-6.3125-17.062-14.188-23.375-23.375-1.9688-2.875-1.5938-6.7812 0.90625-9.2812l6.875-6.9062c0.625-0.59375 0.84375-1.4688 0.59375-2.2812-2.5625-8.9688-8.75-15.156-18.344-18.438-0.6875-0.21875-1.4688-0.125-2.0938 0.3125l-4.2188 2.9375c-9.6875 6.75-12.344 19.75-6.0312 29.594 12.875 20.125 29.625 36.875 49.75 49.75z" />
              <path d="m57.613 6.4414c-1.0234-0.22656-2.0703-0.046875-2.9531 0.50781-0.88281 0.55859-1.4922 1.4258-1.7148 2.4375-0.23047 1.0195-0.054687 2.0664 0.50391 2.9453 0.55859 0.88281 1.4258 1.4961 2.4453 1.7266 14.895 3.3672 26.688 15.164 30.047 30.051 0.40234 1.793 1.9688 3.0508 3.8086 3.0508 0.29297 0 0.58594-0.03125 0.85938-0.097656 1.0195-0.22656 1.8867-0.83984 2.4453-1.7266 0.55469-0.88281 0.73437-1.9297 0.50391-2.9453-4.0195-17.816-18.133-31.93-35.945-35.953z" />
              <path d="m52.848 27.289c9.8281 2.2539 17.609 10.047 19.828 19.855 0.40625 1.7891 1.9727 3.043 3.8047 3.043 0.28906 0 0.58203-0.03125 0.86719-0.097656 1.0156-0.23047 1.8828-0.84375 2.4414-1.7266 0.55469-0.88281 0.73438-1.9297 0.50391-2.9453-2.8789-12.719-12.961-22.824-25.699-25.742-2.0859-0.48438-4.1992 0.83594-4.6797 2.9375-0.47656 2.1016 0.83984 4.1953 2.9336 4.6797z" />
            </g></svg>
          <div>{data.info[2].text}</div>
        </div>
      </div>
    </div >
  );
}

export default Resume;