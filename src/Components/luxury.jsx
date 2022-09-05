// import Itachi from "../photos/photo.jpg";
import bg from '../slideIMG/5.jpg';
import "../css/family.css";
import { Link } from "react-router-dom"
import { useState } from "react";
import Data from "../data.json"
import Itemcard from "./itemcard";
import data from "./datal";
import Cart from "./cart";

import PopUpBook from './PopUpBook/PopUpBook';
import popup from './popup.module.css'
import { useNavigate } from 'react-router-dom'
import homeBook from './PopUpBook/Home_Booking.module.css';


function Luxury(props){
    const [checkOut, setCheckOut] = useState("");


    const handleCheckIn = (e) =>{
        setCheckIn(e.target.value);
        
    }
    const handleCheckOut = (e) =>{
        setCheckOut(e.target.value);
        
    }

    const handleSubmit = () => {
        
    }

    //Added Items
    
    const navigate = useNavigate()
    const [Hotel, setHotel] = useState([])
    function gallery(data) {
        navigate('/hotel_info', { state: { data: data } })
    }

    let bookPopUp = (
        <div className={popup.popup}>
            <div className={popup.header}>
                <h3>R {HotelData.price}</h3>
                <label>/ {HotelData.duration}</label>
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
            <button type="button" className={popup.submitAvailability} onClick={checkInNow}>Check Now</button>
        </div>
    );

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
    const [ConfirmPopup, setConfirmPopup] = useState(false);


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
            navigate('/confirmation', { state: { data: CheckIn, hotelData: HotelData} });
        }
    }

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
                            <td>ZAR 1800</td>
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
                            <td>ZAR 3600</td>
                            
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
                    {Hotel.map((listHotels, xId) => (
                        <div className={homeBook.hotel} key={xId}>
                            <div className={homeBook.image} onClick={() => gallery(listHotels)}>
                                <img src={listHotels.hotel} alt={listHotels.alt} />
                            </div>
                            <div className={homeBook.description} onClick={() => gallery(listHotels)}>
                                <h3>{listHotels.name}</h3><br />
                                <label>location: {listHotels.location}</label><br />
                                <label>R {listHotels.price} {listHotels.duration}</label><br /><br />
                                <label>{listHotels.description}</label>
                            </div>
                            <div className={homeBook.bookbtn}>
                                <button className={homeBook.btn} onClick={() => book(listHotels)}>Book</button>
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

