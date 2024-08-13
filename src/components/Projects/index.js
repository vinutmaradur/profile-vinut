import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'python project' ?
            <ToggleButton active value="python project" onClick={() => setToggle('python project')}>PYTHON PROJECTS</ToggleButton>
            :
            <ToggleButton value="python project" onClick={() => setToggle('python project')}>PYTHON PROJECTS</ToggleButton>
          }
          <Divider />
          {toggle === 'data science project' ?
            <ToggleButton active value="data science project" onClick={() => setToggle('data science project')}>DATA SCIENCE PROJECTS</ToggleButton>
            :
            <ToggleButton value="data science project" onClick={() => setToggle('data science project')}>DATA SCIENCE PROJECTS</ToggleButton>
          }
          <Divider />
          {toggle === 'others' ?
            <ToggleButton active value="others" onClick={() => setToggle('others')}>OTHERS</ToggleButton>
            :
            <ToggleButton value="others" onClick={() => setToggle('others')}>OTHERS</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects