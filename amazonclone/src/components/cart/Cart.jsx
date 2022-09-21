import React from 'react';
import { Link } from 'react-router-dom';

function Cart(props) {
    let total=0;
    if (props.arr.length === 0)
        return (<> <div className="main row flexJCC p1">
        <div className="container card xx flexStart" style={{width:"90%",minHeight:"75vh",marginTop:"5vh"}}>
            <table >
               <thead>
               <tr className='bgBlack dbg2 bRd5'>
                    <td colSpan="6" className='bRd5'>    <h2>Shopping Cart</h2></td>
                    <td className='bRd5'><button className="btn btn-trans" onClick={props.empty}>Empty Cart</button></td>
                </tr>
                <tr className=''>
                    <th>Id</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                </tr>
               </thead>
         <tbody>
                <tr><td colSpan="8" ><h3 className='m5'>Cart Is Empty</h3></td></tr>
               </tbody>
                </table>
                </div></div></>);
    else
        return (
            <>
                <div className="main row flexAIC flexJCC p1 flexSA">
                    <div className="container card xx flexStart" style={{width:"60%",minHeight:"75vh",marginTop:"5vh"}}>
                        <table >
                           <thead>
                           <tr className='bgBlack dbg2 bRd5'>
                                <td colSpan="6" className='bRd5'>    <h2>Shopping Cart</h2></td>
                                <td className='bRd5'><button className="btn btn-trans" onClick={props.empty}>Empty Cart</button></td>
                            </tr>
                            <tr className=''>
                                <th>Id</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                           </thead>
                            {
                                props.arr.map((prd,i) => {
                                    total+=parseInt(prd.price)*parseInt(prd.quantity);
                                    return <tr><td>{prd.id}</td>
                                    <td><img src={prd.photograph} className="bRd5" style={{width:"50px",height:"50px"}} alt="" /></td>
                                    <td>{prd.name}</td>
                                    <td>{prd.price}</td>
                                    <td className='row flexJCC'><div className="row flexAIC"><button onClick={()=>props.incrDecr(false,i)} className="btn btn-black">-</button><button className="btn">{prd.quantity}</button><button onClick={()=>props.incrDecr(true,i)} className="btn btn-black">+</button></div></td>
                                    <td>{parseInt(prd.price)*parseInt(prd.quantity)}</td>
                                    <td><button className="btn btn-danger" onClick={()=>props.remove(i)}>Remove</button></td>
                                    </tr>
                                })
                            }
                        </table>
                    </div>
                    
                    <div className="container card xx flexStart" style={{width:"30%",minHeight:"75vh",marginTop:"5vh"}}>
                        <h2>Cart subtotal: Rs. {total}</h2>
                   <Link to="/paygateway"><button className="btn clr2 m3" style={{color:"black"}}>Proceed to Buy Make Payment</button></Link>
                    </div>
                </div>
            </>
        );
}

export default Cart;