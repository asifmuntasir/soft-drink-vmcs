// Begin Simulation
// Press start

document.getElementById('pressStart').addEventListener("click", function () {
    document.getElementById("simulationStart").style.display = "block";
    document.getElementById("simulationEnd").style.display = "none";
});



// Activate Customer Panel

document.getElementById('activateCustomer').addEventListener("click", function () {
    document.getElementById("customer").style.display = "block";
    document.getElementById("simulationStart").style.display = "none";
    document.getElementById("maintaner").style.display = "none";
    document.getElementById("machinery").style.display = "none";
    document.getElementById("simulationEnd").style.display = "none";
});




// Activate Maintaner Panel

document.getElementById('activateMaintaner').addEventListener("click", function () {
    document.getElementById("maintaner").style.display = "block";
    document.getElementById("customer").style.display = "none";
    document.getElementById("simulationStart").style.display = "none";
    document.getElementById("machinery").style.display = "none";
    document.getElementById("simulationEnd").style.display = "none";
});


// Activate Machinery Panel

document.getElementById('activateMachinery').addEventListener("click", function () {
    document.getElementById("machinery").style.display = "block";
    document.getElementById("customer").style.display = "none";
    document.getElementById("simulationStart").style.display = "none";
    document.getElementById("maintaner").style.display = "none";
    document.getElementById("simulationEnd").style.display = "none";
});

document.getElementById('formData').addEventListener('submit', function (event) {
    event.preventDefault();

    const inputs = document.querySelectorAll('#formData input, #formData input[type="radio"]:checked');
    let csvContent = "data:text/csv;charset=utf-8,";

    // Create CSV headers
    let headers = Array.from(inputs).map(input => input.id);
    csvContent += headers.join(",") + "\r\n";

    // Create CSV row with input values
    let row = Array.from(inputs).map(input => input.value);
    csvContent += row.join(",") + "\r\n";

    // Create a downloadable link
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "form_data.csv");
    document.body.appendChild(link);

    // Trigger the download
    link.click();
    document.body.removeChild(link);
});


// Press End

document.getElementById('pressEnd').addEventListener("click", function () {
    document.getElementById("simulationEnd").style.display = "block";
    document.getElementById("customer").style.display = "none";
    document.getElementById("simulationStart").style.display = "none";
    document.getElementById("machinery").style.display = "none";
    document.getElementById("maintaner").style.display = "none";
});
