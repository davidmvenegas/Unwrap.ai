import './sentence.css'
import { Fragment, useState } from 'react'
import { GrAddCircle } from 'react-icons/gr'
import Modal from './Modal'

function Sentence() {
    const [open, setOpen] = useState(false)

    return (
        <Fragment>
            <Modal open={open} setOpen={setOpen}/>
            <div className="unclst-sentc-wrapper">
                <div className="unclst-sentc-left-box">
                    <div className="unclst-sentc-accepted-box">
                        <GrAddCircle id='unclst-sentc-accepted' onClick={() => setOpen(true)} />
                    </div>
                    <p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> Atque dicta dolores dolor necessitatibus asperiores nihil est doloremque ad, ea cupiditate.</p>
                </div>
                <h4>June 22, 2022</h4>
            </div>
        </Fragment>
    )
}

export default Sentence