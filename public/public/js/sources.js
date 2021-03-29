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
}
