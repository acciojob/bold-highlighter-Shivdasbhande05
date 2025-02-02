function highlight() {
    //Write your code here
    let strongWords = document.querySelectorAll("strong");
    strongWords.forEach(word => {
        word.style.color = "green";
    });

}


function return_normal() {
    //Write your code here
    let strongWords = document.querySelectorAll("strong");
    strongWords.forEach(word => {
        word.style.color = "";
    });
    
}
