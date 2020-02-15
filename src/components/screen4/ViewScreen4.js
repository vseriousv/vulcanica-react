import React from 'react';
import ControllerScreen4 from './ControllerScreen4';
import './StyleScreen4.scss';


export default class ViewScreen4 extends React.Component {
    render(){
        return(
            <div id="screenID4" className="sectionFull next-activeSlide">
                <div className="background-p4">
                    <div className="container-fluid box-container d-none d-lg-flex">
                        <div className="gradient_p4"></div>
                        <h1 className="title_p4 h1 d-flex">
                            <span className="blu_green">Сокровище <br />сибирских гор</span>
                        </h1>
                        <h2 className="subtitle_p4 h2 d-flex">
                            <span> Разливаем воду в Сибирской <br />
                                тайге в окружении Саянских гор<br /> 
                                вдали от цивилизации</span>  
                        </h2>
                        <div className="row box_map">
                            <div className="col-4 distance">
                                <p className="distance_title my-0">
                                    <b>450 км</b>
                                </p>
                                <p className="h2 distance_subtitle my-0">
                                    До ближайшего<br /> большого<br /> города
                                </p>
                            </div>
                            <div className="col-8 map">
                                <img src="../img/map_p4.svg" alt="Карта источника" />
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid box-container-mobile d-lg-none d-flex">
                        <div className="gradient_m_p4"></div>
                        <h1 className="title_p4_m h1 d-flex">
                            <span className="blu_green">Сокровище <br />сибирских гор</span>
                        </h1>
                        <h2 className="subtitle_p4_m h2 d-flex">
                            Разливаем воду в Сибирской <br />тайге в окружении Саянских гор<br /> вдали от цивилизации  
                        </h2>
                        <div className="row box_map_m">
                            <div className="col-8 order-last order-sm-first col-sm-4 col-md-4 distance_m">
                                <p className="distance_title_m my-0">
                                    <b>450 км</b>
                                </p>
                                <p className="h2 distance_subtitle_m my-0">
                                    До ближайшего<br /> большого<br /> города
                                </p>
                            </div>
                            <div className="col-6 order-first order-sm-last col-sm-8 col-md-8 map_m">
                                <img src="../img/map_p4.svg" alt="Карта источника" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}