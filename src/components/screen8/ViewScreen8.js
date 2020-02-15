import React from 'react';
import ControllerScreen8 from './ControllerScreen8';
import './StyleScreen8.scss';


export default class ViewScreen8 extends React.Component {
    render(){
        return(
            <div id="screenID8" className="sectionFull next-activeSlide">
                <div className="content_box">
                    <div className="gradient_p8"></div>
                    <div className="box_table">
                        <p className="table_tytle mb-2"><b>Природная питьевая вода «VULCANICA»</b></p>
                        <div className="row_1">
                            <div className="row_1-1">
                                <p className="font_r">Минерализация</p><p className="my-0 font_m">253±25,3</p>
                            </div>
                            <div className="row_1-2">
                                <p className="font_r">Водородный показатель</p><p className="my-0 font_m">pH=6,9</p>
                            </div>
                        </div>
                        <div className="row_2 font_r">
                            <div className="row_2-1"><p>Минеральные вещества</p></div>
                            <div className="row_2-2"><p>Содержание, мг/л</p></div>
                            <div className="row_2-3"><p>Суточная потребность</p></div>
                        </div>
                        <div className="row_3">
                            <div className="row_3-1"><p className="font_minerals">Si - Кремний</p></div>
                            <div className="row_3-2"><p className="font_m">0,88±0,13</p></div>
                            <div className="row_3-3"><p className="font_m">20-50 мг</p></div>
                        </div>
                        <div className="row_4">
                            <div className="row_4-1"><p className="font_minerals">Mg - Магний</p></div>
                            <div className="row_4-2"><p className="font_m">41,2±8,2</p></div>
                            <div className="row_4-3"><p className="font_m">0,35 г</p></div>
                        </div>
                        <div className="row_5">
                            <div className="row_5-1"><p className="font_minerals">Ca - Кальций</p></div>
                            <div className="row_5-2"><p className="font_m">65,2±13,1</p></div>
                            <div className="row_5-3"><p className="font_m">0,4 - 0,7 г</p></div>
                        </div>
                        <div className="row_6">
                            <div className="row_6-1"><p className="font_minerals">F - Фтор</p></div>
                            <div className="row_6-2"><p className="font_m">0,65</p></div>
                            <div className="row_6-3"><p className="font_m">1,3 - 1,9 мг</p></div>
                        </div>
                    </div>
                    <div className="box_futer">
                        <div className="logo_img">
                            <img src="../img/logo_1_p8.png" alt="Вулканика" className="logo_1" />
                            <img src="../img/logo_2_p8.svg" alt="Вулканика" className="logo_2" />
                        </div>
                        <div className="box_link">
                            <p className="link link_1"><a href=".">Декларация соответствия</a></p>
                            <p className="link link_2"><a href=".">Протокол лабораторных испытаний</a></p>
                            <p className="certificate"><b>© Vulcanica - все права защищены</b></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}