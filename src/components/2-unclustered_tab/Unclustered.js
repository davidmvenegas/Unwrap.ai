import './unclustered.css'
import { GET_ALL_UNSTRUCTURED_SENTENCES, GET_ALL_CLUSTERS } from "../../graphql/Queries"
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { useState, useEffect } from 'react'
import { useQuery } from "@apollo/client"
import Navbar from '../0-navbar/Navbar'
import Sentence from './Sentence'
import Modal from './Modal'

function Unclustered() {
    const [sentcs, setSentcs] = useState()
    const [clusts, setClusts] = useState()
    const [search, setSearch] = useState('')
    const [offset, setOffset] = useState(0)
    const [open, setOpen] = useState(false)
    const [modalSentc, setModalSentc] = useState()

    function useQueryMultiple () {
        const res1 = useQuery(GET_ALL_UNSTRUCTURED_SENTENCES, {
            variables: { 
                offset: offset,
                keyword: search
            }
        })
        const res2 = useQuery(GET_ALL_CLUSTERS)
        return [res1, res2]
    }

    const [
        { loading: sentcsLoading, data: sentcsData, refetch: sentcsRefetch },
        { data: clustsData }
    ] = useQueryMultiple()

    const allClusts = clustsData?.getAllClusters
    const allSentcs = sentcsData?.getAllUnstructuredSentences

    const total = allSentcs && allSentcs[0]?.total
    const totalPages = parseInt(total / 25) + 1
    const currentPage = parseInt(offset / 25) + 1
    const endOfResults = totalPages - currentPage < 5 && total > 150
    const startOfResults = currentPage <= 5
    const lastPageOffset = total - total % 25

    function searchDatabase(keyword) {
        setSearch(keyword)
        .then(setOffset(0))
        .then(() => sentcsRefetch())
    }

    useEffect(() => {
        setSentcs(allSentcs)
        setClusts(allClusts)
    }, [allClusts, allSentcs])

    return (
        <div className="unclst-container" style={open ? {overflow: 'hidden'} : null}>
            <Navbar/>
            <div className='unclst-wrapper'>
                <div className="unclst-header">
                    <h1>Unclustered Sentences</h1>
                    <div className="unclst-header-box">
                        <div className="unclst-header-search-box">
                            <input type="text" placeholder='Search' onChange={(e) => searchDatabase(e.target.value)} />
                        </div>
                        {!sentcsLoading && <div className="unclst-header-total-box">
                            <h2>Page {currentPage} of {totalPages || 1}</h2>
                            <p>({total || 0} results)</p>
                        </div>}
                    </div>
                </div>
                <div className="unclst-body">
                    <Modal open={open} setOpen={setOpen} clusts={clusts} modalSentc={modalSentc} sentcsRefetch={sentcsRefetch}/>
                    {sentcsLoading ?
                        <div id="loading-modal-clust"></div>
                        :
                        <>{sentcs?.length > 0 ? sentcs?.map(curSentc => (
                            <Sentence key={curSentc.id} curSentc={curSentc} setOpen={setOpen} setModalSentc={setModalSentc}/>
                        )) :
                            <p id='no-data-to-display'>No data to display</p>
                        }</>
                    }
                </div>
                {sentcsLoading || sentcs?.length === 0
                    ? null :
                    <div className="unclst-pagination-wrapper">
                        <ul className="pagination-box">
                            <BiChevronLeft className='pagination-btn' onClick={() => offset >= 25 && setOffset(offset - 25)}/>
                            <li onClick={() => setOffset(!startOfResults ? 0 : offset)} className={currentPage === 1 || startOfResults ? "pagination-number active" : "pagination-number"}> {startOfResults ? currentPage : 1}</li>
                            {!startOfResults && <li className="pagination-dots">...</li>}
                            {total > 25 && <li onClick={() => setOffset(startOfResults ? offset + 25 : !endOfResults ? offset : lastPageOffset - 125)} className={!startOfResults && !endOfResults ? "pagination-number active" : "pagination-number"}>{endOfResults ? totalPages - 5 : startOfResults ? currentPage + 1 : currentPage}</li>}
                            {total > 50 && <li onClick={() => setOffset(startOfResults ? offset + 50 : !endOfResults ? offset + 25 : lastPageOffset - 100)} className={totalPages - currentPage === 4 ? "pagination-number active" : "pagination-number"}>{endOfResults ? totalPages - 4 : startOfResults ? currentPage + 2 : currentPage + 1}</li>}
                            {total > 75 && <li onClick={() => setOffset(startOfResults ? offset + 75 : !endOfResults ? offset + 50 : lastPageOffset - 75)} className={totalPages - currentPage === 3 ? "pagination-number active" : "pagination-number"}>{endOfResults ? totalPages - 3 : startOfResults ? currentPage + 3 : currentPage + 2}</li>}
                            {total > 100 && <li onClick={() => setOffset(startOfResults ? offset + 100 : !endOfResults ? offset + 75 : lastPageOffset - 50)} className={totalPages - currentPage === 2 ? "pagination-number active" : "pagination-number"}>{endOfResults ? totalPages - 2 : startOfResults ? currentPage + 4 : currentPage + 3}</li>}
                            {total > 125 && <li onClick={() => setOffset(startOfResults ? offset + 125 : !endOfResults ? offset + 100 : lastPageOffset - 25)} className={totalPages - currentPage === 1 ? "pagination-number active" : "pagination-number"}>{endOfResults ? totalPages - 1 : startOfResults ? currentPage + 5 : currentPage + 4}</li>}
                            {totalPages - currentPage > 5 && <li className="pagination-dots">...</li>}
                            {total > 150 && <li onClick={() => setOffset(lastPageOffset)} className={currentPage === totalPages ? "pagination-number active" : "pagination-number"}> {totalPages}</li>}
                            <BiChevronRight className='pagination-btn' onClick={() => offset <= total - 25 && setOffset(offset + 25)}/>
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}

export default Unclustered