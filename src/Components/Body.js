import React from 'react';
import Modal from './Modal';
import Crousel from './Crousel';
import Cards from './Cards';

export default function Body() {
  let a=[1,2,3,4,5,6,7,8,9];
  return (
    <>
    <Crousel/>
    <div className='container my-3'>
          <Modal/>
          <div className='row'>
          { a.map((value,index)=>{
              return (<Cards name={value} key={index}/>)
           }) }
          </div>
    </div>
    </>
  );
}
