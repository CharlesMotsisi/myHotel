import React from 'react'
import '../css/payment.css'
import master from '../images/master.svg'
import swiping from '../images/swiping.jpg'
import { db } from "../configure/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const Payment = (props, { data, hotelData }) => {

    //const { Data, setTheData } = useState({})
    const [BookingInformation, setBookingInformation] = useState()
    const [HotelData, setHotelData] = useState()
    const location = useLocation();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [desc, setDesc] = useState('');
    const [theCheckIn, setTheCheckIn] = useState('');
    const [theCheckOut, setTheCheckOut] = useState('');
    const [total, setTotal] = useState('')
    const [cardNo, setCardNo] = useState('');
    const [cvv, setCVV] = useState('');
    const [expiryMonth, setExpiryMonth] = useState('');
    const [expiryYear, setExpiryYear] = useState('');
    const [payPassword, setPayPassword] = useState('');

    const [ButtonPopup, setButtonPopup] = useState(false);

    useEffect(() => {

        setBookingInformation(location.state.data)
        setHotelData(location.state.hotelData)
        /*setuserId(localStorage.getItem('userId'))*/
        //console.log(BookingInformation.checkIn);
        //console.log(HotelData);
    })

    const add = () => {

        // setTitle({title})
        // setPrice(props.price)
        // setDesc(props.desc)
        // //setTheCheckIn({checkIn});
        // setTheCheckOut(props.checkOut);

        //add(props.item);
        const deluxeRef = collection(db, "Deluxe");
        const luxuryRef = collection(db, "Luxury");
        const familyRef = collection(db, "Family");
        const standardRef = collection(db, "Standard");

        const transaction = {
            name: BookingInformation.name,
            title: HotelData.title,
            price: HotelData.price,
            desc: HotelData.desc,
            adult: BookingInformation.adult,
            child: BookingInformation.child,
            checkin: BookingInformation.checkIn,
            checkout: BookingInformation.checkOut,
            cardNo: cardNo,
            cvv: cvv,
            expiryMonth: expiryMonth,
            expiryYear: expiryYear

        };
        

        if (transaction.title === "Luxury") {
            console.log(transaction)
            addDoc(luxuryRef, transaction).then(() => {
                console.log(transaction);
                alert("Successfully Booked")
                navigate('/Home')

            }).catch((err) => {
                console.log(err);
            })
        }else if (transaction.title === "Deluxe") {
                console.log(transaction)
                addDoc(deluxeRef, transaction).then(() => {
                    console.log(transaction);
                    alert("Successfully Booked")
                    navigate('/Home')
    
                }).catch((err) => {
                    console.log(err);
                })
            }else if (transaction.title === "Standard") {
                    console.log(transaction)
                    addDoc(standardRef, transaction).then(() => {
                        console.log(transaction);
                        alert("Successfully Booked")
                        navigate('/Home')
        
                    }).catch((err) => {
                        console.log(err);
                    })
                }else if (transaction.title === "Family") {
                        console.log(transaction)
                        addDoc(familyRef, transaction).then(() => {
                            console.log(transaction);
                            alert("Successfully Booked")
                            navigate('/Home')
            
                        }).catch((err) => {
                            console.log(err);
                        })
                    }
        


    }
    const handleCardNo = (e) => {
        setCardNo(e.target.value);

    }
    const handleCVV = (e) => {
        setCVV(e.target.value);

    }

    const handleExpMonth = (e) => {
        setExpiryMonth(e.target.value)
    }

    const handleExpYear = (e) => {
        setExpiryYear(e.target.value)
    }
    const justChecking = () => {
        console.log(props.data);
        console.log(props.hotelData);
    }


    return (

        <div className='payment-container'>

            <img src={swiping} alt='bg' style={{ height: '90vh', opacity: '0.2' }} />

            <h5 className='card-no'> Card Number </h5>
            <h6 className='sixteen-dig' style={{ textDecoration: 'capitalise' }}> Enter the 16 digits card number on your card</h6>

            <img className='icon' src={master} alt='master' />
            <input className='card-number' type='text' placeholder='1234 - 5678 - 9876 - 8674' pattern="[0-9]+" maxlength='16'
                onChange={handleCardNo} value={cardNo} />

            <h5 className='cvv-text'>Cvv Number</h5>
            <h6 className='cvv-text-exp'> Enter 3 or 4 digit number on the card </h6>
            <input className='cvv-input' placeholder='CVV' maxlength='3' onChange={handleCVV} value={cvv} />

            <h5 className='expire'>Expiry Date</h5>
            <h6 className='expire-enter'> Enter the expiration date on the card </h6>
            <input className='exp1' placeholder='Month' maxlength='2' onChange={handleExpMonth} value={expiryMonth} />
            <input className='exp2' placeholder='Year' maxlength='4' onChange={handleExpYear} value={expiryYear} />

            <h5 className='pass'>Password</h5>
            <h6 className='pass-enter'> Enter your dynamic password </h6>
            <input className='password' placeholder='Password' />

            <button className='pay-now' onClick={add}>Pay Now</button>
        </div>

    )
}


export default Payment;