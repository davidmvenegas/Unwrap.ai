import './modal.css'
import { ADD_SENTENCE_CLUSTER_ID } from '../../graphql/Mutations'
import { useMutation } from '@apollo/client'
import { ImCross } from 'react-icons/im'
import { useState } from 'react'

function Modal({open, setOpen, sentcId, sentcText, clusts, sentcs, setSentcs, total, setTotal}) {
    const [search, setSearch] = useState('')
    const filteredClusts = clusts?.filter(clst => clst.title.toLowerCase().includes(search.toLowerCase()))

    return (
        <div style={open ? null : {display: "none"}} className="modal-background">
            <div className="modal-container">
                <ImCross id="close-modal" onClick={() => setOpen(false)}/>

                <div className="modal-content">
                    <h1>Add sentence to cluster</h1>
                    <div className="modal-sentc-wrapper">
                        <p>{sentcText}</p>
                    </div>
                    <div className="modal-clst-wrapper">
                        <div className="modal-clst-search-wrapper">
                            <input type="text" placeholder='Search' onChange={(e) => setSearch(e.target.value)} />
                        </div>
                        <div className="modal-clsts">
                            {filteredClusts?.map(clst => (
                                <ModalCluster key={clst.id} clst={clst} sentcId={sentcId} setOpen={setOpen} sentcs={sentcs} setSentcs={setSentcs} total={total} setTotal={setTotal}/>
                            ))}
                        </div>
                    </div>
                </div>

                {false && <div id="loading-modal"></div>}
            </div>
        </div>
    )
}


function ModalCluster({clst, sentcId, setOpen, sentcs, setSentcs, total, setTotal}) {
    const [ addSentenceClusterId ] = useMutation(ADD_SENTENCE_CLUSTER_ID)

    async function handleAddSentenceClusterId() {
        await addSentenceClusterId({
            variables: {
                sentence_id: sentcId,
                cluster_id: clst?.id
            },
        })
        .then(setSentcs(sentcs?.filter(sent => sent?.id !== sentcId)))
        .then(setTotal(total -= 1))
        .then(setOpen(false))
    }

    return (
        <div className='modal-clst'>
            <div className="modal-clst-text-box">
                <h2>{clst.title}</h2>
            </div>
            <div className="modal-add-clst-box">
                <button onClick={() => handleAddSentenceClusterId()}>Add</button>
            </div>
        </div>
    )
}

export default Modal