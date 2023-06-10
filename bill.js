// Sample bill history data (to be replaced with actual data from a database or API)
var billHistoryData = [
    { date: "2022-01-01", totalPrice: 100, isPaid: true },
    { date: "2022-02-01", totalPrice: 150, isPaid: false },
    { date: "2022-03-01", totalPrice: 120, isPaid: true },
    // ... and so on for the other months
  ];
  
  // Function to generate the bill history table
  function generateBillHistory() {
    var tbody = document.querySelector("#bill-history tbody");
  
    // Clear the existing rows
    tbody.innerHTML = "";
  
    // Generate rows based on the bill history data
    for (var i = 0; i < billHistoryData.length; i++) {
      var row = document.createElement("tr");
  
      var dateCell = document.createElement("td");
      dateCell.textContent = billHistoryData[i].date;
      row.appendChild(dateCell);
  
      var priceCell = document.createElement("td");
      priceCell.textContent = billHistoryData[i].totalPrice;
      row.appendChild(priceCell);
  
      var paidCell = document.createElement("td");
      paidCell.textContent = billHistoryData[i].isPaid ? "Yes" : "No";
      row.appendChild(paidCell);
  
      tbody.appendChild(row);
    }
  }
  
  // Function to handle the payment button click
  function makePayment() {
    var billNumber = document.getElementById("bill-number").value;
  
    // Perform necessary actions for making payment
    // For simplicity, let's assume the payment is processed successfully
  
    alert("Payment Successful!\n\nBill Number: " + billNumber);
  
    // Clear the bill number input field
    document.getElementById("bill-number").value = "";
  }
  
  // Generate the bill history table on page load
  generateBillHistory();
  