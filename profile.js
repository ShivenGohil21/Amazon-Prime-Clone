       // Get references to elements
       const profileBtn = document.getElementById('profileBtn');
       const dropdownMenu = document.getElementById('dropdownMenu');
       const overlay = document.getElementById('overlay');
       
       // Toggle dropdown menu and overlay visibility
       profileBtn.addEventListener('click', () => {
           dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
           overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
       });
       
       // Close dropdown when clicking outside the menu
       overlay.addEventListener('click', () => {
           dropdownMenu.style.display = 'none';
           overlay.style.display = 'none';
       });