window.onload = () => {
    const openbtn = document.getElementById("openbtn");
    const closebtn = document.getElementById("closebtn");

    const buyButtons = document.getElementsByClassName("modalBtn");

    for(var i = 0; i < buyButtons.length; i++){
        buyButtons[i].addEventListener('click',modalOpen);
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
}
