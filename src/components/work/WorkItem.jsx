import React, {useState} from 'react';

const WorkItem = ({ item }) => {
  const [toggleState, setToggleState] = useState(null);
  const toggleTab = (index) => {
    setToggleState(toggleState === item.id ? null : item.id);
  }
  return (
    
    <div className="work__card" key={item.id} data-aos="zoom-in" data-aos-delay="1500">
      <img src={item.image} alt="" className='work__img' data-aos="zoom-in" data-aos-delay="2000"/>
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
            <p className="work__modal-title-description"><i className='uil uil-trophy'></i> Goals</p>
            <p className="work__modal-description">{item.goals}</p>
            <p className="work__modal-title-description"><i className='uil uil-arrow'></i> Technology</p>
            <div className="tech_use">
              {item.tech.map((tech) => (
                <img key={tech} src={tech} alt="" className="tech_img" />
              ))}
            </div>
            <p className="work__modal-title-description"><i className='uil uil-users-alt'></i> Author</p>
            <div className="author">
              {item.author.map((author) => (
                    <p key={author} className="work__author">● {author}</p>
              ))}
            </div>
            <p className="work__modal-title-description"><i className='uil uil-star'></i> Rating's</p>
            <div className="stars_ratings">
              {item.ratings.map((ratings) => (
                  <img key={ratings} src={ratings} alt="" className="ratings_img" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkItem;
