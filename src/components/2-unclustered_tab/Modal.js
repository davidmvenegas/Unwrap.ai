import './modal.css'
import { ImCross } from 'react-icons/im'

function Modal({open, setOpen}) {
    return (
        <div style={open ? null : {display: "none"}} className="modal-background">
            <div className="modal-container">
                <ImCross id="close-modal" onClick={() => setOpen(false)}/>


                <div className="modal-content">
                    <h1>Add sentence to cluster</h1>
                    <div className="modal-sentc-wrapper">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere magnam quod architecto quam quibusdam officiis dicta assumenda iste maiores odio?</p>
                    </div>
                    <div className="modal-clst-wrapper">
                        <div className="modal-clst-search-wrapper">
                            <input type="text" placeholder='Search' />
                        </div>
                        <div className="modal-clsts">
                            <ModalCluster/>
                            <ModalCluster/>
                            <ModalCluster/>
                            <ModalCluster/>
                            <ModalCluster/>
                            <ModalCluster/>
                            <ModalCluster/>
                            <ModalCluster/>
                            <ModalCluster/>
                            <ModalCluster/>
                            <ModalCluster/>
                            <ModalCluster/>
                        </div>
                    </div>
                </div>


                {false && <div id="loading-modal"></div>}
            </div>
        </div>
    )
}


function ModalCluster() {
    return (
        <div className='modal-clst'>
            <div className="modal-clst-text-box">
                <h2>If I checked my bag separately (vs through the flight check in) it would have been $30</h2>
            </div>
            <div className="modal-add-clst-box">
                <button>Add</button>
            </div>
        </div>
    )
}

export default Modal