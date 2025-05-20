document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
  
      window.scrollTo({
        top: target.offsetTop - 60, // adjust for fixed header
        behavior: 'smooth'

        
      });
    });
  });
  