import React from 'react';
import ControllerScreen2 from './ControllerScreen2';
import './StyleScreen2.scss';
const controller = new ControllerScreen2;

export default class ViewScreen2 extends React.Component {

    state = {slide: 1}
    componentDidMount(event){
        const screenID2 = document.getElementById("screenID2");
        screenID2.addEventListener('touchend', (event) => {
            this.controllerDoing(event)
        });
    }

    componentWillUnmount(event){
        const screenID2 = document.getElementById("screenID2");
        screenID2.addEventListener('touchend', (event) => {
            this.controllerDoing(event)
        });
    }

    controllerDoing(event){
        if (this.state.slide != 3){
            this.showNextSlide(this.state.slide);
            this.setState({slide: +this.state.slide+1})
        }else{
            this.setState({slide: 1})
            setTimeout(()=>{this.showDefaultSlide()}, 1000)
            this.props.nextScreen();
        }
    }

    showNextSlide(value){
        for (let i = value; i <= 3; i++){
            if(i <= value){
                document.getElementById("layoutID"+i).classList.add("pre-activeLayout2"); 
                document.getElementById("layoutID"+i).classList.remove("activeLayout2");

                document.getElementById("itemtextID"+i).classList.add("textLayoutID_nonActive"); 
                document.getElementById("itemtextID"+i).classList.remove("textLayoutID_Active");
            } else {
                document.getElementById("layoutID"+i).classList.add("activeLayout2"); 
                document.getElementById("layoutID"+i).classList.remove("pre-activeLayout2");

                console.log("456781y1312 ".document.getElementById("itemtextID1"))
                // document.getElementById("itemtextID"+i).classList.add("textLayoutID_Active"); 
                // document.getElementById("itemtextID"+i).classList.remove("textLayoutID_nonActive");
            }
        }
    }
    showDefaultSlide(){
        for (let i = 1; i <= 3; i++){
                document.getElementById("layoutID"+i).classList.add("activeLayout2"); 
                document.getElementById("layoutID"+i).classList.remove("pre-activeLayout2");
        }
    }
    render(){
        return(
        <div id="screenID2" className="sectionFull activeScreen">
            <div className="layouts d-none d-xl-flex">
                <div id="sectorHoverID3" className="sectorHover">
                    <div className="hrLine">
                        <div className="textUnderBTNTablet">
                            <div className=""><p className="itemTextUnderBTNTablet text-uppercase">сегодня</p></div>
                        </div>
                        <svg className="" style={{marginBottom: "-1px"}} width="52" height="46" viewBox="0 0 52 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.0003 0.477539L51.9811 45.4775H0.0195312L26.0003 0.477539Z" fill="white"/>
                        </svg>
                        <div className="blockTextSectionHR">
                            <div className="hr-textUnderBTNTablet">
                                <div id="" className=""><p className="hr-itemTextUnderBTNTablet text-uppercase">подземное море стало источником чистейшей природной воды</p></div></div>
                        </div>
                    </div>
                </div>
                <div id="sectorHoverID2" className="sectorHover">
                    <div className="hrLine">
                        <div className="textUnderBTNTablet">
                            <div className=""><p className="itemTextUnderBTNTablet text-uppercase">320 млн. лет назад</p></div>
                        </div>
                        <svg className="" style={{marginBottom: "-1px"}} width="52" height="46" viewBox="0 0 52 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.0003 0.477539L51.9811 45.4775H0.0195312L26.0003 0.477539Z" fill="white"/>
                        </svg>
                        <div className="blockTextSectionHR">
                            <div className="hr-textUnderBTNTablet">
                                <div id="" className=""><p className="hr-itemTextUnderBTNTablet text-uppercase">море ушло под землю из-за смещения плит</p></div></div>
                        </div>
                    </div>
                </div>
                <div id="sectorHoverID1" className="sectorHover">
                    <div className="hrLine">
                        <div className="textUnderBTNTablet">
                            <div className=""><p className="itemTextUnderBTNTablet text-uppercase">350 млн. лет назад</p></div>
                        </div>
                        <svg className="" style={{marginBottom: "-1px"}} width="52" height="46" viewBox="0 0 52 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.0003 0.477539L51.9811 45.4775H0.0195312L26.0003 0.477539Z" fill="white"/>
                        </svg>
                        <div className="blockTextSectionHR">
                            <div className="hr-textUnderBTNTablet">
                                <div id="" className=""><p className="hr-itemTextUnderBTNTablet text-uppercase">пресное море</p></div></div>
                        </div>
                    </div>
                </div>

                <div id="desktop_layoutID1" className="desktop-layout_2 desktop-layout_2-1"></div>
                <div id="desktop_layoutID2" className="desktop-layout_2 desktop-layout_2-2"></div>
                <div id="desktop_layoutID3" className="desktop-layout_2 desktop-layout_2-3"></div>
            </div>

            <div className="layouts d-xl-none d-flex">
                <div id="layoutID1" className="layoutID activeLayout2"><div id="layout_21" className="layout_2-1 layout_2-1_paralax"></div></div>
                <div id="layoutID2" className="layoutID activeLayout2"><div id="layout_22" className="layout_2-2 layout_2-1_paralax"></div></div>
                <div id="layoutID3" className="layoutID activeLayout2"><div id="layout_23" className="layout_2-3 layout_2-1_paralax"></div></div>
            </div>


            <div id="layoutsAbsolute" className="layoutsAbsolute">
                <div className="posRelativ">
                    {/* <!-- Header Text two screen--> */}
                    <div className="headerTwoScreen">
                        <h2 className="text-uppercase color-white d-xl-none">Вода из подземного моря</h2>
                        <h2 className="text-uppercase d-none d-xl-block">Вода из<br /> подземного моря</h2>
                        <h2 className="text-uppercase color-spec-orange">С историей<br /> 350 миллионов лет</h2>
                    </div>

                    {/* <!-- SubText two screen --> */}
                    <div className="subTextTwoScreen color-white">
                        <p>Сибирь. Предгорье саян. Минусинская котловина</p>
                    </div>
                </div>
                    {/* <!-- navigation for two screen --> */}
                <div className="bottomTabletBlock">
                    <div className="textUnderBTNTablet d-xl-none">
                        <div id="itemtextID1" className="textLayoutID_nonActive textLayoutID_Active"><p className="itemTextUnderBTNTablet text-uppercase">350 млн. лет назад</p></div>
                        <div id="itemtextID2" className="textLayoutID_nonActive"><p className="itemTextUnderBTNTablet text-uppercase">320 млн. лет назад</p></div>
                        <div id="itemtextID2" className="textLayoutID_nonActive"><p className="itemTextUnderBTNTablet text-uppercase">сегодня</p></div>
                    </div>
                    <div className="hrLine">
                        <svg className="d-xl-none" style={{marginBottom: "-1px"}} width="52" height="46" viewBox="0 0 52 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.0003 0.477539L51.9811 45.4775H0.0195312L26.0003 0.477539Z" fill="white"/>
                        </svg>
                        <div className="blockTextSectionHR">
                            <div className="hr-textUnderBTNTablet d-xl-none">
                                <div id="hr-itemtextID1" className="textLayoutID_nonActive textLayoutID_Active"><p className="hr-itemTextUnderBTNTablet text-uppercase">пресное море</p></div>
                                <div id="hr-itemtextID2" className="textLayoutID_nonActive"><p className="hr-itemTextUnderBTNTablet text-uppercase">море ушло под землю из-за смещения плит</p></div>
                                <div id="hr-itemtextID2" className="textLayoutID_nonActive"><p className="hr-itemTextUnderBTNTablet text-uppercase">подземное море стало источником чистейшей природной воды</p></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="textUnderButton_p2" className="textUnderButton_p2 height100">
                    <div className="treg">
                        <svg width="30" height="36" viewBox="0 0 30 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30 17.7011L-1.51421e-06 35.0216L0 0.380614L30 17.7011Z" fill="white"/>
                        </svg>
                    </div>
                    <div id="textLayoutID1" className="textFields textLayoutID_nonActive textLayoutID_Active"> <p className="textUderBtnHead">350 млн. лет назад</p> <p className="textUderBtntext">пресное море</p></div>
                    <div id="textLayoutID2" className="textFields textLayoutID_nonActive"> <p className="textUderBtnHead">320 млн. лет назад</p> <p className="textUderBtntext">море ушло под землю из-за смещения плит</p></div>
                    <div id="textLayoutID3" className="textFields textLayoutID_nonActive"> <p className="textUderBtnHead">сегодня</p> <p className="textUderBtntext">подземное море стало источником чистейшей природной воды</p></div>
                </div>
            </div>
        </div>
        );
    }
}