
// Rendering Packages Section
function render_packages(totalData) {
    let container = document.getElementById("packages");
    container.innerHTML = '';
    
    totalData.tours.forEach(data => {
        
    const card = document.createElement('div');
    card.className = 'h-auto w-80 inline-block transition-all duration-300 ease-in-out transform hover:scale-110';
    card.innerHTML = `
    <div class="card inline-block align-top rounded-2xl relative w-full" style="background-image: url('${data.image_url}');
    background-size: 100% 80%;
    background-repeat: no-repeat;
    background-blend-mode:darken;">
        <img class="bg-gray-200 rounded-full p-1 my-3 right-3 absolute hover:cursor-pointer size-5" src="../../assets/img/main/cards/heart.png" alt="">
        <div class="w-full flex flex-row place-items-center justify-end px-3 bottom-27 absolute">
            <div class="bg-white flex flex-row place-items-center gap-1 rounded-full px-2 py-1.5">
                <img class="size-3" src="../../assets/img/main/cards/star.png" alt="">
                <p class="text-[11px]"><b>${data.rating}</b></p>
                <p class="text-gray-600 text-[11px]">(${data.number_of_reviews} reviews)</p>
            </div>
        </div>
        <div class="bg-white flex flex-col place-items-start gap-2 flex-wrap rounded-2xl mt-51 p-5 border border-gray-200">
            <p class="text-[15px] p-0"><b>${data.heading}</b></p>
            <p class="text-[12px]">${data.subtext}</p>
            <div class="flex flex-row place-items-center justify-between w-full">
                <span class="flex flex-row place-items-center">
                    <p class="text-black text-[14px]"><b>${data.price}</b></p>
                    <p class="text-[12px]">/person</p>
                </span>
                <button class="px-2 py-1 text-[13px] bg-gray-200 rounded-full hover:cursor-pointer"><b>Book Now</b></button>
            </div>
        </div>
    </div>
    `;
    container.appendChild(card);
  });

}

// Rendering Destinations Section
function render_destinations(totalData) {
    let container = document.getElementById("destinations");
    container.innerHTML = '';

    totalData.destinations.forEach(data => {

    const card = document.createElement('div');
    card.className = 'h-auto w-80 lg:w-100 inline-block transition-all duration-300 ease-in-out transform hover:scale-110';
    card.innerHTML = `
    <div class="container w-60">
        <div class="flex flex-col rounded-2xl border border-gray-200 px-5 py-3 gap-3">
            <img class="rounded-2xl" src="${data.imageUrl}" alt="">
            <div class="flex flex-col  my-2">
                <p><b>${data.heading}</b></p>
                <span class="flex flex-row justify-between w-full">
                    <p class="text-gray-400 text-[12px]">${data.subtext}</p>
                    <button class="bg-gray-200 rounded-full hover:cursor-pointer">
                        <img class="p-2" src="../../assets/img/main/right-arrow.png" alt="">
                    </button>
                </span>
            </div>
        </div>
    </div>
    `;
    container.appendChild(card);
  });

  const card = document.createElement('div');
  card.className = 'h-auto w-80 lg:w-100 inline-block transition-all duration-300 ease-in-out transform hover:scale-110'
  card.innerHTML = `
    <div class="container w-60">
        <div class="flex flex-col rounded-2xl border border-gray-200 bg-gray-400 p-3 gap-3">
            <h1 class="text-gray-300 text-[22px] px-2"><b>Crafting Your Perfect Travel Experience</b></h1>
            <div class="flex flex-row place-items-center justify-between bg-black rounded-2xl px-4">
                <div class="flex- flex-col text-white text-[13px] py-2">
                    <p>Browse</p>
                    <p>All destinations</p>
                </div>
                <button class="bg-white rounded-full hover:cursor-pointer">
                    <img class="p-2" src="../../assets/img/main/right-arrow.png" alt="">
                </button>
            </div>
        </div>
    </div>
  `;

  container.appendChild(card);

}

