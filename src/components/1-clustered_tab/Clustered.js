import './clustered.css'
import Navbar from '../0-navbar/Navbar'
import Clust from './Clust'

function Clustered() {

    function handleSelection(e) {
    switch (e.target.selectedIndex) {
        case 0:
            console.log("All")
            break;
        case 1:
            console.log("Accepted")
            break;
        case 2:
            console.log("Unaccepted")
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
                            <input type="text" placeholder='Search' />
                        </div>
                        <div className="clst-header-fltr-box">
                            <h2>Sort By</h2>
                            <select className="fltr-select-box" onChange={handleSelection}>
                                <option id="fltr-select-option" value="all">All</option>
                                <option id="fltr-select-option" value="accepted">Accepted</option>
                                <option id="fltr-select-option" value="unaccepted">Unaccepted</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="clst-body">

                    <Clust/>

                </div>
            </div>
        </div>
    )
}

export default Clustered