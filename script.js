document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('downloadResume').addEventListener('click', () => {
  window.open('resume.pdf', '_blank');
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thanks! Message sent (demo). Replace with your backend / email service.');
});