//Rendering Hotels Section
function render_hotels(totalData) {
    const container = document.getElementById("hotels");
    container.innerHTML = '';
  
    totalData.hotels.forEach(hotel => {
      const card = document.createElement('div');
      card.className = 'card inline-block align-top rounded-2xl relative w-full transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl';
      card.style.backgroundImage = `url('${hotel.imageUrl}')`;
      card.style.backgroundSize = '100% 80%';
      card.style.backgroundRepeat = 'no-repeat';
      card.style.backgroundBlendMode = 'darken';
      
      card.innerHTML = `
        <img class="bg-gray-200 rounded-full p-1 my-3 right-3 absolute hover:cursor-pointer size-5" src="../../assets/img/main/cards/heart.png" alt="">
          <div class="w-full flex flex-row place-items-center justify-end px-3 md:bottom-32 absolute">
            <div class="bg-white flex flex-row place-items-center gap-1 rounded-full px-2 py-1.5">
              <img class="size-3" src="../../assets/img/main/cards/star.png" alt="">
              <p class="text-[11px]"><b>${hotel.rating}</b></p>
              <p class="text-gray-600 text-[11px]">(${hotel.numberOfReviews} reviews)</p>
            </div>
          </div>
          <div class="bg-white flex flex-col place-items-start gap-2 flex-wrap rounded-2xl mt-51 p-5 border border-gray-200">
            <p class="text-[15px] p-0"><b>${hotel.heading}</b></p>
            <p class="text-[12px]">${hotel.subtext}</p>
            <div class="flex flex-row place-items-center justify-between w-full">
              <span class="flex flex-row place-items-center">
                <p class="text-black text-[14px]"><b>${hotel.price}</b></p>
                <p class="text-[12px]">/person</p>
              </span>
              <button class="px-2 py-1 text-[13px] bg-gray-200 rounded-full hover:cursor-pointer"><b>Book Now</b></button>
            </div>
          </div>
      `;
      container.appendChild(card);
    });
  }

//Rendering Flights Data
function render_flights(totalData) {
    const container1 = document.getElementById("flights1");
    container1.innerHTML = '';

    totalData.flight.forEach(flight => {

        const flightElement = document.createElement('div');
        flightElement.className = 'h-50 flex flex-row transition-all duration-300 ease-in-out transform hover:scale-110';
        flightElement.innerHTML = `
            <div class="card h-full align-top rounded-2xl relative" style="background-image: url('${flight.imageUrl}');
                    background-size: 60% 100%;
                    background-repeat: no-repeat;
                    background-blend-mode:darken;">
                <img class="rounded-full p-1 my-3 left-3 bg-gray-200 absolute hover:cursor-pointer size-6" src="../../assets/img/main/cards/heart.png" alt="">
                <div class="flex flex-row gap-5 h-full w-full ml-40">
                    <div class="bg-white px-4 h-full w-65 flex flex-col place-items-start justify-between flex-wrap rounded-2xl p-5 border border-gray-200">
                        <span class="flex flex-row gap-1.5 place-items-center justify-between w-full">
                            <img src="../../assets/img/main/flights/clock.png" alt="">
                            <p class="text-gray-400 text-[15px]">${flight.startDate}</p>
                            <img src="../../assets/img/main/flights/vertical-divider.png" alt="">
                            <img src="../../assets/img/main/flights/clock.png" alt="">
                            <p class="text-gray-400 text-[15px]">${flight.endDate}</p>
                        </span>
                        <span class="flex flex-row place-items-center justify-between w-full">
                            <p class="text-black text-[16px]"><b>${flight.from}</b></p>
                            <img src="../../assets/img/main/flights/reversable-arrow.png" alt="">
                            <p class="text-black text-[16px]"><b>${flight.to}</b></p>
                        </span>
                        <span class="flex flex-row place-items-center justify-between w-full">
                            <div>   
                                <p class="text-gray-400 text-[11px]">${flight.subText1}</p>
                                <p class="text-black text-[16px]"><b>${flight.price1}</b></p>
                            </div>
                            <img src="../../assets/img/main/flights/horizontal-divider.png" alt="">
                            <div>
                                <p class="text-gray-400 text-[11px]">${flight.subText2}</p>
                                <p class="text-black text-[16px]"><b>${flight.price2}</b></p>
                            </div>
                        </span>
                        <span class="flex flex-row place-items-center justify-between w-full">
                            <p class="text-gray-400 text-[11px]">${flight.seatsLeft}</p>
                            <button class="px-2 py-1 text-[11px] bg-gray-200 rounded-full hover:cursor-pointer"><b>Book Now</b></button>
                        </span>
                    </div>
                </div>
            </div>
        `;
        container1.appendChild(flightElement);
    });

    const container2 = document.getElementById("flights2");
    container2.innerHTML = '';

    totalData.flight.forEach(flight => {

        const flightElement = document.createElement('div');
        flightElement.className = 'h-50 flex flex-row transition-all duration-300 ease-in-out transform hover:scale-110';
        flightElement.innerHTML = `
            <div class="card h-full align-top rounded-2xl relative" style="background-image: url('${flight.imageUrl}');
                    background-size: 60% 100%;
                    background-repeat: no-repeat;
                    background-blend-mode:darken;">
                <img class="rounded-full p-1 my-3 left-3 bg-gray-200 absolute hover:cursor-pointer size-6" src="../../assets/img/main/cards/heart.png" alt="">
                <div class="flex flex-row gap-5 h-full w-full ml-40">
                    <div class="bg-white px-4 h-full w-65 flex flex-col place-items-start justify-between flex-wrap rounded-2xl p-5 border border-gray-200">
                        <span class="flex flex-row gap-1.5 place-items-center justify-between w-full">
                            <img src="../../assets/img/main/flights/clock.png" alt="">
                            <p class="text-gray-400 text-[15px]">${flight.startDate}</p>
                            <img src="../../assets/img/main/flights/vertical-divider.png" alt="">
                            <img src="../../assets/img/main/flights/clock.png" alt="">
                            <p class="text-gray-400 text-[15px]">${flight.endDate}</p>
                        </span>
                        <span class="flex flex-row place-items-center justify-between w-full">
                            <p class="text-black text-[16px]"><b>${flight.from}</b></p>
                            <img src="../../assets/img/main/flights/reversable-arrow.png" alt="">
                            <p class="text-black text-[16px]"><b>${flight.to}</b></p>
                        </span>
                        <span class="flex flex-row place-items-center justify-between w-full">
                            <div>   
                                <p class="text-gray-400 text-[11px]">${flight.subText1}</p>
                                <p class="text-black text-[16px]"><b>${flight.price1}</b></p>
                            </div>
                            <img src="../../assets/img/main/flights/horizontal-divider.png" alt="">
                            <div>
                                <p class="text-gray-400 text-[11px]">${flight.subText2}</p>
                                <p class="text-black text-[16px]"><b>${flight.price2}</b></p>
                            </div>
                        </span>
                        <span class="flex flex-row place-items-center justify-between w-full">
                            <p class="text-gray-400 text-[11px]">${flight.seatsLeft}</p>
                            <button class="px-2 py-1 text-[11px] bg-gray-200 rounded-full hover:cursor-pointer"><b>Book Now</b></button>
                        </span>
                    </div>
                </div>
            </div>
        `;
        container2.appendChild(flightElement);
    });
}

