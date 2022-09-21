import React from 'react';
function PaymentGateway(props) {
    var total=0;
    props.cart.map(prd=>total+=parseInt(prd.price)*parseInt(prd.quantity))
    const Submitted=(e)=>{
     let obj={cardno:e.target.cardno.value,expdate:e.target.expdate.value,holdername:e.target.name.value.toUpperCase(),amount:total}
  props.add(obj)
        e.preventDefault();
    }
    let msg=""
    let txnid=""
    let amount=""
    if(props.txns.length>0){
      msg=props.txns[props.txns.length-1].status;
      txnid=props.txns[props.txns.length-1].txnId;
      amount=props.txns[props.txns.length-1].amount
    }
   
    return ( 
        <>
        <div className="navBody col flexAIC flexJCC w100">
            <h2 className='' style={{margin:"10px",color:"blue"}}>Pay for total Amount: {total} Rs.</h2>
            <p className={`none ${msg} m1` }>Your Transaction '{txnid }' for Amount: {amount} .Rs is {msg}.</p>
            <div className="row w100  flexAIC flexJCC ">
                <div className="w20 lbg4  bRd5 p3">  <form onSubmit={Submitted} className='col'>
                <label htmlFor="">Card Holder Name</label>
                <input type="text" name="name" required/>
                <label htmlFor="">Card No.</label>
                <input type="number" name="cardno" id="" required/>
                <label htmlFor="">Expiray date (write same)</label>
                <input type="text" name="expdate" required/>
                <label htmlFor="">Amount</label>
                <input type="text" value={total} readOnly/>
                <button className="btn btn-danger"  type='submit'>Pay</button>
                </form></div>
                <div className="w33 m1 p1">
                    <img src="credit-g2eea3ea76_1280.png" style={{maxWidth:"400px"}} alt="" />
                </div>
              
            </div>
        </div>
        </>
     );
}

export default PaymentGateway;