import './clust.css'
import { BiChevronDown } from 'react-icons/bi'
import { GrSubtractCircle } from 'react-icons/gr'

function Clust() {
    return (
        <div className="clst-wrapper">
            <div className="clst-title-wrapper">
                <h1>"App is buggy and crashes occasionally."</h1>
                <GrSubtractCircle id='clst-title-accepted'/>
            </div>
            <div className="clst-sentence-wrapper">
                <p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> Atque dicta dolores dolor necessitatibus asperiores nihil est doloremque ad, ea cupiditate. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum ad laborum deserunt possimus perferendis commodi molestiae quod corporis ducimus aut.</p>
                <div className="clst-sentence-end-box">
                    <h4>June 22, 2022</h4>
                    <GrSubtractCircle id='clst-sentence-accepted'/>
                </div>
            </div>
            <div className="clst-sentence-wrapper">
                <p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> Atque dicta dolores dolor necessitatibus asperiores nihil est doloremque ad, ea cupiditate.</p>
                <div className="clst-sentence-end-box">
                    <h4>June 22, 2022</h4>
                    <GrSubtractCircle id='clst-sentence-accepted'/>
                </div>
            </div>
            <div className="clst-sentence-wrapper">
                <p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> Atque dicta dolores dolor necessitatibus asperiores nihil est doloremque ad, ea cupiditate.</p>
                <div className="clst-sentence-end-box">
                    <h4>June 22, 2022</h4>
                    <GrSubtractCircle id='clst-sentence-accepted'/>
                </div>
            </div>
            <div className="clst-sentence-wrapper">
                <p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> Atque dicta dolores dolor necessitatibus asperiores nihil est doloremque ad, ea cupiditate.</p>
                <div className="clst-sentence-end-box">
                    <h4>June 22, 2022</h4>
                    <GrSubtractCircle id='clst-sentence-accepted'/>
                </div>
            </div>

            <div className="clst-dropdown-wrapper">
                <div className="clst-dropdown-box">
                    <p>Show all</p>
                    <BiChevronDown id='clst-dropdown-click'/>
                </div>
            </div>

        </div>
    )
}

export default Clust