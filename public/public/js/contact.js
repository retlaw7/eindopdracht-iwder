window.onload = () => {
    const openbtn = document.getElementById("openbtn");
    const closebtn = document.getElementById("closebtn");

    const buyButtons = document.getElementsByClassName("modalBtn");

    for(var i = 0; i < buyButtons.length; i++){
        buyButtons[i].addEventListener('click',modalOpen);
    }

    openbtn.addEventListener("click",openNav);
    closebtn.addEventListener("click",closeNav);

    function openNav() {
        document.getElementById("menu").style.width = "30%";
    }

    function closeNav() {
        document.getElementById("menu").style.width = "0";
    }

    var popup = document.getElementById("notify");
    var popupType = document.getElementById("notifyType");
    var form = document.getElementById("contact");

    form.addEventListener('submit', handleForm);
    form.addEventListener('submit', submitted);
    function handleForm(event) { event.preventDefault(); }

    function submitted(){
        popup.classList.toggle("active");
        popupType.classList.toggle("success");
        setTimeout(function(){
        popup.classList.remove("active");
        popupType.classList.remove("success");
      },2000);
      form.reset();
    }
}
