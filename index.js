function digitalClock(){
    const date = new Date();
    const hours = date.getHours().toString().padStart(2,0);
    const minutes = date.getMinutes().toString().padStart(2,0);
    const seconds = date.getSeconds().toString().padStart(2,0);

    const clock = document.getElementById("clock");
    clock.innerHTML = `${hours}:${minutes}:${seconds}`
}
setInterval(digitalClock,1000);