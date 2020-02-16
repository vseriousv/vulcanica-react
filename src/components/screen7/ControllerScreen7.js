export default class ControllerScreen7{
    showTheme(){
        const res = document.getElementById("themeSelectOptions");
        const triangle =  document.getElementById("themeMailFormOferTreg");
        res.classList.toggle("p7-height0px");
        res.classList.toggle("p7-height80px");
        if(res.classList.contains('p7-height0px')){
            triangle.style.transform = "rotate(360deg)";
        }else{
            triangle.style.transform = "rotate(180deg)";
        }
    }

    getValue(e){
        document.getElementById("themeMailFormOfer").setAttribute("data-value", e.target.getAttribute("data-value"));
        document.getElementById("themeMailFormOferValue").textContent = e.target.textContent;
    }

    checkBox(event){
        // event.preventDefault();
        const checkboxFormOfer = document.getElementById("checkboxFormOfer");
        if(checkboxFormOfer.checked == true){checkboxFormOfer.checked = false}else{checkboxFormOfer.checked = true}
    }

    sendMail(){
        const nameMailFormOfer = document.getElementById("nameMailFormOfer").value;
        const phoneMailFormOfer = document.getElementById("phoneMailFormOfer").value;
        const emailMailFormOfer = document.getElementById("emailMailFormOfer").value;
        const themeMailFormOfer = document.getElementById("themeMailFormOfer").getAttribute("data-value");
        const msgMailFormOfer = document.getElementById("msgMailFormOfer").value;
        const agreeMailFormOfer = document.getElementById("checkboxFormOfer");
        if(agreeMailFormOfer.checked == true){
            const objectMassage = {
                "name":nameMailFormOfer,
                "phone":phoneMailFormOfer,
                "email":emailMailFormOfer,
                "theme":themeMailFormOfer,
                "msg":msgMailFormOfer
            }
            console.log(objectMassage);
        }else{
            // event.preventDefault;
            console.error("checked agree filed")
        }
    }
}