var changeImage = function(index){
    document.getElementById("image1").src = "image" + index + ".jpeg";
}

var changeImage2 = function(index){
    document.getElementById("image2").src = "image" + index + ".jpeg";
}

var email = function(){
    window.location.href = "mailto:user@example.com?subject=Subject&body=message%20goes%20here";
}