//Rendering Testimonial Section
function render_testimonials(totalData) {
    const container = document.getElementById('testimonials');
    container.innerHTML = '';

    totalData.testimonials.forEach(testimonial => {
        const testimonialElement = document.createElement('div');
        testimonialElement.className = 'bg-white rounded-2xl w-70 h-75 flex flex-col py-4 px-5 hover:shadow-2xl';
        testimonialElement.innerHTML = `
            <div class="flex flex-row px-4 py-5 border-b border-gray-200 justify-between place-items-center">
                <span class="flex flex-row gap-2 place-items-center">
                    <img src="${testimonial.imageUrl}" alt="">
                    <span class="flex flex-col gap-1 text-black">
                        <p class="text-[15px]"><b>${testimonial.name}</b></p>
                        <p class="text-[11px]">${testimonial.place}</p>
                    </span>
                </span>
                <div class="flex flex-col justify-between h-full">
                    <div></div>
                    <span class="flex flex-row ">
                        <img src="../../assets/img/main/clients/star.png" alt="">
                        <img src="../../assets/img/main/clients/star.png" alt="">
                        <img src="../../assets/img/main/clients/star.png" alt="">
                        <img src="../../assets/img/main/clients/star.png" alt="">
                        <img src="../../assets/img/main/clients/star.png" alt="">
                    </span>
                </div>
            </div>
            <p class="text-gray-400 text-[12px] py-4 px-4">${testimonial.text}</p>
        `;
        container.appendChild(testimonialElement);
    });
}

