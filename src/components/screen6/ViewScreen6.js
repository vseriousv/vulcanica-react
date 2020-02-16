import React from 'react';
import ControllerScreen6 from './ControllerScreen6';
import './StyleScreen6.scss';

const controller = new ControllerScreen6;

export default class ViewScreen6 extends React.Component {
    componentDidMount(event){
        const screenID6 = document.getElementById("screenID6");
        screenID6.addEventListener('touchend', (event) => {
            this.controllerDoing(event)
        });
    }

    componentWillUnmount(event){
        const screenID6 = document.getElementById("screenID6");
        screenID6.addEventListener('touchend', (event) => {
            this.controllerDoing(event)
        });
    }
    controllerDoing(event){
        this.props.nextScreen();
    }
    render(){
        return(
            <div id="screenID6" className="sectionFull activeScreen">
                <div className="background-p6">
                    <div className="p6-container-spec">
                        <div className="p6-block1">
                            <h1 className="p6-h1 p6-title-left-block color-white">Заслуженный геолог <br className="d-xl-none"/> России<br className="d-none d-xl-block"/> рассказал всю<br className="d-xl-none"/>
                                <span className="p6-grad-blue-green"> правду о воде</span></h1>
                        </div>
                        <div className="p6-imgAndText">
                            <div className="p6-img-scientistPosition">
                                <div className="p6-img-scientist"></div>
                            </div>
                            <div className="p6-imgText">
                                <p className="p6-headImgText d-xl-none">«Vulcanica добывается в особо благоприятных экологических условиях»</p>
                                <p className="p6-title-block"><b className="p6-text-bold-header">А.С. Кривошеев</b>
                                    <br />заслуженный геолог РФ </p>    
                            </div>
                        </div>
                        <div className="p6-legacytext">
                            <h2 className="p6-header78">Vulcanica добывается в особо <br />благоприятных экологических условиях</h2>
                            <p className="p6-textWater-scientist color-white">Скважина вскрывает водоносные толщи Маломинусинского месторождения подземных вод. 
                                Этот артезианский бассейн образовался в далекий нижнекаменноугольный геологический период, длившийся 353-328лет назад. 
                                Тогда на рассматриваемой территории Минусинской котловины в условиях теплого влажного климата происходило накопление пресных подземных вод.    
                            </p>
                            <p className="p6-textWater-scientist color-white">
                                Сегодня область питания нижнекаменноугольного водоносного комплекса находится в затаеженной гористой части гор Саян и Минусинской котловины, 
                                где антропогенной нагрузки на водную среду тоже нет. Розлив воды осуществляется на территории источника. 
                                Участок недр данной скважины защищен 40 метрами толщи песчано-глиняного состава, что исключает любое воздействие на подземный источник, 
                                сохраняя его чистоту и первозданность. В будущем такая ситуация будет сохраняться неограниченно долго.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}