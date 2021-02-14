function inputCheck() {
    // variables
    let form = document.getElementById("form");
    let minNum = document.getElementById("minNum").value;
    let maxNum = document.getElementById("maxNum").value;
    let num = document.getElementById("inputNum").value;
    let output = document.getElementById("output");

    // compute
    if (num && minNum && maxNum) { // if all inputs have a value
        if ((Number(num) >= Number(minNum)) && (Number(num) <= Number(maxNum))) { // if number is between min & max
            output.innerHTML = num + " is between " + minNum + " and " + maxNum;
        } else { // if number is out of range
            output.innerHTML = num + " is <span class='issue'>NOT</span> between " + minNum + " and " + maxNum;
        } 
    } else { // if any input is empty
        output.innerHTML = "<span class='issue'>Fill out all sections</span>";
    }

    // prevent reload
    function handleForm(event) {
        event.preventDefault();
    }
    form.addEventListener('submit', handleForm);
}