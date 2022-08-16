import './sentence.css'
import { Fragment } from 'react'
import { GrAddCircle } from 'react-icons/gr'
import dateFormat from "dateformat"

function Sentence({ setOpen, curSentc, setModalSentc }) {

    const sentcText = curSentc?.sentence_text
    const firstHalf = sentcText.match(/(^.*?[.!?,-])|(^.{0,65}([^\s]+))/g)
    const secondHalf = sentcText.replaceAll(firstHalf, '')

    function handleOpenModal(currentSentence) {
        setOpen(true)
        setModalSentc(currentSentence)
    }

    return (
        <Fragment>
            <div className="unclst-sentc-wrapper">
                <div className="unclst-sentc-left-box">
                    <div className="unclst-sentc-accepted-box">
                        <GrAddCircle id='unclst-sentc-accepted' onClick={() => handleOpenModal(curSentc)} />
                    </div>
                    <p><span>{firstHalf}</span>{secondHalf}</p>
                </div>
                <h4>{dateFormat(curSentc?.feedback_date, "mmmm dd, yyyy")}</h4>
            </div>
        </Fragment>
    )
}

export default Sentence