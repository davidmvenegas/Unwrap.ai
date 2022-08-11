import './unclustered.css'
import Navbar from '../0-navbar/Navbar'

function Unclustered() {
    return (
        <div>
            <Navbar/>
            <div className='unclst-wrapper'>
                <div className="unclst-header">
                    <h1>Unclustered Sentences</h1>
                    <div className="unclst-header-box">
                        <div className="unclst-header-search-box">
                            <input type="text" placeholder='Search' />
                        </div>
                    </div>
                </div>
                <div className="unclst-body"></div>
            </div>
        </div>
    )
}

export default Unclustered