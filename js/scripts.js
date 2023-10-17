function userScroll() {
    const navbar = document.querySelector('.navbar');
    const navlinks = document.querySelectorAll('.nav-link');
    const brand = document.querySelector('.navbar-brand');
    const button = document.querySelector('.contact');
    const ham = document.querySelector('.navbar-toggler');
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 710) {
        navbar.classList.add('bg-light');
        navbar.classList.add('navbar-sticky');
        navlinks.forEach((link) => link.classList.add('text-dark'));
        brand.classList.add('text-dark');
        button.classList.remove('btn-outline-light');
        button.classList.add('btn-outline-dark');
        ham.classList.add('dark-background')


        // button.addEventListener('mouseover', () => {
        //     button.classList.add('text-white');
        //   });
          
        //   button.addEventListener('mouseout', () => {
        //     button.classList.remove('text-white');
        //   });
      } else {
        navbar.classList.remove('bg-light');
        navbar.classList.remove('navbar-sticky');
        navlinks.forEach((link) => link.classList.remove('text-dark'));
        brand.classList.remove('text-dark');
        button.classList.remove('btn-outline-dark');
        button.classList.add('btn-outline-light');
        ham.classList.remove('dark-background')
  
        // button.addEventListener('mouseover', () => {
        //   button.classList.add('text-dark');
        // });
        
        // button.addEventListener('mouseout', () => {
        //   button.classList.remove('text-primary');
        // });
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', userScroll);
  