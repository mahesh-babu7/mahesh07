const Telugu =  () => {
    const teluguid = document.getElementById("search-id").value.toUpperCase();
    const telugu1 = document.querySelectorAll(".movies-list");
    const telugu2 = document.getElementsByTagName("h4");

    for(let i = 0; i < telugu2.length; i++) {

        let tfi = telugu1[i].getElementsByTagName('h4')[0];

        let tfi1 = tfi.innerHTML ||  tfi.textContent || tfi.textContent;

            if(tfi1.toUpperCase().indexOf(teluguid) > -1) {
                telugu1[i].style.display = "";
            }else {
                telugu1[i].style.display = "none";
            }
        
    }
}

const Director =  () => {
    const teluguid = document.getElementById("search-id1").value.toUpperCase();
    const telugu1 = document.querySelectorAll(".movies-list1");
    const telugu2 = document.getElementsByTagName("h6");

    for(let i = 0; i < telugu2.length; i++) {

        let tfi = telugu1[i].getElementsByTagName('h6')[0];

        let tfi1 = tfi.innerHTML ||  tfi.textContent || tfi.textContent;

            if(tfi1.toUpperCase().indexOf(teluguid) > -1) {
                telugu1[i].style.display = "";
            }else {
                telugu1[i].style.display = "none";
            }
        
    }
}

const Heroine =  () => {
    const teluguid = document.getElementById("search-id2").value.toUpperCase();
    const telugu1 = document.querySelectorAll(".movies-list2");
    const telugu2 = document.getElementsByTagName("h6");

    for(let i = 0; i < telugu2.length; i++) {

        let tfi = telugu1[i].getElementsByTagName('h6')[0];

        let tfi1 = tfi.innerHTML ||  tfi.textContent || tfi.textContent;

            if(tfi1.toUpperCase().indexOf(teluguid) > -1) {
                telugu1[i].style.display = "";
            }else {
                telugu1[i].style.display = "none";
            }
        
    }
}