import './modal.css'
import { ADD_SENTENCE_CLUSTER_ID } from '../../graphql/Mutations'
import { useMutation } from '@apollo/client'
import { ImCross } from 'react-icons/im'
import { useState } from 'react'

function Modal({open, setOpen, clusts, modalSentc, sentcsRefetch}) {
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)
    const filteredClusts = clusts?.filter(clst => clst.title.toLowerCase().includes(search.toLowerCase()))

    const [ addSentenceClusterId ] = useMutation(ADD_SENTENCE_CLUSTER_ID)

    async function handleAddSentenceClusterId(clusterId) {
        setLoading(true)
        await addSentenceClusterId({
            variables: {
                sentence_id: modalSentc.id,
                cluster_id: clusterId
            },
        })
        .then(() => sentcsRefetch())
        .then(setTimeout(() => {
            setLoading(false)
            setOpen(false)
        }, 1250))
    }

    return (
        <div style={open ? null : {display: "none"}} className="modal-background">
            <div className="modal-container">
                <ImCross id="close-modal" onClick={() => setOpen(false)}/>

                <div className="modal-content" style={loading ? {opacity: ".25"} : null}>
                    <h1>Add sentence to cluster</h1>
                    <div className="modal-sentc-wrapper">
                        <p>{modalSentc?.sentence_text}</p>
                    </div>
                    <div className="modal-clst-wrapper">
                        <div className="modal-clst-search-wrapper">
                            <input type="text" placeholder='Search' onChange={(e) => setSearch(e.target.value)} />
                        </div>
                        <div className="modal-clsts">
                            {filteredClusts?.map(curClst => (
                                <ModalCluster key={curClst?.id} curClst={curClst} handleAddSentenceClusterId={handleAddSentenceClusterId}/>
                            ))}
                        </div>
                    </div>
                </div>

                {loading && <div id="loading-modal"></div>}
            </div>
        </div>
    )
}

function ModalCluster({curClst, handleAddSentenceClusterId}) {
    return (
        <div className='modal-clst'>
            <div className="modal-clst-text-box">
                <h2>{curClst?.title}</h2>
            </div>
            <div className="modal-add-clst-box">
                <button onClick={() => handleAddSentenceClusterId(curClst.id)}>Add</button>
            </div>
        </div>
    )
}

export default Modal