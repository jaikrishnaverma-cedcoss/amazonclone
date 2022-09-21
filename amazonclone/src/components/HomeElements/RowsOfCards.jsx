import React, { useEffect, useState } from 'react';
import databases from '../../Database/test';
import './rowsOfCards.css'
function RowsOfcard(props) {
    const data=props.arr
    const [index,setIndex]=useState(0);
    if(index>=(data.length-parseInt(props.len)))
    setIndex(0);
    useEffect(() => {
        const interval = setInterval(() => {
          setIndex(prev=>prev+1);
        }, 2000);
        return () => clearInterval(interval);
      }, []);
let res=[];
      for(let i=0;i<parseInt(props.len);i++)
      {
      res.push(data[index+i])
      }
      // console.log(res)
    return ( 
        <>
    
        <div className="rowsOfCards p1 bgWhite brd0 m1" style={{flexDirection:"column"}}>
          <div className="row">
            <h2 className='m1' style={{marginBottom:"0%"}}>{props.heading}</h2>
          </div>
            <div className="row">
              {
                res.map(x=><div key={x.photograph} onClick={()=>props.getProduct(x.id)} className="col "><img className='' src={x.photograph} alt="" /><h4></h4></div>)
              }
       
       {/* <div className="col "><img className='' src={data[index+1].photograph} alt="" /><h4></h4></div>
       <div className="col "><img className='' src={data[index+2].photograph} alt="" /><h4></h4></div>
       <div className="col "><img className='' src={data[index+3].photograph} alt="" /><h4></h4></div> */}
            
           </div>
          
        </div>
        </>
     );
}

export default RowsOfcard;