import React from 'react';
import ControllerScreen5 from './ControllerScreen5';
import './StyleScreen5.scss';


export default class ViewScreen5 extends React.Component {
    render(){
        return(
            <div id="screenID5" className="sectionFull next-activeSlide">
            <div className="background-p5">
                <div className="gradient h-100 w-100">
                    <div className="box-container_p5 d-none d-lg-flex">
                        <h1 className="title-left-block_p5 h1">
                            Вода минусинских источников 
                            <span className="blu_green">пользуется популярностью</span><br />
                            у местных жителей<br /> и путешественников
                        </h1>
                        <div className="left-block_p5">
                            <h2 className="tourists_p5 h2">
                                <p className="tourists-title_p5">Туристы специально заезжают <br />в “Малую Минусу”, чтобы<br /> набрать воды</p>
                            </h2>
                        </div>
                    </div>
                    <div className="box-container-mobile_p5 d-lg-none d-flex">
                        <h1 className="title-left-block_m_p5 h1">
                            Вода минусинских источников 
                            <span className="blu_green">пользуется популярностью</span><br />
                            у местных жителей<br /> и путешественников
                        </h1>
                        <h2 className="tourists-title_m_p5 h2 mb-1">
                            Туристы специально<br / >заезжают в “Малую Минусу”,<br /> чтобы набрать воды  
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}