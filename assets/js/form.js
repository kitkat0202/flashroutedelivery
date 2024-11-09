document.addEventListener("DOMContentLoaded", function(event) { 
    // JavaScript to toggle input fields
    const selectEmail = document.getElementById('selectEmail');
    const selectPhone = document.getElementById('selectPhone');
    const emailInputGroup = document.getElementById('emailInputGroup');
    const phoneInputGroup = document.getElementById('phoneInputGroup');
  
    selectEmail.addEventListener('click', () => {
      emailInputGroup.classList.remove('d-none');
      phoneInputGroup.classList.add('d-none');
    });
  
    selectPhone.addEventListener('click', () => {
      phoneInputGroup.classList.remove('d-none');
      emailInputGroup.classList.add('d-none');
    });

    // Function to show the modal when any button is clicked
    function showPopup() {
        // Show the modal with Bootstrap's modal methods
        var myModal = new bootstrap.Modal(document.getElementById('popupModal'));
        myModal.show();
      }

      // Optionally, you can attach the event listener dynamically to all buttons
      document.querySelectorAll('.deactivate-submit').forEach(button => {
        button.addEventListener('click', showPopup);
      });

    // document.querySelector("#driver-app").addEventListener("submit", async (e) => {
    //     e.preventDefault();
      
    //     // Get form data
    //     const firstName = document.getElementById("firstName").value;
    //     const lastName = document.getElementById("lastName").value;
    //     const email = document.getElementById("email").value;
    //     const phoneNumber = document.getElementById("phoneNumber").value;
      
    //     // Get selected days available to work
    //     const daysAvailable = [];
    //     const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    //     days.forEach(day => {
    //       if (document.getElementById(day).checked) {
    //         daysAvailable.push(day);
    //       }
    //     });
      
    //     // Construct the email content
    //     const emailBody = `
    //       <h2>New Job Application</h2>
    //       <p><strong>First Name:</strong> ${firstName}</p>
    //       <p><strong>Last Name:</strong> ${lastName}</p>
    //       <p><strong>Email:</strong> ${email}</p>
    //       <p><strong>Phone Number:</strong> ${phoneNumber}</p>
    //       <p><strong>Days Available to Work:</strong> ${daysAvailable.join(", ")}</p>
    //     `;
      
    //     // Send email using SMTP.js
    //     await Email.send({
    //       SecureToken: "ckqvowpknuyyqdxy",
    //       To: "he.katherine321@gmail.com",
    //       From: "he.katherine321@gmail.com",
    //       Subject: `New Job Application from ${firstName} ${lastName}`,
    //       Body: emailBody,
    //     })
    //     .then(() => alert("Application submitted successfully!"))
    //     .catch(error => alert(`Failed to submit application: ${error.message}`));
    //   });
  });