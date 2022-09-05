import React, { useState } from "react";
import { useCart } from "react-use-cart";
import { db } from "../configure/firebase";
import { addDoc, collection } from "firebase/firestore";

const Itemcard = (props) =>{

    
    const { addItem } = useCart();

    const item=()=>{
        addItem(props.item);
        alert("Booking reserved, proceed to checkout")
    }
    /*

            const [title, setTitle] = useState('');
            const [price, setPrice] = useState('');
            const [desc, setDesc] = useState('');
            const [theCheckIn, setTheCheckIn] = useState('');
            const [theCheckOut, setTheCheckOut] = useState('');
            const [total,setTotal] = useState('')
            
            const add=(()=>{
                
                
                setTitle(props.title)
                setPrice(props.price)
                setDesc(props.desc)
                setTheCheckIn(props.checkIn);
                setTheCheckOut(props.checkOut);
                setTotal()
                addItem(props.item);
                const collectionRef=collection(db,"Booking");
                
                const transaction={
                    title:title,
                    price:price,
                    desc:desc,
                    theCheckIn:theCheckIn,
                    theCheckOut:theCheckOut
                    
                };
                

                console.log(transaction)
                addItem(props.item)
                addDoc(collectionRef, transaction).then(()=>{
                    console.log(transaction);
                    alert("Added Booking successfully")
                    
                }).catch((err)=>{
                    console.log(err);
                })
            

        
                //props.add(title, price, desc);
                
            })*/


    return(
        <div className="col-11 col-md col-lg-3 mx-0 mb-4">
            <div className="card p-0 overflow-hidden h-100 shadow">
                <img hidden src={props.img} className="card-img-top img-fluid" style={{width: '300px', height: '300px'}} alt=""/>
                <div className="card-body text-center">
                    <h5 hidden  className="card-title">{props.title}</h5>
                    <h5 hidden className="card-title">R{props.price}</h5>
                    
                    <p className="card-text">{props.desc}</p>
                    <button className="btn btn-success" onClick={item}>
                        Booking
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Itemcard;