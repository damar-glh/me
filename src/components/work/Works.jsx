import React from 'react'
import { projectsData } from './Data'
import { projectsNav } from './Data'
import WorkItem from './WorkItem'

const Works = () => {
  return (
    <div>
      <div className="work__filters">
      {projectsNav.map((item, index) => {
        return <span className="work__item" key={index}>{item.name}</span>;
      })}
    </div>
    <div className="work__container container grid">
      {projectsData.map((item) => {
        return <WorkItems item={item} key={item.id} />
      })}
    </div>
    </div>
  )
}

export default Works