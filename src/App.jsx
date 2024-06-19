import { useState } from 'react'
import Resume from './js/component/Resume'
import PersonalData from './js/component/PersonalData'
import Education from './js/component/Education'
import Experience from './js/component/Experience'
import Skill from './js/component/Skill'
import ColorContronl from './js/component/ColorControl'
import './App.css'
import './css/leftSidebar.css'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [imageFile, setImage] = useState("https://i.pinimg.com/564x/df/ce/a7/dfcea7989195d3273c2bcb367fca0a83.jpg");
  const [data, setData] = useState({
    color1: "rgb(135, 237, 222)",
    color2: "rgb(245, 130, 218)",
    imgName: "",
    imgSrc: "",
    info: [
      {
        name: "Full Name",
        placeholder: "First and last name",
        text: ""
      },
      {
        name: "E-mail",
        placeholder: "Enter e-mail",
        text: ""
      },
      {
        name: "Phone number",
        placeholder: "Enter phone number",
        text: ""
      },
      {
        name: "Link to portfolio",
        placeholder: "https://...",
        text: ""
      }
    ],
    educations: [
      {
        id: uuidv4(),
        school: "",
        degree: "",
        startDate: "",
        endDate: ""
      }
    ],
    experiences: [
      {
        id: uuidv4(),
        company: "",
        positionTitle: "",
        startDate: "",
        endDate: "",
        description: ""
      }
    ],
    skills: [
      {
        id: uuidv4(),
        text: ""
      }
    ]
  })
  function handleImageUpload(e) {
    console.log(e.target.files);
    setImage(URL.createObjectURL(e.target.files[0]));
  }

  const handlePersonalData = (event) => {
    var prevData = ({
      ...data,
      info: data.info.map(elem => {
        if (elem.name === event.target.name) {
          return {
            ...elem,
            text: event.target.value
          }
        }
        return elem;
      })
    })
    setData(prevData);
  };

  const addEducation = () => {
    var emptyEduData = {
      id: uuidv4(),
      school: "",
      degree: "",
      startDate: "",
      endDate: ""
    };
    console.log("id" + emptyEduData.id)
    var prevData = { ...data };
    prevData.educations.push(emptyEduData);
    setData(prevData);
  };

  const deleteEducation = (id) => {
    console.log(id);
    var prevData = ({
      ...data,
      educations: data.educations.filter(education => education.id !== id)
    })
    setData(prevData);
  };

  const handleEducation = (event, id) => {
    var prevData = ({
      ...data,
      educations: data.educations.map(elem => {
        if (elem.id === id) {
          elem[event.target.name] = event.target.value
        }
        // console.log(elem)
        return elem
      })
    })
    setData(prevData);
  };

  const addExperience = () => {
    var emptyExpData = {
      id: uuidv4(),
      company: "",
      positionTitle: "",
      startDate: "",
      endDate: "",
      description: ""
    };
    var prevData = { ...data };
    prevData.experiences.push(emptyExpData);
    setData(prevData);
  };

  const deleteExperience = (id) => {
    var prevData = ({
      ...data,
      experiences: data.experiences.filter(experience => experience.id !== id)
    })
    setData(prevData);
  };

  const handleExperience = (event, id) => {
    var prevData = ({
      ...data,
      experiences: data.experiences.map(elem => {
        if (elem.id === id) {
          elem[event.target.name] = event.target.value
        }
        console.log(elem)
        return elem
      })
    })
    setData(prevData);
  };

  const addSkill = () => {
    var emptyExpData = {
      id: uuidv4(),
      text: ""
    };
    var prevData = { ...data };
    prevData.skills.push(emptyExpData);
    setData(prevData);
  };

  const deleteSkill = (id) => {
    var prevData = ({
      ...data,
      skills: data.skills.filter(skill => skill.id !== id)
    })
    setData(prevData);
  };

  const handleSkill = (event, id) => {
    var prevData = ({
      ...data,
      skills: data.skills.map(elem => {
        if (elem.id === id) {
          return {
            ...elem,
            text: event.target.value
          }
        }
        return elem;
      })
    })
    setData(prevData);
  };

  const handleColor1 = (event) => {
    var prevData = ({
      ...data,
      color1: event.target.value
    })
    setData(prevData);
  }

  const handleColor2 = (event) => {
    var prevData = ({
      ...data,
      color2: event.target.value
    })
    setData(prevData);
  }

  return (
    <>
      <div className='app'>
        <div className='left-sidebar'>
          <PersonalData
            data={data}
            handlePersonalData={handlePersonalData} />
          <Education
            data={data}
            handleEducation={handleEducation}
            handleAddBtn={addEducation}
            handleDeleteBtn={deleteEducation} />
          <Experience
            data={data}
            handleExperience={handleExperience}
            handleAddBtn={addExperience}
            handleDeleteBtn={deleteExperience} />
          <Skill
            data={data}
            handleSkill={handleSkill}
            handleAddBtn={addSkill}
            handleDeleteBtn={deleteSkill} />
        </div>

        <div>
          <ColorContronl
            data={data}
            handleImageUpload={handleImageUpload}
            handleColor1={handleColor1}
            handleColor2={handleColor2}
          />
          <Resume data={data} imageFile={imageFile} />
        </div>
      </div>
    </>
  )
}
export default App