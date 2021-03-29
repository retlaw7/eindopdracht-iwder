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

    function modalOpen(){
        modal.style.display = "block";
    }

    modalQuit.onclick = function(){
        modal.style.display = "none";
    }

    window.onclick = function() {
        if(event.target == modal){
            modal.style.display = "none";
        }
    }

    function openNav() {
        document.getElementById("menu").style.width = "30%";
    }

    function closeNav() {
        document.getElementById("menu").style.width = "0";
    }

    function modalOpen(){
        modal.style.display = "block";
    }

    modalQuit.onclick = function(){
        modal.style.display = "none";
    }

    window.onclick = function() {
        if(event.target == modal){
            modal.style.display = "none";
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

    }
}
