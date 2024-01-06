import React, {useState} from 'react';

const WorkItem = ({ item }) => {
  const [toggleState, setToggleState] = useState(null);
  const toggleTab = (index) => {
    setToggleState(toggleState === item.id ? null : item.id);
  }
  return (
    
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className='work__img' />
      <h3 className="work__title">{item.title}</h3>
      <div className="work__btn">
      <a href={item.link} className="work__button" target='_blank'>
        Demo <i className="bx bx-right-arrow-alt work__button-icon work__button-icon-right"></i>
      </a>
      <button className="work__button" onClick={toggleTab}>
          <i className="bx bx-left-arrow-alt work__button-icon work__button-icon-left"></i>
          {toggleState === item.id ? 'Descriptions' : 'Descriptions'}
      </button>
        <div className={toggleState === item.id ? "work__modal active-modal" : "work__modal"}>
          <div className="work__modal-content">
            <i onClick={toggleTab} className="uil uil-times work__modal-close"></i>
            <h3 className="work__modal-title">{item.title}</h3>
            <p className="work__modal-description">{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkItem;
