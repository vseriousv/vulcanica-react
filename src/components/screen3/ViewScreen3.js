import React from 'react';
import './StyleScreen3.scss';


export default class ViewScreen3 extends React.Component {
    render(){
        return(
            <div id="screenID3" class="sectionFull next-activeSlide">
            <div class="background_p3">
                <div class="box-container_p3 d-none d-lg-flex">
                    <h1 class="title-left-block_p3 h1">
                        вода высшей категории. 
                        <span class="blu_green"><br/ >элексир<br/ ></span>
                        <span class="blu_green">здоровья</span>
                    </h1>
                    <div class="left-block_p3">
                        <h4 class="balance_p3 h4">
                            <p class="balance-title_p3">Здоровый баланс микроэлементов</p>
                            <div class="minerals_p3">
                                <p>Кремний - нормализует обмен веществ, укрепляет иммунитет <br/ >
                                    и стенки кровеносных сосудов</p> 
                                <p>Магний - участвует в формировании костной ткани</p> 
                                <p>Кальций - работа <br/ >сердечно-сосудистой системы, уменьшение отеков</p> 
                                <p>Фтор - укрепляет кости <br/ >и зубную эмаль</p> 
                            </div> 
                        </h4>
                    </div>
                    <div class="bottle_p3">
                        <img src="../img/bottle-p3.png" alt="Живые цветы в стакане с водой" />
                    </div>
                    <div class="right-block_p3">
                        <h3 class="ph-title_p3 h3">
                            Оптимальный<br/ >pH-баланс  
                        </h3>
                        <h4 class="ph_p3 h4">
                            создает здоровую<br/ >среду организма
                        </h4>
                        <img src="../img/EAC.png" alt="EAC РСТ" />
                    </div>
                </div>
                <div class="box-container-mobile_p3 d-lg-none d-flex">
                    <h1 class="title-left-block_m_p3 h1">
                        <span>вода высшей категории.</span> 
                        <span class="blu_green"><br/ >элексир<br/ ></span>
                        <span class="blu_green">здоровья</span>
                    </h1>
                    <h3 class="ph-title_m_p3 h3 mb-1">
                        Оптимальный pH-баланс  
                    </h3>
                    <h4 class="ph_m_p3 h4">
                        создает здоровую среду организма
                    </h4>
                    <h4 class="balance_m_p3 h4">
                        <p class="balance-title_m_p3">Здоровый баланс микроэлементов</p>
                        <div class="minerals_m_p3">
                            <div class="box-minerals_m_p3">
                                <img src="../img/p3-mobil/Si.svg" alt="Si" />
                                <p>Кремний - нормализует обмен веществ, укрепляет иммунитет <br/ >
                                и стенки кровеносных сосудов</p>
                            </div>
                            <div class="box-minerals_m_p3">
                                <img src="../img/p3-mobil/Mg.svg" alt="Mg" />
                                <p>Магний - участвует в формировании костной ткани</p>
                            </div>
                            <div class="box-minerals_m_p3">
                                <img src="../img/p3-mobil/Ca.svg" alt="Ca" />
                                <p>Кальций - работа <br/ >сердечно-сосудистой системы, уменьшение отеков</p>
                            </div> 
                            <div class="box-minerals_m_p3">
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