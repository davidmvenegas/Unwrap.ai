import './clustered.css'
import { GET_ALL_CLUSTERS } from "../../graphql/Queries"
import { useState, useEffect } from 'react'
import { useQuery } from "@apollo/client"
import Navbar from '../0-navbar/Navbar'
import Clust from './Clust'

function Clustered() {
    const { loading, data } = useQuery(GET_ALL_CLUSTERS)
    const [clusts, setClusts] = useState()
    const [search, setSearch] = useState('')

    const allClusts = data?.getAllClusters
    const acceptedClusts = data?.getAllClusters.filter(clust => clust.accepted === 1)
    const notAcceptedClusts = data?.getAllClusters.filter(clust => clust.accepted === 0)

    const filteredClusts = clusts?.filter(clst => clst?.title?.toLowerCase().includes(search.toLowerCase()))

    // eslint-disable-next-line
    useEffect(() => setClusts(allClusts), [])

    function handleSelection(e) {
    switch (e.target.selectedIndex) {
        case 0:
            setClusts(allClusts)
            break;
        case 1:
            setClusts(acceptedClusts)
            break;
        case 2:
            setClusts(notAcceptedClusts)
            break;
        default:
            break;
        }
    }

    return (
        <div>
            <Navbar/>
            <div className='clst-container'>
                <div className="clst-header">
                    <h1>Feedback Clusters</h1>
                    <div className="clst-header-box">
                        <div className="clst-header-search-box">
                            <input type="text" placeholder='Search' onChange={(e) => setSearch(e.target.value)} />
                        </div>
                        <div className="clst-header-fltr-box">
                            <h2>Sort By</h2>
                            <select id='fltr-select-form' className="fltr-select-box" onChange={handleSelection}>
                                <option id="fltr-select-option" value="all">All</option>
                                <option id="fltr-select-option" value="accepted">Accepted</option>
                                <option id="fltr-select-option" value="unaccepted">Unaccepted</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="clst-body">
                    {loading ?
                        <div id="loading-modal-clust"></div>
                        :
                        <>{filteredClusts?.length > 0 ? filteredClusts?.map(clust => (
                            <Clust key={clust.id} clust={clust} />
                        )) :
                            <p id='no-data-to-display'>No data to display</p>
                        }</>
                    }
                </div>
            </div>
        </div>
    )
}

export default Clustered