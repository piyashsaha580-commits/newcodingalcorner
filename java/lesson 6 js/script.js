
let day   
   switch(new date().getday()){
    case 0:
        day ="sunday"
    case 1:
        day = "Monday"
    case 2:
        day = "tuesday"
    case 3:
        day = "wednessday"
        break;
    case 4:
        day = "thursday"
    case 5:
        day = "friday"
    case 6:
        day = "saturday"
    case 7:
        day = ""
        default
        day="invalid";

}
document.getElementById('out').innerHTML = "This is todays day: " + day