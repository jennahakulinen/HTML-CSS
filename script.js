  //Navigaatio
  const toggleBtn = document.querySelector('.toggle');
  const naviList = document.querySelector('.nav-list');

  toggleBtn.addEventListener('click', () => {
      naviList.classList.toggle('active');
  });