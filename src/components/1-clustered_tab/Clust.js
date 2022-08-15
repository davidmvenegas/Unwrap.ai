import './clust.css'
import { useState } from 'react'
import { REMOVE_SENTENCE_CLUSTER_ID, UPDATE_CLUSTER_ACCEPTED } from '../../graphql/Mutations'
import { GrSubtractCircle, GrAddCircle } from 'react-icons/gr'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import { useMutation } from '@apollo/client'
import dateFormat from "dateformat"

function Clust({ clust }) {
    const [showMore, setShowMore] = useState(false)
    const [accepted, setAccepted] = useState(clust.accepted)
    const [sentences, setSentences] = useState(clust.sentences)

    // const sortedSentences = sentences?.sort((a, b) => a.order_within_feedback_entry - b.order_within_feedback_entry)
    // const currentSenctences = showMore ? sortedSentences : sortedSentences?.slice(0, 4)
    const currentSenctences = sentences

    const [ updateClusterAccepted ] = useMutation(UPDATE_CLUSTER_ACCEPTED)

    async function handleUpdateCluster(accept) {
        await updateClusterAccepted({
            variables: {
                cluster_id: clust?.id,
                accepted: accept
            },
        }).then(setAccepted(accept))
    }

    return (
        <div className="clst-wrapper" style={accepted ? null : {opacity: .5}}>
            <div className="clst-title-wrapper">
                <h1>{clust?.title}</h1>
                {accepted
                    ?
                <GrSubtractCircle id='clst-title-accepted' onClick={() => handleUpdateCluster(0)} />
                    :
                <GrAddCircle id='clst-title-not-accepted' onClick={() => handleUpdateCluster(1)}/>}
            </div>

            <div className="clst-sentence-container">
                {currentSenctences?.map(sentc => (
                    <Sentence key={sentc?.id} sentc={sentc} clustId={clust?.id} sentences={sentences} setSentences={setSentences}/>
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

function Sentence({ sentc, clustId, sentences, setSentences }) {
    const [ removeSentenceClusterId ] = useMutation(REMOVE_SENTENCE_CLUSTER_ID)

    const sentcText = sentc?.sentence_text
    const firstHalf = sentcText.match(/(^.*?[.!?,])|(^.{0,65}([^\s]+))/g)
    const secondHalf = sentcText.replaceAll(firstHalf, '')

    async function handleRemoveSentenceClusterId() {
        await removeSentenceClusterId({
            variables: {
                sentence_id: sentc?.id,
                cluster_id: clustId
            },
        }).then(setSentences(sentences.filter(sent => sent.id !== sentc.id)))
    }

    return (
        <div className="clst-sentence-wrapper">
            <p><span>{firstHalf}</span>{secondHalf}</p>
            <div className="clst-sentence-end-box">
                <h4>{dateFormat(sentc?.feedback_date, "mmmm dd, yyyy")}</h4>
                <div>
                    <GrSubtractCircle id='clst-sentence-accepted' onClick={() => handleRemoveSentenceClusterId()} />
                </div>
            </div>
        </div>
    )
}


export default Clust