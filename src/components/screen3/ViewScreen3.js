import React from 'react';
import ControllerScreen3 from './ControllerScreen3';
import './StyleScreen3.scss';
const controller = new ControllerScreen3;

export default class ViewScreen3 extends React.Component {
    componentDidMount(event){
        const screenID3 = document.getElementById("screenID3");
        screenID3.addEventListener('touchend', (event) => {
            this.controllerDoing(event)
        });
    }

    componentWillUnmount(event){
        const screenID3 = document.getElementById("screenID3");
        screenID3.addEventListener('touchend', (event) => {
            this.controllerDoing(event)
        });
    }
    controllerDoing(event){
        this.props.nextScreen();
    }
    render(){
        return(
            <div id="screenID3" className="sectionFull activeScreen">
            <div className="background_p3">
                <div className="box-container_p3 d-none d-lg-flex">
                    <h1 className="title-left-block_p3 h1">
                        вода высшей категории. 
                        <span className="blu_green"><br/ >элексир<br/ ></span>
                        <span className="blu_green">здоровья</span>
                    </h1>
                    <div className="left-block_p3">
                        <h4 className="balance_p3 h4">
                            <p className="balance-title_p3">Здоровый баланс микроэлементов</p>
                            <div className="minerals_p3">
                                <p>Кремний - нормализует обмен веществ, укрепляет иммунитет <br/ >
                                    и стенки кровеносных сосудов</p> 
                                <p>Магний - участвует в формировании костной ткани</p> 
                                <p>Кальций - работа <br/ >сердечно-сосудистой системы, уменьшение отеков</p> 
                                <p>Фтор - укрепляет кости <br/ >и зубную эмаль</p> 
                            </div> 
                        </h4>
                    </div>
                    <div className="bottle_p3">
                        <img src="../img/bottle-p3.png" alt="Живые цветы в стакане с водой" />
                    </div>
                    <div className="right-block_p3">
                        <h3 className="ph-title_p3 h3">
                            Оптимальный<br/ >pH-баланс  
                        </h3>
                        <h4 className="ph_p3 h4">
                            создает здоровую<br/ >среду организма
                        </h4>
                        <img src="../img/EAC.png" alt="EAC РСТ" />
                    </div>
                </div>
                <div className="box-container-mobile_p3 d-lg-none d-flex">
                    <h1 className="title-left-block_m_p3 h1">
                        <span>вода высшей категории.</span> 
                        <span className="blu_green"><br/ >элексир<br/ ></span>
                        <span className="blu_green">здоровья</span>
                    </h1>
                    <h3 className="ph-title_m_p3 h3 mb-1">
                        Оптимальный pH-баланс  
                    </h3>
                    <h4 className="ph_m_p3 h4">
                        создает здоровую среду организма
                    </h4>
                    <h4 className="balance_m_p3 h4">
                        <p className="balance-title_m_p3">Здоровый баланс микроэлементов</p>
                        <div className="minerals_m_p3">
                            <div className="box-minerals_m_p3">
                                <img src="../img/p3-mobil/Si.svg" alt="Si" />
                                <p>Кремний - нормализует обмен веществ, укрепляет иммунитет <br/ >
                                и стенки кровеносных сосудов</p>
                            </div>
                            <div className="box-minerals_m_p3">
                                <img src="../img/p3-mobil/Mg.svg" alt="Mg" />
                                <p>Магний - участвует в формировании костной ткани</p>
                            </div>
                            <div className="box-minerals_m_p3">
                                <img src="../img/p3-mobil/Ca.svg" alt="Ca" />
                                <p>Кальций - работа <br/ >сердечно-сосудистой системы, уменьшение отеков</p>
                            </div> 
                            <div className="box-minerals_m_p3">
                                <img src="../img/p3-mobil/F.svg" alt="F" />
                                <p>Фтор - укрепляет кости <br/ >и зубную эмаль</p>
                            </div>
                        </div> 
                    </h4>
                    <img src="../img/EAC.png" alt="EAC РСТ" />
                </div>
            </div>
        </div>
        )
    }
}