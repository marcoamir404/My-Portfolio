let x =0;
function showandhide(){
    if(x===0){
        document.getElementById("nav-content").classList.remove("hidden");
        x=1;
    }else{
        document.getElementById("nav-content").classList.add("hidden");
        x=0;
    }
}