window.onload = () => {
    const openbtn = document.getElementById("openbtn");
    const closebtn = document.getElementById("closebtn");

    const buyButtons = document.getElementsByClassName("modalBtn");

    for(var i = 0; i < buyButtons.length; i++){
        buyButtons[i].addEventListener('click', modalOpen);
    }

    openbtn.addEventListener("click",openNav);
    closebtn.addEventListener("click",closeNav);

    var modal = document.getElementById("storeModal");
    var modalOpen = document.getElementById("modalBtn");
    var modalQuit = document.getElementById("modalQuit");

    var button1 = document.getElementById("t-shirtBtn");
    var text1 = document.getElementById("shirtTxt");
    var button2 = document.getElementById("capBtn");
    var text2 = document.getElementById("capTxt");
    var button3 = document.getElementById("gameBtn");
    var text3 = document.getElementById("gameTxt");

    var shoppingcart = document.getElementsByClassName("item");

    button1.addEventListener("click", shirtOpen);
    button2.addEventListener("click", capOpen);
    button3.addEventListener("click", gameOpen);

    function shirtOpen(){
        text1.style.display = "block";
    }

    function capOpen(){
        text2.style.display = "block";
    }

    function gameOpen(){
        text3.style.display = "block";
    }

    function openNav() {
        document.getElementById("menu").style.width = "100%";
    }

    function closeNav() {
        document.getElementById("menu").style.width = "0";
    }

    function modalOpen(){
        modal.style.display = "block";
    }

    modalQuit.onclick = function(){
        modal.style.display = "none";
        text1.style.display = "none";
        text2.style.display = "none";
        text3.style.display = "none";
    }

    var menu = document.getElementById("menu");

    window.onclick = function() {
        if(event.target == modal){
            modal.style.display = "none";
            text1.style.display = "none";
            text2.style.display = "none";
            text3.style.display = "none";
        }else if(event.target == openbtn){
            console.log("open menu");
        } else if(event.target !=  menu){
            closeNav();
        }
    }

    var popup = document.getElementById("notify");
    var popupType = document.getElementById("notifyType");
    var form = document.getElementById("formstore");
    function handleForm(event) { event.preventDefault(); }
    form.addEventListener('submit', handleForm);
    form.addEventListener('submit', submitted);

    function submitted(){
        modal.style.display = "none";
        popup.classList.toggle("active");
        popupType.classList.toggle("success");
        setTimeout(function(){
        popup.classList.remove("active");
        popupType.classList.remove("success");
      },2000);
      form.reset();
      text1.style.display = "none";
      text2.style.display = "none";
      text3.style.display = "none";
    }
}
