import React from 'react';

const WorkItem = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className='work__img' />
      <h3 className="work__title">{item.title}</h3>
      <div className="work__btn">
      <a href={item.link} className="work__button" target='_blank'>
        Demo <i className="bx bx-right-arrow-alt work__button-icon work__button-icon-right"></i>
      </a>
      <a href={item.description} className="work__button" target='_blank'>
      <i className="bx bx-left-arrow-alt work__button-icon work__button-icon-left"></i> Descriptions
      </a>
      </div>
    </div>
  );
}

export default WorkItem;
