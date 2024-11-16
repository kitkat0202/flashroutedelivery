document.addEventListener("DOMContentLoaded", function(event) { 
    
    // Navbar shadow on scroll
    document.addEventListener("scroll", function() {
        let nav = document.querySelector("nav");;
        if (window.scrollY > 20) {
            nav.classList.add("backdrop");
            nav.classList.add("shadow-transition");
            nav.style.backgroundColor = "rgb(255, 242, 222, 0.8)";
        } else {
            nav.classList.remove("backdrop");
            nav.classList.remove("shadow-transition");
            nav.style.backgroundColor = "transparent";
        }
    })


    // JavaScript to toggle input fields
    const selectEmail = document.getElementById('selectEmail');
    const selectPhone = document.getElementById('selectPhone');
    const emailInputGroup = document.getElementById('emailInputGroup');
    const phoneInputGroup = document.getElementById('phoneInputGroup');

    const activeClasses = "btn btn-outline-dark bg-white w-50 text-dark";
    const inactiveClasses = "btn btn-outline-light w-50"

    selectEmail.addEventListener('click', () => {
        emailInputGroup.classList.remove('d-none');
        phoneInputGroup.classList.add('d-none');

        selectEmail.classList = activeClasses;
        selectPhone.classList = inactiveClasses;
    });

    selectPhone.addEventListener('click', () => {
        phoneInputGroup.classList.remove('d-none');
        emailInputGroup.classList.add('d-none');

        selectPhone.classList = activeClasses;
        selectEmail.classList = inactiveClasses;
    });

    document.getElementById('warehouse-contact').addEventListener('submit', async function(event) {
        event.preventDefault();
      
        const form = event.target;
        const formData = new FormData(form);
        const url = 'https://formsubmit.co/ajax/flashroutedelivery@gmail.com';
      
        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Accept': 'application/json'
            },
            body: formData
          });
      
          if (response.ok) {
            document.getElementById('successMessage').style.display = 'block';
            document.getElementById('warehouse-contact').style.display = 'none';
            form.reset(); // Optionally reset the form
          } else {
            document.getElementById('failureMessage').style.display = 'block';
            document.getElementById('warehouse-contact').style.display = 'none';
          }
        } catch (error) {
            document.getElementById('failureMessage').style.display = 'block';
            document.getElementById('warehouse-contact').style.display = 'none';
        }
    });
      

})