const swiper = new Swiper('.swiper',{
       
    direction: 'horizontal',
    loop: true,
  
   
    pagination: {
      el: '.swiper-pagination',
    },
  
   
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  const buttonsBook = document.querySelectorAll(".offers__cards__button");
  buttonsBook.forEach((button) => {
    button.addEventListener('click', (event) => {
      window.location.href = "roomsDetails.html";
    });
  });