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

const pressButton = document.getElementById('uploadConfirm').addEventListener("click", executeData);

let items;
let val;
let coinArray = [];
let calc;
let validCoins = [1, 0.10, 0.20, 0.50];

function executeData() {
    Papa.parse(document.getElementById('uploadFile').files[0], {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: function (res) {
            items = res.data[0];
            // console.log(items.coins10);
            // console.log(items.brand1);
            if (items.brand1 > 0) {
                document.getElementById("brand1Stock").innerHTML = "In Stock";
            }
            if (items.brand2 > 0) {
                document.getElementById("brand2Stock").innerHTML = "In Stock";
            }
            if (items.brand3 > 0) {
                document.getElementById("brand3Stock").innerHTML = "In Stock";
            }
            if (items.brand4 > 0) {
                document.getElementById("brand4Stock").innerHTML = "In Stock";
            }
            if (items.brand5 > 0) {
                document.getElementById("brand5Stock").innerHTML = "In Stock";
            }
        }
    });
    // const insertCoin = document.getElementById("inserCoin").value;
    // console.log(insertCoin);
}




document.getElementById("insertCoin").addEventListener("input", function () {
    val = this.value;
    const number = parseFloat(val)
    let sum;

    if (validCoins.includes(number)) {
        document.getElementById("coinMSG").innerText = "COINS VALID";

        // Add the valid coin to the array and calculate the sum
        coinArray.push(number);
        sum = coinArray.reduce((total, num) => total + num, 0);
        // Display the total sum

        document.getElementById("total-money").innerText = parseFloat(sum).toFixed(2);

    } else {
        document.getElementById("coinMSG").innerText = "COINS NOT VALID";
    }
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
