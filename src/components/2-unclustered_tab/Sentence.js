import './sentence.css'
import { Fragment, useState } from 'react'
import { GrAddCircle } from 'react-icons/gr'
import dateFormat from "dateformat"
import Modal from './Modal'

function Sentence({ sentc }) {
    const [open, setOpen] = useState(false)

    const sentcText = sentc?.sentence_text
    const firstHalf = sentcText.match(/(^.*?[.!?,])|(^.{0,65}([^\s]+))/g)
    const secondHalf = sentcText.replaceAll(firstHalf, '')

    return (
        <Fragment>
            <Modal open={open} setOpen={setOpen}/>
            <div className="unclst-sentc-wrapper">
                <div className="unclst-sentc-left-box">
                    <div className="unclst-sentc-accepted-box">
                        <GrAddCircle id='unclst-sentc-accepted' onClick={() => setOpen(true)} />
                    </div>
                    <p><span>{firstHalf}</span>{secondHalf}</p>
                </div>
                <h4>{dateFormat(sentc?.feedback_date, "mmmm dd, yyyy")}</h4>
            </div>
        </Fragment>
    )
}

export default Sentence