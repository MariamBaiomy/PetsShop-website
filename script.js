//open and close the dropdown menu
var flag = 0;
menuIcon.onclick = () => {
    if (flag == 0){
        menu.style.display = "block" ;
        flag = 1 ;
    }
    else{
        menu.style.display = "none" ;
        flag = 0;
    }};

// function dropMenu(){
//     if (flag == 0){
//         menu.style.display = "block" ;
//         flag = 1 ;
//     }
//     else{
//         menu.style.display = "none" ;
//         flag = 0;
//     }
// }
    