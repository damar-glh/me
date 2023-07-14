import React from 'react'

const WorkItem = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className='work__img' />
    </div>
  )
}

export default WorkItem