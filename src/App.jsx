import { useState, useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import Resume from './js/component/Resume'
import PersonalData from './js/component/PersonalData'
import Education from './js/component/Education'
import Experience from './js/component/Experience'
import Skill from './js/component/Skill'
import ColorContronl from './js/component/Control'
import exampleData from './js/example-data'
import AudioPlayer from './js/component/Audio'
import './App.css'
import './css/leftSidebar.css'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [data, setData] = useState({
    color1: "rgb(132, 207, 234)",
    color2: "rgb(147, 130, 245)",
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

  const [imageFile, setImage] = useState("https://i.pinimg.com/564x/df/ce/a7/dfcea7989195d3273c2bcb367fca0a83.jpg");

  function loadSampleData() {
    setData(exampleData);
  }

  function handleImageUpload(e) {
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
    var prevData = { ...data };
    prevData.educations.push(emptyEduData);
    setData(prevData);
  };

  const deleteEducation = (id) => {
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

  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `${data.info[0].text}'s Resume`
  })

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

        <div className='right-display'>
          <ColorContronl
            data={data}
            handleImageUpload={handleImageUpload}
            handleColor1={handleColor1}
            handleColor2={handleColor2}
            loadSampleData={loadSampleData}
            handlePrint={handlePrint}
          />
          <Resume data={data} imageFile={imageFile} reference={componentRef} />
        </div>
      </div>
    </>
  )
}
export default App