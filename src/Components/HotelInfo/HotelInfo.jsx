
import { useLocation } from 'react-router-dom';
import hotelInfo from './HotelInfo.module.css';
import { useEffect, useState } from 'react';

function HotelInfo() {

    return (
        <div className={hotelInfo.main}>
                <h2>Bopline Hotel</h2>

            <div className={hotelInfo.details}>
                <div className={hotelInfo.descptive}>
                    <h2>Details</h2>
                    <table className={hotelInfo.table} striped="true" bordered="true" hover="true" variant="dark">
                        <tbody>
                            <tr>
                                <td>Amenities:</td>
                                <td>air-conditioning, free wi-fi, hairdryer, <br></br>
                                in-room safety, laundry, minibar, <br></br>
                                telephone, microwave, cable</td>
                            </tr>
                            <tr>
                                <td>View:</td>
                                <td>Swimming Pool</td>
                            </tr>
                            <tr>
                                <td>Size:</td>
                                <td>30x40</td>
                            </tr>
                            <tr>
                                <td>Bed Type:</td>
                                <td>Double bed</td>
                            </tr>
                            <tr>
                                <td>Categories:</td>
                                <td>Luxury Room</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={hotelInfo.summary}>
                        <p>Luxury rooms with a great feel of<br></br>
                        home at an elevated level. Get the<br></br>
                        best views and comfort at a very <br></br>
                        affordable price</p>
                    </div>
                </div>

                <div className={hotelInfo.pictures}>
                    <img src='double luxury.jpg' alt=''/>
                    <img src='luxury.jpeg' alt=''/>
                    <img src='luxury2.jpg' alt=''/>
                    <img src='luxury3.jpg' alt=''/>
                </div>
            </div>




        </div>
    )

}

export default HotelInfo;