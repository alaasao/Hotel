import React, {useState} from "react";

const AddBoking = () => {

    const [modal, setModal] = useState(false)
    const [icon, setIcon] = useState(true)
    const toogleModal = () => {
      setModal(!modal)
    }
    const hideIcon = () => {
        setIcon(!icon)
    }
    
    return(
        <div className="addBooking">
            <div className="overlay"></div>
            <div className="content">
                <h3>Add Booking</h3>
                <form action="">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Room" />
                    <div className="date">
                        <div>                           
                            <input
                                type="text"
                                placeholder="Start Date"
                                onFocus={(e) => { hideIcon(); e.currentTarget.type = 'date'; }}
                                onBlur={(e) => (e.currentTarget.type = 'text')}
                            />
                            {icon && <i class="fa-solid fa-calendar"></i>}
                        </div>
                        <div>                      
                            <input
                                type="text"
                                placeholder="End Date"
                                onFocus={(e) => { hideIcon(); e.currentTarget.type = 'date'; }}
                                onBlur={(e) => (e.currentTarget.type = 'text')}
                            />
                            {icon && <i class="fa-solid fa-calendar"></i>}
                        </div>
                    </div>
                    <div className="buttons">
                        <button type="submit">Confirm</button>
                        <button onClick={toogleModal}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
} 

export default AddBoking