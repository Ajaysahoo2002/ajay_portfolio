// Fetching the XML Data
// Function to fetch and display XML data
function fetchData() {
  fetch('details.xml')
    .then(response => response.text())
    .then(xmlData => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlData, 'application/xml');

      // Accessing elements from the XML document

      // Get the Personal Information data
      const name = xmlDoc.querySelector('Name').textContent;
      const cvLink = xmlDoc.querySelector("PersonalInformation Cv").textContent;
      const linkedInLink = xmlDoc.querySelector("PersonalInformation LinkedIn").textContent;
      const githubLink = xmlDoc.querySelector("PersonalInformation GitHub").textContent;
      // Display personal information on the page
      document.getElementById('name').innerHTML = name;
      document.getElementById('cv-link').href = cvLink;
      document.getElementById('linkedIn_link').href = linkedInLink;
      document.getElementById('gitHub_link').href = githubLink;

    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

// Call the fetchData function
fetchData();


// Form validation
function handleSubmit() {
  var name = document.querySelector(".contactSection #name").value;
  var email = document.querySelector(".contactSection #email").value;
  var message = document.querySelector(".contactSection #message").value;

  if (name !== "" && email !== "") {
    alert("Hii " + name + " Thankyou for your Responce....");
  }
  else {
    alert("Please filled the above Details");
  }
}
