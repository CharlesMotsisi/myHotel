// import Itachi from "../photos/photo.jpg";
import bg from '../slideIMG/5.jpg';
import "../css/family.css";
import { Link } from "react-router-dom"
import { useState } from "react";
import Data from "../data.json"
import Itemcard from "./itemcard";
import data from "./datal";
import Cart from "./cart";
import {db} from '../configure/firebase'
import {addDoc, collection, getDocs,doc, getDoc} from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from "firebase/auth";

import PopUpBook from './PopUpBook/PopUpBook';
import popup from './popup.module.css'
import { useNavigate } from 'react-router-dom'
import homeBook from './PopUpBook/Home_Booking.module.css';
import { async } from '@firebase/util';
import { useEffect } from 'react';


function Luxury(props){
    const [checkOut, setCheckOut] = useState("");
    const navigate = useNavigate();
    const [Hotel, setHotel] = useState([])

    useEffect(()=>{
        const getData = async () =>{
            const roomPrice = await getDocs(collection(db,"Rooms"));
            console.log(roomPrice)
        };
        getData();
    },[])


   


    //Added Items
    
   
    //const usersCollectionRef = collection(db, "Reservation")
    const retrieve= () => {
      const docRef = doc(db,"Reservation")
      const docSnap = getDoc(docRef);
      console.log(docSnap);  
     
    };
    const checkUser = () =>{
        data.productData.map((item, index)=>{
            let price = item.price;
            console.log(price);
        })
       console.log(data);
        //const querySnapshot = getDocs(collection(db, "Reservation"));
        
        //const collectionRef = collection(db, "Reservation");
       
        
        //console.log(Hotel);
        /*collectionRef.map((rev,index)=>{
            if(rev.CheckIn===CheckIn.checkIn){
                alert("Room Booked for this check in day, select anothger day")
            }else{*/
                /*const reserve = {
                        checkin:CheckIn.checkIn,
                        checkout:CheckIn.checkOut,
                        adult:CheckIn.adult,
                        child:CheckIn.child,
                        //price:CheckIn.totalPrice
            
                };
                addDoc(usersCollectionRef, reserve).then(()=>{
                    alert("Successfully Booked");
                }).catch((err)=>{
                    console.log(err);
                })*/
        
            //}
        //})
       

    }
    const [CheckIn, setCheckIn] = useState({
        checkIn: '',
        checkOut: '',
        child: 0,
        adult: 0,
        totalPrice: 0,
        night:0
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCheckIn(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const [HotelData, setHotelData] = useState([]);
    const [ButtonPopup, setButtonPopup] = useState(false);
    //const [ConfirmPopup, setConfirmPopup] = useState(false);


    function book(data) {
        setCheckIn('')
        setCheckIn(0)
        setHotelData(data)
        setButtonPopup(true)
    }
    function checkInNow() {
        if(CheckIn.checkIn !== '' && CheckIn.checkOut !== ''){
            var start = new Date(CheckIn.checkIn)
            var end = new Date(CheckIn.checkOut)
            CheckIn.night = ((end.getTime() - start.getTime()) / (24 * 3600 * 1000))
            CheckIn.totalPrice = ((end.getTime() - start.getTime()) / (24 * 3600 * 1000)) * HotelData.price;
            setButtonPopup(false);
            //navigate('/Payment', { state: { data: CheckIn, hotelData: HotelData} });
        }

        

    }
    let bookPopUp = (
        <div className={popup.popup}>
            <div className={popup.header}>
                <h3>Select Dates</h3>
            </div>
            <div className={popup.formGroup}>
                <label>Check-in Date <span>*</span></label>
                <input type="date" name="checkIn" className={popup.formControl} value={CheckIn.checkIn} onChange={handleChange} />
            </div>

            <div className={popup.formGroup}>
                <label>Check-out Date <span>*</span></label>
                <input type="date" name="checkOut" className={popup.formControl} value={CheckIn.checkOut} onChange={handleChange} />
            </div>

            <div className={popup.formGroup}>
                <label>Adult</label>
                <input type="number" name="adult" className={popup.formControl} value={CheckIn.adult} onChange={handleChange} />
            </div>

            <div className={popup.formGroup}>
                <label>Children</label>
                <input type="number" name="child" className={popup.formControl} value={CheckIn.child} onChange={handleChange} />
            </div>
            <button type="button" className={popup.submitAvailability} onClick={retrieve}>Check Now</button>
        </div>
    );

    
    

    return(
        <div className="container">
            <div className="top">
                <img src={bg} alt="" />
            </div>
            
            <div className="links">
            <span style={{marginLeft: '70%'}}>
                    <Link to="/home"> Home </Link>
                </span>
                <span>
                    <Link to="/home"> Booking </Link>
                </span>
                <span>
                    <Link to="/home"> Check Out </Link>
                </span>
                <span>
                    <Link to="/home"> Contact </Link>
                </span>
            </div>
            <div className="sale">
                <p>Get 20% discount when you book 3 family rooms</p>
            </div>

            {/*<div className="search">
                <input type="date" placeholder="Check in date" className="in" required
                onChange={handleCheckIn} value={checkIn}/>
                <input type="date" placeholder="Check out date" className="out" required
                onChange={handleCheckOut} value={checkOut}/>
                <button type="button" placeholder="Search" className="nyaka" onClick={handleSubmit}> Search </button>
    </div>*/}

            <div><h1 style={{marginTop: '10%'}}>Room Booking</h1></div>

            <div className="types">
                <table>
                    <thead>
                        <tr style={{backgroundColor: 'darkgray'}}>
                            <td>Room Info</td>
                            <td>Qty</td>
                            <td>Services</td>
                            <td>Initial Amount</td>
                        </tr>
                    </thead>
                    <tbody>
                        
                        
                        <tr>
                                Family room gives you<br></br> enough space and confortability<br></br> to make your family not wanna leave
                            
                            <td>1</td>
                            <td>
                                <p>Breakfast, Lunch, Dinner,<br></br>
                                   Massage,Swimming Pool,Wifi<br></br>
                                </p>
                            </td>
                            <td>ZAR 2500</td>
                            {/*<td>

                                <br></br><br></br>
                            <section className="py-4 container">
                                <div className="row justify-content-center">
                                    {data.productData.map((item, index)=>{
                                        return(
                                            <Itemcard
                                            img={item.img}
                                            title={item.title}
                                            desc={item.desc} 
                                            price={item.price} 
                                            item={item}
                                            key={index} 
                                            />
                                        )
                                    })}
                                </div>
                            </section>
                                </td>*/}
                        </tr>
                        <tr >
                            <td>
                                
                            </td>
                            <td>2</td>
                            <td>
                                <p>Breakfast, Lunch, Dinner,<br></br>
                                   Massage,Swimming Pool,Wifi<br></br>
                                </p>
                            </td>
                            <td>ZAR 5200</td>
                            
                </tr>
                    </tbody>
                </table>
                
            </div>

            {/*<span>
                <Link to="/cart">ADDED ROOM</Link>
                            </span>
            <div>
                <Cart chechIn={checkIn} checkOut={checkOut}/>
            </div>*/}
        
        <div className={homeBook.main}>
            <br />
            <div className={homeBook.content}>
                <div className={homeBook.hotelList}>
                    {data.productData.map((item, index)=>(
                        <div className={homeBook.hotel} key={index}>
                            <div className={homeBook.image} /*onClick={() => gallery(listHotels)}*/>
                               <Link to="/HotelInfo"> <img src="luxury.jpeg" alt="" /></Link>
                            </div>
                            <div className={homeBook.description} /*onClick={() => gallery(listHotels)}*/>
                                <h3>{item.title}</h3><br />
                                <label>R {item.price}</label><br /><br />
                                <label>{item.desc}</label>
                            </div>
                            <div className={homeBook.bookbtn}>
                                <button className={homeBook.btn} onClick={() => book(item)}>Book</button>
                                <PopUpBook trigger={ButtonPopup} setTrigger={setButtonPopup}>
                                    {bookPopUp}
                                </PopUpBook>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    )
}

export default Luxury;