//Rendering News Section
function render_news(totalData) {
    const container = document.getElementById("news");
    container.innerHTML = '';
  
    totalData.news.forEach(newsItem => {
      const newsElement = document.createElement('div');
      newsElement.className = 'h-auto inline-block transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl';
      newsElement.innerHTML = `
        <div class="card inline-block align-top rounded-2xl relative w-full" style="background-image: url('${newsItem.backgroundImageUrl}');
        background-size: 100% 80%;
        background-repeat: no-repeat;
        background-blend-mode:darken;">
          <div class="flex flex-row justify-between w-full absolute place-items-center flex-wrap px-5">
            <p class="bg-gray-50 rounded-full px-2 py-1 place-items-center text-[11px]"><b>${newsItem.type}</b></p>
            <img class="bg-gray-200 rounded-full p-1 my-3 hover:cursor-pointer size-5" src="../../assets/img/main/cards/heart.png" alt="">
          </div>
          <div class="bg-white flex flex-col place-items-start gap-2 flex-wrap rounded-2xl mt-51 p-5 border border-gray-200">
            <div class="flex flex-row justify-around w-full place-items-center text-[10px]">
              <span class="flex flex-row justify-around">
                <img src="../../assets/img/main/news/calendar.png" alt="">
                <p>${newsItem.date}</p>
              </span>
              <span class="flex flex-row justify-around place-items-center">
                <img src="../../assets/img/main/news/time.png" alt="">
                <p>${newsItem.time}</p>
              </span>
              <span class="flex flex-row justify-around place-items-center">
                <img src="../../assets/img/main/news/comment.png" alt="">
                <p>${newsItem.comments}</p>
              </span>
            </div>
            <p class="text-[15px] p-0"><b>${newsItem.textHeading}</b></p>
            <div class="flex flex-row place-items-center justify-between w-full">
              <span class="flex flex-row place-items-center gap-1">
                <img src="${newsItem.userImageUrl}" class="rounded-full" alt="">
                <p class="text-[12px] text-black"><b>${newsItem.userName}</b></p>
              </span>
              <button class="px-2 py-1 text-[13px] bg-gray-200 rounded-full hover:cursor-pointer"><b>Keep Reading</b></button>
            </div>
          </div>
        </div>
      `;
      container.appendChild(newsElement);
    });
}


window.onload = function() {

    //fetching packages data
    fetch('../../assets/json/packages.json')
        .then(response => {
            // Check if the request is successful
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Parse the response as JSON
        })
        .then(data => {
            console.log('Data fetched successfully:', data);
            render_packages(data);
            return data;
        })
        .catch(error => {
            // Handle any errors in fetching or processing data
            console.error('Error fetching data:', error);
        });

    //Fetching Destinations Data
    fetch('../../assets/json/destinations.json')
        .then(response => {
            // Check if the request is successful
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Parse the response as JSON
        })
        .then(data => {
            console.log('Data fetched successfully:', data);
            render_destinations(data);
            return data;
        })
        .catch(error => {
            // Handle any errors in fetching or processing data
            console.error('Error fetching data:', error);
        });

    //Fetching Hotels Data
    fetch('../../assets/json/hotels.json')
        .then(response => {
            // Check if the request is successful
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Parse the response as JSON
        })
        .then(data => {
            console.log('Data fetched successfully:', data);
            render_hotels(data);
            return data;
        })
        .catch(error => {
            // Handle any errors in fetching or processing data
            console.error('Error fetching data:', error);
        });
    
    //Fetching Flights Data
    fetch('../../assets/json/flights.json')
        .then(response => {
            // Check if the request is successful
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Parse the response as JSON
        })
        .then(data => {
            console.log('Data fetched successfully:', data);
            render_flights(data);
            return data;
        })
        .catch(error => {
            // Handle any errors in fetching or processing data
            console.error('Error fetching data:', error);
        });

    //Fetching Testimonials Data
    fetch('../../assets/json/testimonials.json')
        .then(response => {
            // Check if the request is successful
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Parse the response as JSON
        })
        .then(data => {
            console.log('Data fetched successfully:', data);
            render_testimonials(data);
            return data;
        })
        .catch(error => {
            // Handle any errors in fetching or processing data
            console.error('Error fetching data:', error);
        });

    //Fetching News Data
    fetch('../../assets/json/news.json')
        .then(response => {
            // Check if the request is successful
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Parse the response as JSON
        })
        .then(data => {
            console.log('Data fetched successfully:', data);
            render_news(data);
            return data;
        })
        .catch(error => {
            // Handle any errors in fetching or processing data
            console.error('Error fetching data:', error);
        });

}