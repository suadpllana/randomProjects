    const button1 = document.getElementById("button1")

function playSound(key){
    let audio = new Audio(`./audios/key${key}.mp3`);
    audio.play();
}
document.addEventListener('keydown', event => {
    switch (event.key) {
        case 'w':
            playSound(1) 
            break;
        case 'a':
            playSound(2);
            break;
        case 's':
            playSound(3);
            break;
        case 'd':
             playSound(4);
             break;
        case 'e':
            playSound(5);
            break;
        case 'r':
            playSound(6);
            break;
        case 't':
            playSound(7);
            break;
        case 'f':
             playSound(8);
             break;
        case 'g':
             playSound(9);
             break;
        case 'y':
            playSound(10);
            break;
        case 'h':
             playSound(11);
             break;
        case 'j':
             playSound(12);
             break;            
        case '1':
             playSound(13);
             break;
        case '2':
             playSound(14);
             break;
        case '3':
             playSound(15);
             break;
        case '4':
             playSound(16);
             break;
        case '5':
              playSound(17);
              break;
        case '6':
            playSound(18);
            break;
        case '7':
            playSound(19);
            break;
        case '8':
            playSound(20);
            break;
        case '9':
            playSound(21);
            break;
        case '0':
            playSound(22);
            break;
        case 'z':
        playSound(23);
        break;
        case 'x':
        playSound(24);
        break;
        default:
            console.error("Something went wrong");
            break;                  

    }
})