import React from 'react';

const Accordion = ({items}) => {
  const renderedItems = items.map ((item,index) =>{
      const  onTitleClick = (index) => {
        console.log('title was clicked',index);
    };
   
        return (
            <React.Fragment key={item.title}>
                <div className="title active"
                onClick={() => onTitleClick(index)}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className="content active">
                    <p>{item.content}</p>
                </div>
            </React.Fragment> 
        );      
  });

    return  (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    );
};
export default Accordion;