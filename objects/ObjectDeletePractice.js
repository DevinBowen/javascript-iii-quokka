var mydates = {
    molly: true,
    leah: false,
    susan: true,
    karyn: true,
    bianca: false,
    spots: false
}

//delete spots from mydates
delete mydates.spots;
delete mydates["spots"]

var userProp = "fname";
var userVal = "devin";
mydates[userProp] = userVal;


//loop over my dates and delete all properties with a falsy value