

/*function Dates(){

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
            navigate('/Payment', { state: { data: CheckIn, hotelData: HotelData} });
        }
    }
    return(
        
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
        
    )
}

export default Dates;*/