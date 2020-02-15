import React from 'react';
// import ControllerScreen1 from './ControllerScreen1';
import './StyleScreen1.scss';


export default class ViewScreen1 extends React.Component {
    render(){
        return(
            <div id="screenID1" className="sectionFull activeSlide">
            <div className="p1_layout_1">
                <div className="response_screen">
                    <div className="p1-headerBlock">
                        <h1 className="font-mavenPro color-white font-weight-bold p1-h1">Vulcanica</h1>
                    </div>
                    <div className="color-white p1-description-items">
                        <p><span className="d-lg-none">-</span> Вода из подземного пресного моря</p>
                        <p><span className="d-lg-none">-</span> Баланс<br className="d-md-none"/> минералов</p>
                        <p><span className="d-lg-none">-</span> Высшая категория качества</p>
                    </div>
                    <div className="p1-mobileScrollEffectBlock d-xl-none">
                        <svg width="60" height="29" viewBox="0 0 60 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1.00439" y="27.6724" width="25.7806" height="57.1721" rx="12.8903" transform="rotate(-90 1.00439 27.6724)" stroke="white" strokeWidth="2"/>
                        </svg>
                        <svg id="p1_animationEffectSfera" width="25" height="25" viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="8.73486" y="20" width="13.3867" height="13.3867" rx="6.69333" transform="rotate(-90 8.73486 21.4751)" fill="white" stroke="white" strokeWidth="2"/>
                        </svg>
                        <svg id="p1_SVGstr" width="12" height="25" viewBox="0 0 12 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.12193 2.36399L10.0332 12.7817L2.12193 23.1995" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                    </div>
                    <div className="p1-positionDesktopScrollEffect">
                        <div className="p1-desktopScrollEffectBlock d-none d-xl-flex">
    
                            <svg width="41" height="66" viewBox="0 0 41 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="17.7549" y="18.6968" width="6" height="13" rx="3" fill="white" stroke="white" strokeWidth="2"/>
                                <rect x="1.75488" y="1.19678" width="38" height="63" rx="19" stroke="white" strokeWidth="2"/>
                                <rect x="19.7549" y="7.54297" width="2" height="7" fill="white"/>
                            </svg>    
                            <svg className="p1-desktopScrollEffectBlockScrollEffect" width="34" height="16" viewBox="0 0 34 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M31.7549 2.19683L16.7549 13.5879L1.75488 2.19683" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                            </svg>
        
                        </div>
                    </div>
                </div>
                <div className="p1-curvesAndBottle">
                    <div className="p1-bottle-position">
                        <div className="p1-bottleIMG"></div>
                    </div>
                    <div className="p1-water-position">
                        <div className="p1-waterIMG"></div>
                    </div>  
                </div>
            </div>
        </div>
        );
    }
}