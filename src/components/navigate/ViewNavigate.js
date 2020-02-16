import React from 'react';
import ControllerNavigate from './ControllerNavigate';
import './StyleNavigate.scss';
const controller = new ControllerNavigate;

export default class ViewScreen1 extends React.Component {
    render(){
        return(
            <>
                <div className="navigationField d-none d-md-flex">
                    <div className="navigationButton">
                        <span id="inStartLayout" className="inStartLayout mb-3 cursor-pointer">в начало</span>
                        <span id="prevLayout" className="prevLayout mb-3 cursor-pointer">
                            <svg width="34" height="16" viewBox="0 0 34 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32.2637 14.2565L17.2637 2.86548L2.26367 14.2565" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                            </svg>  
                        </span>
                        <div id="prevNumber" className="prevNumber mb-3 cursor-pointer">
                            <div className="spanNumberMini"></div>
                            <div className="spanNumber text-right">0<span id="pre_desktopNumberSlide">0</span></div>
                            <div className="spanNumber">
                                <svg width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="19.9561" y1="1.75964" x2="1.90533" y2="1.75964" stroke="#ADADAD" strokeWidth="3" strokeLinecap="round"/>
                                </svg>
                            </div>
                        </div>
                        <div id="NOW_Number" className="NOW_Number cursor-pointer">
                            <div className="spanNumberMini"></div>
                            <div className="spanNumber text-right">0<span id="desktopNumberSlide">1</span>/08</div>
                            <div className="spanNumber">
                                <svg width="39" height="4" viewBox="0 0 39 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="37.1675" y1="2.25659" x2="1.90528" y2="2.25659" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                                </svg>    
                            </div>
                        </div>
                        <div id="nextNumber" className="nextNumber mt-3 cursor-pointer">
                            <div className="spanNumberMini"></div>
                            <div className="spanNumber text-right">0<span id="next_desktopNumberSlide">2</span></div>
                            <div className="spanNumber">
                                <svg width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="19.9561" y1="1.75964" x2="1.90533" y2="1.75964" stroke="#ADADAD" strokeWidth="3" strokeLinecap="round"/>
                                </svg>
                            </div>
                        </div>
                        <span id="nextLayout" className="nextLayout mt-3 cursor-pointer">
                            <svg width="34" height="16" viewBox="0 0 34 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32.2637 2.25659L17.2637 13.6476L2.26367 2.25659" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                            </svg>
                        </span>
                        <span id="inEndLayout" className="inEndLayout mt-3 cursor-pointer">в конец</span>
                    </div>
                </div>
                
                <div className="navigationField_mob d-md-none d-flex">
                    <div className="navigationButton_mob">
                        <span id="inStartLayout_mob" className="inStartLayout_mob mr-3">в начало</span>
                        <span id="prevLayout_mob" className="prevLayout_mob mr-3">
                            <svg width="15" height="34" viewBox="0 0 15 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.4997 31.7881L2.10864 16.7881L13.4997 1.78809" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                            </svg>                    
                        </span>
                        <span id="prevNumber_mob" className="prevNumber_mob mr-3">0<span id="pre_mobileNumberSlide">0</span></span>
                        <span id="NOW_Number_mob" className="NOW_Number_mob">0<span id="mobileNumberSlide">1</span>/08</span>
                        <span id="nextNumber_mob" className="nextNumber_mob ml-3">0<span id="next_mobileNumberSlide">2</span></span>
                        <span id="nextLayout_mob" className="nextLayout_mob ml-3">
                            <svg width="15" height="34" viewBox="0 0 15 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.49981 31.7881L12.8909 16.7881L1.49981 1.78809" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                            </svg>                
                        </span>
                        <span id="inEndLayout_mob" className="inEndLayout_mob ml-3">в конец</span>
                    </div>
                </div>
            </>
        );
    }
}