const slidesData = [
    {
      image: "https://picsum.photos/id/25/800/400",
      title: "Slide 1",
    },
    {
      image: "https://picsum.photos/id/27/800/400",
      title: "Slide 2",
    },
    {
      image: "https://picsum.photos/id/28/800/400",
      title: "Slide 3",
    },
    {
      image: "https://picsum.photos/id/29/800/400",
      title: "Slide 4",
    },
  ];
  
  let currentSlideIndex = 0;
  let slideInterval;
  
  function showSlide(index) {
      const slides = document.getElementsByClassName('slide');
      const dots = document.getElementsByClassName('dot');
      if (index >= slides.length) currentSlideIndex = 0;
      if (index < 0) currentSlideIndex = slides.length - 1;
  
      for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = 'none';
          dots[i].classList.remove('active-dot');
      }
  
      slides[currentSlideIndex].style.display = 'block';
      dots[currentSlideIndex].classList.add('active-dot');
  }
  
  function nextSlide() {
      currentSlideIndex++;
      showSlide(currentSlideIndex);
  }
  
  function prevSlide() {
      currentSlideIndex--;
      showSlide(currentSlideIndex);
  }
  
  function setSlide(index) {
      currentSlideIndex = index;
      showSlide(currentSlideIndex);
  }
  
  function autoSlide() {
      slideInterval = setInterval(nextSlide, 10000);
  }
  
  function createSlides() {
      const slideshowContainer = document.querySelector('.slideshow-container');
      const dotContainer = document.querySelector('.dot-container');
  
      slidesData.forEach((slide, index) => {

          const slideDiv = document.createElement('div');
          slideDiv.classList.add('slide');
          slideDiv.innerHTML = `<img src="${slide.image}" style="width:100%">
                                <div class="slide-title">${slide.title}</div>`;
          slideshowContainer.appendChild(slideDiv);
          const dotSpan = document.createElement('span');
          dotSpan.classList.add('dot');
          dotSpan.setAttribute('onclick', `setSlide(${index})`);
          dotContainer.appendChild(dotSpan);
      });
  
      const prevButton = document.createElement('a');
      prevButton.classList.add('prev');
      prevButton.innerHTML = '&#10094;';
      prevButton.setAttribute('onclick', 'prevSlide()');
  
      const nextButton = document.createElement('a');
      nextButton.classList.add('next');
      nextButton.innerHTML = '&#10095;';
      nextButton.setAttribute('onclick', 'nextSlide()');
  
      slideshowContainer.appendChild(prevButton);
      slideshowContainer.appendChild(nextButton);
  
      showSlide(currentSlideIndex);
      autoSlide();
  }
  createSlides();
  