import React from 'react'
import { Col } from 'react-bootstrap'
import '../styles/ProjectCard.scss'

const ProjectCard = ({title, discription, imgUrl}) => {
  return (
    <Col sm={6} md={4} xxl={3}>
        <div className="project-imgbox">
            <img src={imgUrl} alt="" />
            <div className="project-text">
                <h4>{title}</h4>
                <span>{discription}</span>
            </div>
        </div>
    </Col>
  )
}

export default ProjectCard