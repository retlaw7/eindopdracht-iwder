window.onload = () => {
    const openbtn = document.getElementById("openbtn");
    const closebtn = document.getElementById("closebtn");

    openbtn.addEventListener("click",openNav);
    closebtn.addEventListener("click",closeNav);


    function openNav() {
        document.getElementById("menu").style.width = "100%";
    }

    function closeNav() {
      document.getElementById("menu").style.width = "0";
    }

    const trailerbtn = document.getElementById("trailerbtn");
    trailerbtn.addEventListener("click", trailer);

    function trailer() {
        window.open("https://youtu.be/t9wYu3lorFc", "_blank");
    }

    window.onclick = function() {
        if(event.target == openbtn){
            console.log("open menu");
        } else if(event.target !=  menu){
            console.log("sluit menu");
            closeNav();
        }
    }
}
