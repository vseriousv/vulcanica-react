import React from 'react';
import ControllerScreen7 from './ControllerScreen7';
import './StyleScreen7.scss';

const controller = new ControllerScreen7;


export default class ViewScreen7 extends React.Component {
    componentDidMount(event){
        const screenID7 = document.getElementById("screenID7");
        screenID7.addEventListener('touchend', (event) => {
            this.controllerDoing(event)
        });
    }

    componentWillUnmount(event){
        const screenID7 = document.getElementById("screenID7");
        screenID7.addEventListener('touchend', (event) => {
            this.controllerDoing(event)
        });
    }
    controllerDoing(event){
        this.props.nextScreen();
    }

    render(){
        return(
            <div id="screenID7" className="sectionFull activeScreen">
            <div className="background-p7">
                <div className="gradient_p7 h-100 w-100">
                    <div className="box-container_p7">
                        <div className="p7-block1">
                            <p className="p7-h1 color-white">Хотите предложить сотрудничество<br /> или оставить обратную<br /> связь о продукте?</p>
                            <p className="p7-h2 color-white font-mavenPro d-xl-none">Заполните форму и выберите <br />тему сообщения</p>
                            <p className="p7-h2 color-white font-mavenPro d-none d-xl-block">Заполните форму и выберите тему сообщения</p>
                            <form id="mailForm_Ofer" className="p7-offer">
                                <input id="nameMailFormOfer" type="text" placeholder="Имя" />
                                <input id="phoneMailFormOfer" type="text" placeholder="Телефон" />
                                <input id="emailMailFormOfer" type="text" placeholder="Email" />
                                <div id="themeMailFormOfer" className="themeMailFormOfer" data-value="null" onClick={controller.showTheme}>
                                    <p id="themeMailFormOferValue" className="" >Выберите тему сообщения</p>                           
                                    <svg id="themeMailFormOferTreg" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.58958 1.37012L7.21875 11.1201L12.8479 1.37012H1.58958Z" fill="black" stroke="black"/>
                                    </svg>
                                    <div id="themeSelectOptions" className="themeSelectOptions p7-height0px">
                                        <div id="themeOptionValue-distrib" className="themeOptionValue" data-value="distrib" value="distrib" onClick={controller.getValue}>Дистрибуция</div>
                                        <div id="themeOptionValue-opt" className="themeOptionValue" data-value="opt"  value="opt" onClick={controller.getValue}>Оптовая покупка</div>
                                        <div id="themeOptionValue-other" className="themeOptionValue" data-value="other"  value="other" onClick={controller.getValue}>Другое предложение сотрудничества</div>
                                        <div id="themeOptionValue-backCall" className="themeOptionValue" data-value="backCall"  value="backCall" onClick={controller.getValue}>Обратная связь по продукту</div>
                                    </div>
                                </div>
                                <textarea id="msgMailFormOfer" placeholder="Ваше сообщение"></textarea>
                                <div className="labelSubmit">
                                    <label id="agreeMailFormOfer" className="checkOfer color-white" onClick={controller.checkBox}   >Я согласен с 
                                        <a href="#" style={{color: '#73D9D4', textDecorationLine: 'underline'}}>условиями</a> обработки персональных данных
                                        <input id="checkboxFormOfer" type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <div id="sendMailFormOfer" className="submitOffer" onClick={controller.sendMail}>Отправить</div>
                                </div>
                            </form>
                        </div>
                        <div className="p7-block2 d-none d-md-flex d-lg-none">
                            <div className="p7-img-tablet d-block"><img src="img/p7_image_tablet.png" /></div>
                        </div>
                        <div className="p7-block3 d-none d-lg-flex">
                            <div className="p7-img-desktop d-block"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

// constructor() {
//     super();
//     this.state = {
//         scrolling : false,
//         isScroll : true,
//         SCREEN : 1,
//         LAYOUT2 : 1,
//         sectionFullMaxSlide : 8,
//     };
//     this.handleScroll = this.handleScroll.bind(this)
//   }
// componentDidMount() {
//     window.addEventListener('wheel', this.handleScroll);
// }

// componentWillUnmount() {
//     window.removeEventListener('wheel', this.handleScroll);
// }

// handleScroll(event) {

//         if (this.state.isScroll == true) {
//             this.setState({
//                 scrolling : true,
//                 isScroll : false,
//             })
//             setTimeout(() => {this.setState({isScroll : true, scrolling : false })}, 1500);
//             const activeSlideID = document.getElementsByClassName('.activeSlide').getAttribute('id').slice(-1)
//             // console.log("activeSlideID", activeSlideID);
//             if(activeSlideID == this.sectionFullMaxSlide) { 
//                 console.log("END"); 
//             } else {
//                 const next_activeSlideID = +activeSlideID + 1;
//                 this.setState({SCREEN : next_activeSlideID})
//                 // changeNumberNavigateMenu(SCREEN);
//                 const res1 = '#screenID'+activeSlideID;
//                 const res2 = '#screenID'+next_activeSlideID;

//                 document.getElementById(res1).classList.remove("activeSlide")
//                 document.getElementById(res1).classList.add("activeSlide")
//                 document.getElementById(res2).classList.add("activeSlide")
//                 document.getElementById(res2).classList.remove("activeSlide")

//                 // paralax_layout2();
//             }
//         }else{ console.log(this.state.isScroll)}
// }