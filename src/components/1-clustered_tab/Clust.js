import './clust.css'
import { useState } from 'react'
import { GrSubtractCircle, GrAddCircle } from 'react-icons/gr'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import dateFormat from "dateformat"

function Clust({ clust }) {
    const [showMore, setShowMore] = useState(false)
    const currentSenctences = showMore ? clust?.sentences : clust?.sentences?.slice(0, 4)

    return (
        <div className="clst-wrapper" style={clust?.accepted ? null : {opacity: .5}}>
            <div className="clst-title-wrapper">
                <h1>{clust?.title}</h1>
                {clust?.accepted ? <GrSubtractCircle id='clst-title-accepted'/> : <GrAddCircle id='clst-title-not-accepted'/>}
            </div>

            <div className="clst-sentence-container">
                {currentSenctences.map(sentc => (
                    <Sentence key={sentc?.id} sentc={sentc}/>
                ))}
            </div>

            <div className={showMore ? "clst-dropdown-wrapper open" : "clst-dropdown-wrapper"}>
                <div className="clst-dropdown-box" onClick={() => setShowMore(!showMore)}>
                    {showMore ? <p>Show less</p> : <p>Show all</p>}
                    {showMore ? <BiChevronUp id='clst-dropdown-click' /> : <BiChevronDown id='clst-dropdown-click' />}
                </div>
            </div>

        </div>
    )
}

function Sentence({ sentc }) {
    const sentcText = sentc?.sentence_text
    const firstHalf = sentcText.match(/(^.*?[.!?,])|(^.{0,65}([^\s]+))/g)
    const secondHalf = sentcText.replaceAll(firstHalf, '')
    return (
        <div className="clst-sentence-wrapper">
            <p><span>{firstHalf}</span>{secondHalf}</p>
            <div className="clst-sentence-end-box">
                <h4>{dateFormat(sentc?.feedback_date, "mmmm dd, yyyy")}</h4>
                <div>
                    <GrSubtractCircle id='clst-sentence-accepted'/>
                </div>
            </div>
        </div>
    )
}


export default Clust