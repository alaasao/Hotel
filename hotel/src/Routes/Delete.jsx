import React, {useState} from "react";

const Delete = () => {

    const [delModel, setDelModel] = useState(false)
    const DeleteModal = () => {
        setDelModel(!delModel)
    }

    return(
        <div className="delete">
            <div className="overlay"></div>
            <div className="content">
                <h3>Are You Sure?</h3>
                <p>Please confirm this operation before we start</p>
                <form action="">
                    <div className="buttons">
                        <button type="submit">Confirm</button>
                        <button onClick={DeleteModal}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Delete