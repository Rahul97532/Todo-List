import React from 'react';

function List(props){
    return (
        <div className='i-data'>
        <i className="fa fa-times" aria-hidden='true' 
        onClick={()=>{
          props.clickForDelete(props.id)    //We are creating a callback function in onclick so that we can pass the parameter
        }}></i>   
        <li className='item'>{props.text}</li>
        </div>
      );
}
export default List;