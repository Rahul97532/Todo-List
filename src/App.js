import React,{useState} from 'react';
import List from './List';

function App(){
  const [name,setName]=useState();
  const changeItemName=(event)=>{
    setName(event.target.value);
  }
  const [items,setItems]=useState([]);
  const itemsList=()=>{
    setItems((oldItems)=>{
      return [...oldItems,name];
    })
    setName("");
  }
  const deleteItem=(id)=>{
    setItems((oldItems)=>{
      return oldItems.filter((item,index)=>{
        return index!==id;
      });
    });
  }
  return (
    <>
      <div className="container">
        <div className="main">
            <br />
            <h1 className='heading'>TODO LIST</h1>
            <input type="text" 
            className='input' 
            placeholder='Add Item' 
            onChange={changeItemName}
            value={name}
            />
            <button className='add' onClick={itemsList}>+</button>
            <div className='item-area'>
              <ol className='list'>
                  {/* <li>{name}</li> */}
                  {
                    items.map((item,index)=>{
                      return <List text={item} key={index} id={index} clickForDelete={deleteItem} />
                    })
                  }
                  
              </ol>
            </div>
            
        </div>
      </div>
    </>
  )
}

export default App;