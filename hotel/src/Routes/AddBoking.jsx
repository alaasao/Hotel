import React, {useState} from "react";

const AddBoking = () => {

    const [modal, setModal] = useState(false)

    const toogleModal = () => {
      setModal(!modal)
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
                        <input
                            type="text"
                            placeholder="Start Date"
                            onFocus={(e) => (e.currentTarget.type = 'date')}
                            onBlur={(e) => (e.currentTarget.type = 'text')}
                        />
                        <input
                        type="text"
                        placeholder="Start Date"
                        onFocus={(e) => (e.currentTarget.type = 'date')}
                        onBlur={(e) => (e.currentTarget.type = 'text')}
                        />
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