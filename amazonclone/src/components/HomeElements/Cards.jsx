import React from 'react';
import databases from '../../Database/test';
function Cards(props) {
    const data=databases.restaurants
    let modified_collection = []
    if (data.length > 0) {
        modified_collection = data.reduce((rows, key, index) => {
            return (index % 4 === 0 ? rows.push([key])
                : rows[rows.length - 1].push(key)) && rows;
        }, []);

    }
    return ( 
        <>
           

                    {
                        modified_collection.map((row) =>
                        <div className="row flexSE">
                                {row.map(col => 
                                <div className="col card  m1 bgWhite changer brd0" onClick={()=>props.getProduct(col.id)}>
                                   <img className='' style={{width:"18vw",height:"16vw"}} src={col.photograph} alt="" /><h3 className='m3' style={{textAlign:"center"}}>{col.name}</h3>
                                </div>)}
                        </div>
                      
                        )
                    }



        </>
     );
}

export default Cards;