
        
        // Hero Slider Functionality
// Hero Slider Functionality
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.slider-dots .dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentIndex = 0;
    let slideInterval;

    // Function to show a specific slide
    function showSlide(index) {
        // Wrap around if at ends
        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }

        // Update slides
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === currentIndex);
        });

        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    // Next slide function
    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    // Previous slide function
    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    // Start the auto-slide show
    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 3000);
    }

    // Stop the auto-slide show
    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    // Event listeners for buttons
    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopSlideShow();
        startSlideShow();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopSlideShow();
        startSlideShow();
    });

    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            stopSlideShow();
            startSlideShow();
        });
    });

    // Pause on hover
    const hero = document.querySelector('.hero');
    hero.addEventListener('mouseenter', stopSlideShow);
    hero.addEventListener('mouseleave', startSlideShow);

    // Initialize the slider
    showSlide(0);
    startSlideShow();
}

// Update your init function to include the slider
function init() {
    loadRooms();
    setMinDates();
    initHeroSlider();
}
        // Sample room data - in a real app, this would come from your backend
        var globalRoomPrice = 0; // Base room price
        //var globalChildCharge = 0; // Extra charge per child
        const rooms = [
            {
                id: 1,
                title: "Deluxe",
                roomType: "deluxe",
                description: "Our Deluxe Rooms offer a perfect blend of comfort and style. Featuring a king-size bed, luxurious linens, and a spacious bathroom with premium amenities.",
                price: 1800,
                childCharge:300,
                size: "350 sq ft",
                capacity: "2 Adults",
                amenities: ["Free WiFi", "55\" Smart TV", "Coffee Maker", "Air Conditioning", "Rainfall Shower"],
                image: "images/deluxe1.jpeg",
                images : [
    {
      src: "images/deluxe1.jpeg",
      alt: "Room image 1"
    },
    {
      src: "images/deluxe2.jpeg",
      alt: "Room image 2"
    },
    {
      src: "images/deluxe3.jpeg",
      alt: "Room image 3"
    },
    {
      src: "images/deluxe4.jpeg",
      alt: "Room image 4"
    }
  ]
            },
                    {
                id: 2,
                title: "Super Deluxe",
                roomType: "deluxe",
                description: "Our Deluxe Rooms offer a perfect blend of comfort and style. Featuring a king-size bed, luxurious linens, and a spacious bathroom with premium amenities.",
                price: 1800,
                childCharge:300,
                size: "350 sq ft",
                capacity: "2 Adults",
                amenities: ["Free WiFi", "55\" Smart TV", "Coffee Maker", "Air Conditioning", "Rainfall Shower"],
                image: "images/super_deluxe1.jpeg",
                images : [
    {
      src: "images/super_deluxe1.jpeg",
      alt: "Room image 1"
    },
    {
      src: "images/IMG-20250510-WA0006.jpg",
      alt: "Room image 2"
    },
    ,
    {
      src: "images/IMG-20250510-WA0004.jpg",
      alt: "Room image 2"
    }
  ]
            },
            {
                id: 3,
                title: "Executive Suite",
                roomType: "esuite",
                description: "The Executive Suite provides extra space with a separate living area, perfect for business travelers or those seeking additional comfort.",
                price: 7000,
                childCharge:500,
                size: "600 sq ft",
                capacity: "2 Adults, 1 Child",
                amenities: ["Free WiFi", "65\" Smart TV", "Mini Bar", "Air Conditioning", "Jacuzzi", "Work Desk"],
 image: "images/suite1_1.jpeg",
                images : [
    {
      src: "images/suite1_1.jpeg",
      alt: "Room image 1"
    },
    {
      src: "images/suite1_2.jpeg",
      alt: "Room image 2"
    },
    {
      src: "images/IMG-20250510-WA0015.jpg",
      alt: "Room image 3"
    }
  ]            },
            {
                id: 4,
                title: "Presidential Suite",
                roomType: "psuite",
                description: "Our most luxurious accommodation, the Presidential Suite features a spacious bedroom, living room, dining area, and stunning city views.",
                price: 8000,
                childCharge:500,
                size: "1200 sq ft",
                capacity: "4 Adults, 2 Children",
                amenities: ["Free WiFi", "75\" Smart TV", "Full Kitchen", "Air Conditioning", "Spa Bath", "Butler Service"],
image: "images/suite2_1.jpeg",
                images : [
    {
      src: "images/suite2_1.jpeg",
      alt: "Room image 1"
    },
    {
      src: "images/suite2_3.jpg",
      alt: "Room image 2"
    },
    {
      src: "images/IMG-20250510-WA0005.jpg",
      alt: "Room image 3"
    }
  ]            },
  {
                id: 5,
                title: "Family Four",
                roomType: "family4",
                description: "Our Family Rooms offer a perfect blend of comfort and style. Featuring a king-size bed, luxurious linens, and a spacious bathroom with premium amenities.",
                price: 4000,
                childCharge:300,
                size: "350 sq ft",
                capacity: "2 Adults",
                amenities: ["Free WiFi", "55\" Smart TV", "Coffee Maker", "Air Conditioning", "Rainfall Shower"],
                image: "images/family4_1.jpeg",
                images : [
    {
      src: "images/family4_1.jpeg",
      alt: "Room image 1"
    }
  ]
            },
            {
                id: 6,
                title: "Family Five",
                roomType: "family5",
                description: "Our Family Rooms offer a perfect blend of comfort and style. Featuring a king-size bed, luxurious linens, and a spacious bathroom with premium amenities.",
                price: 5000,
                childCharge:300,
                size: "350 sq ft",
                capacity: "2 Adults",
                amenities: ["Free WiFi", "55\" Smart TV", "Coffee Maker", "Air Conditioning", "Rainfall Shower"],
                image: "images/family5_1.jpeg",
                images : [
    {
      src: "images/family5_1.jpeg",
      alt: "Room image 1"
    }
  ]
            },
            {
                id: 7,
                title: "Family Seven",
                roomType: "family7",
                description: "Our Family Rooms offer a perfect blend of comfort and style. Featuring a king-size bed, luxurious linens, and a spacious bathroom with premium amenities.",
                price: 7000,
                childCharge:300,
                size: "350 sq ft",
                capacity: "2 Adults",
                amenities: ["Free WiFi", "55\" Smart TV", "Coffee Maker", "Air Conditioning", "Rainfall Shower"],
                image: "images/Family7_1.jpeg",
                images : [
    {
      src: "images/Family7_1.jpeg",
      alt: "Room image 1"
    },
    {
      src: "images/Family7_2.jpeg",
      alt: "Room image 2"
    }
  ]
            }
        ];

        // DOM Elements
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        //const bookingForm = document.getElementById('bookingForm');
        const roomsGrid = document.getElementById('roomsGrid');
        const roomModal = document.getElementById('roomModal');
        const closeModalBtns = document.querySelectorAll('.close-modal');
        const modalRoomTitle = document.getElementById('modalRoomTitle');
        const modalRoomDescription = document.getElementById('modalRoomDescription');
        const modalRoomAmenities = document.getElementById('modalRoomAmenities');
        const modalRoomPrice = document.getElementById('modalRoomPrice');
        const modalChildCharge = document.getElementById('modalChildCharge');
        const modalTotalPrice = document.getElementById('modalTotalPrice');
        const modalRoomGallery = document.getElementById("modalRoomGallery");
        const modalRoomId = document.getElementById('modalRoomId');
        const modalRoomType = document.getElementById('modalRoomType');
        const modalBookingForm = document.getElementById('modalBookingForm');
        const successModal = document.getElementById('successModal');
        const closeSuccessModal = document.getElementById('closeSuccessModal');
        const successMessage = document.getElementById('successMessage');
        const testimonialSlides = document.querySelectorAll('.testimonial');
        const sliderDots = document.querySelectorAll('.slider-dot');
        const paymentModal = document.getElementById('paymentModal');
        const proceedPaymentModal = document.getElementById('proceedPaymentModal');
        const successMessageGreen =  document.getElementById('successMessageGreen');
        const paymentMessage = document.getElementById('paymentMessage');
        const checkinInput = document.getElementById('modalCheckin');
        const checkoutInput = document.getElementById('modalCheckout');
        const childrenSelect = document.getElementById('modalChildren');
        const childrenValidation = document.getElementById('childrenValidation');
        const gstCheckbox = document.getElementById('modalIncludeGST');
        
        const extraChildCharge = document.getElementById('extraChildCharge');
        const extraChildChargeLabel = document.getElementById('extraChildChargeLabel');
        
        const extraChildAmount = document.getElementById('extraChildAmount');
        const roomCharges = document.getElementById('roomCharges');
        const roomChargesAmount = document.getElementById('roomChargesAmount');
        const roomChargesLabel = document.getElementById('roomChargesLabel');
        const gstCharge = document.getElementById('gstCharge');
        const gstAmount = document.getElementById('gstAmount');
        const gstChargeLabel = document.getElementById('gstChargeLabel');

        const totalPrice = document.getElementById('modalTotalPrice');

        const gstInput = document.getElementById('modalGSTIN');
        const gstWarning = document.querySelector('.gst-warning');
        let currentSlide = 0;

        // Mobile Menu Toggle
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
function firstAPICallToBackend(){
            
    fetch(`https://royalinnbackend.onrender.com/getAnyResponse`, {
    method: 'GET'
})
.then(response => response.json())
.then(data => {
     
    if (data.success && data) {
        // First Show payment message to collect payment via QR code
        
    } 
})
.catch(error => {
    console.error('Error:', error);
    alert('Booking failed. Please try again.');
});
}
        // Load rooms
        let currentRoomSlide = 0;
let slidesToShow = 3; // Default number of slides to show

function updateSlidesToShow() {
    if (window.innerWidth <= 768) {
        slidesToShow = 1;
    } else if (window.innerWidth <= 1024) {
        slidesToShow = 2;
    } else {
        slidesToShow = 3;
    }
}

function loadRooms() {
    const roomsGrid = document.getElementById('roomsGrid');
    const dotsContainer = document.querySelector('.slider-dots');
    
    roomsGrid.innerHTML = '';
    dotsContainer.innerHTML = '';
    
    // Create room cards
    rooms.forEach((room, index) => {
        const roomCard = document.createElement('div');
        roomCard.className = 'room-card';
        roomCard.innerHTML = `
            <div class="room-img">
                <img src="${room.image}" alt="${room.title}">
            </div>
            <div class="room-details">
                <h3>${room.title}</h3>
                <div class="room-features">
                    <span><i class="fas fa-expand"></i> ${room.size}</span>
                    <span><i class="fas fa-user-friends"></i> ${room.capacity}</span>
                </div>
                <div class="room-price">
                    <span class="price">₹${room.price} <span>/ night</span></span>
                    <a href="#" class="view-btn" data-room="${room.id}">View Details</a>
                </div>
            </div>
        `;
        roomsGrid.appendChild(roomCard);
        
        // Create dots for navigation
        const dot = document.createElement('span');
        dot.classList.add('room-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    // Add event listeners to view buttons
    document.querySelectorAll('.view-btn[data-room]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const roomId = parseInt(btn.getAttribute('data-room'));
            openRoomModal(roomId);
        });
    });
    
    // Add event listeners to navigation buttons
    document.querySelector('.room-prev-btn').addEventListener('click', roomPrevSlide);
    document.querySelector('.room-next-btn').addEventListener('click', RoomNextSlide);
    
    // Update responsive settings
    updateSlidesToShow();
    window.addEventListener('resize', () => {
        updateSlidesToShow();
        updateSlider();
    });
    
    // Initialize slider position
    updateSlider();
}

function updateSlider() {
    const roomsGrid = document.getElementById('roomsGrid');
    const roomCards = document.querySelectorAll('.room-card');
    const dots = document.querySelectorAll('.room-dot');
    
    if (roomCards.length === 0) return;
    
    // Calculate the maximum slide index
    const maxSlide = Math.max(0, roomCards.length - slidesToShow);
    currentRoomSlide = Math.min(currentRoomSlide, maxSlide);
    
    // Update slide position
    const cardWidth = roomCards[0].offsetWidth + 30; // Include gap
    roomsGrid.style.transform = `translateX(-${currentRoomSlide * cardWidth}px)`;
    
    // Update active dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index >= currentRoomSlide && index < currentRoomSlide + slidesToShow);
    });
}

function RoomNextSlide() {
    const roomCards = document.querySelectorAll('.room-card');
    const maxSlide = Math.max(0, roomCards.length - slidesToShow);
    
    currentRoomSlide = (currentRoomSlide >= maxSlide) ? 0 : currentRoomSlide + 1;
    updateSlider();
}

function roomPrevSlide() {
    const roomCards = document.querySelectorAll('.room-card');
    const maxSlide = Math.max(0, roomCards.length - slidesToShow);
    
    currentRoomSlide = (currentRoomSlide <= 0) ? maxSlide : currentRoomSlide - 1;
    updateSlider();
}

function goToSlide(index) {
    currentRoomSlide = Math.min(index, document.querySelectorAll('.room-card').length - slidesToShow);
    updateSlider();
}

// Optional: Auto-advance slides
let slideInterval;

function startAutoSlide() {
    slideInterval = setInterval(RoomNextSlide, 5000);
}

function stopAutoSlide() {
    clearInterval(slideInterval);
}

// Start auto-slide when page loads
window.addEventListener('load', () => {
    loadRooms();
    startAutoSlide();
    
    // Pause auto-slide when hovering over slider
    document.querySelector('.rooms-slider-container').addEventListener('mouseenter', stopAutoSlide);
    document.querySelector('.rooms-slider-container').addEventListener('mouseleave', startAutoSlide);
});

        // Open room modal
        function openRoomModal(roomId) {
            const room = rooms.find(r => r.id === roomId);
            if (!room) return;

            modalRoomTitle.textContent = room.title;
            modalRoomDescription.textContent = room.description;
            //modalTotalPrice.innerHTML = `$${room.price} <span>/ night</span>`;
            modalRoomId.value = room.id;
            modalRoomType.value = room.roomType;
            modalRoomPrice.value = room.price; // Base room price
            modalChildCharge.value = room.childCharge; // Extra charge per child
            validateDates();
            // Set Room Images dynamically for selected room
            updateGallery(room);
            // modalRoomGallery.innerHTML = "";

            // room.images.forEach((imgData, index) => {
            // const img = document.createElement("img");
            // img.src = imgData.src;
            // img.alt = imgData.alt;
            // img.className = index === 0 ? "gallery-slide active" : "gallery-slide";
            // modalRoomGallery.appendChild(img);
            // });
            // Set amenities
            // modalRoomAmenities.innerHTML = '';
            // room.amenities.forEach(amenity => {
            //     const li = document.createElement('li');
            //     li.innerHTML = `<i class="fas fa-check"></i> ${amenity}`;
            //     modalRoomAmenities.appendChild(li);
            // });

            // Set default dates from main booking form if available
            //const checkin = document.getElementById('checkin').value;
            //const checkout = document.getElementById('checkout').value;
            //const adults = document.getElementById('adults').value;
            //const children = document.getElementById('children').value;

            // if (checkin) document.getElementById('modalCheckin').value = checkin;
            // if (checkout) document.getElementById('modalCheckout').value = checkout;
            // if (adults) document.getElementById('modalAdults').value = adults;
            // if (children) document.getElementById('modalChildren').value = children;
            
            roomModal.style.display = 'block';
            setupDateValidation();
            calculateTotal();
            document.body.style.overflow = 'hidden';
            //Make first api call to the backend so that inactive instance will become active so the next onwards api calls will be served quickly.
            firstAPICallToBackend();
        }

        // Close modal
        function closeModal() {
            roomModal.style.display = 'none';
            successModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Close modals when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === roomModal) {
                closeModal();
            }
            if (e.target === successModal) {
                closeModal();
            }
        });

        // Close modal buttons
        closeModalBtns.forEach(btn => {
            btn.addEventListener('click', closeModal);
        });

        closeSuccessModal.addEventListener('click', closeModal);

        // Booking form submission
        // bookingForm.addEventListener('submit', (e) => {
        //     e.preventDefault();
        //     // In a real app, this would check availability with your backend
        //     // For now, we'll just open the first room modal
        //     openRoomModal(1);
        // });

        // // Modal booking form submission
        // modalBookingForm.addEventListener('submit', (e) => {
        //     e.preventDefault();
            
        //     // Get form data
        //     const formData = new FormData(modalBookingForm);
        //     const bookingData = {
        //         roomId: formData.get('roomId'),
        //         checkin: formData.get('checkin'),
        //         checkout: formData.get('checkout'),
        //         adults: formData.get('adults'),
        //         children: formData.get('children'),
        //         specialRequests: formData.get('specialRequests')
        //     };
            
        //     // In a real app, you would send this to your Google Apps Script backend
        //     // For now, we'll simulate a successful booking
        //     simulateBooking(bookingData);
        // });

        // Simulate booking submission
        function simulateBooking(bookingData) {
            // This is where you would normally call your Google Apps Script
            // For example:
            // const scriptURL = 'YOUR_GOOGLE_SCRIPT_URL';
            // fetch(scriptURL, { method: 'POST', body: JSON.stringify(bookingData) })
            //   .then(response => response.json())
            //   .then(data => {
            //       showSuccessModal(data);
            //   })
            //   .catch(error => {
            //       console.error('Error:', error);
            //   });
            
            // For demo purposes, we'll just show a success message
            const room = rooms.find(r => r.id === parseInt(bookingData.roomId));
            const checkinDate = new Date(bookingData.checkin).toLocaleDateString();
            const checkoutDate = new Date(bookingData.checkout).toLocaleDateString();
            
            successMessage.innerHTML = `
                Your reservation for the <strong>${room.title}</strong> has been confirmed.<br><br>
                <strong>Check-in:</strong> ${checkinDate}<br>
                <strong>Check-out:</strong> ${checkoutDate}<br>
                <strong>Guests:</strong> ${bookingData.adults} Adults, ${bookingData.children} Children
            `;
            
            closeModal(); // Close the room modal
            successModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        // Testimonial slider
        function showSlide(n) {
            testimonialSlides.forEach(slide => slide.classList.remove('active'));
            sliderDots.forEach(dot => dot.classList.remove('active'));
            
            currentSlide = (n + testimonialSlides.length) % testimonialSlides.length;
            testimonialSlides[currentSlide].classList.add('active');
            sliderDots[currentSlide].classList.add('active');
        }

        sliderDots.forEach((dot, index) => {
            dot.addEventListener('click', () => showSlide(index));
        });

        // Auto-advance testimonials
        setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000);

        // Set minimum dates for booking forms
        function setMinDates() {
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            
            const formatDate = (date) => {
                return date.toISOString().split('T')[0];
            };
            
            //document.getElementById('checkin').min = formatDate(today);
            //document.getElementById('checkout').min = formatDate(tomorrow);
            document.getElementById('modalCheckin').min = formatDate(today);
            document.getElementById('modalCheckout').min = formatDate(tomorrow);
        }

        // Initialize the page
        // function init() {
        //     loadRooms();
        //     setMinDates();
        // }

        // Run when DOM is loaded
        document.addEventListener('DOMContentLoaded', init);

        //Script for new modalroombookingform
        const gstRate = 0.125; // 12.5% GST
        
        
        // Add this JavaScript to handle the dynamic pricing
    document.addEventListener('DOMContentLoaded', function() {
        
        // const gstRate = 0.125; // 12.5% GST
        
        // const childrenSelect = document.getElementById('modalChildren');
        // const gstCheckbox = document.getElementById('modalIncludeGST');
        // //const gstInput = document.getElementById('modalGSTIN');
        
        // const extraChildCharge = document.getElementById('extraChildCharge');
        // const extraChildAmount = document.getElementById('extraChildAmount');
        // const gstCharge = document.getElementById('gstCharge');
        // const gstAmount = document.getElementById('gstAmount');
        // const totalPrice = document.getElementById('modalTotalPrice');

        // // GSTIN Validation
        // const gstInput = document.getElementById('modalGSTIN');
        // const gstWarning = document.querySelector('.gst-warning');
        
        
       
        
        // Toggle GSTIN field visibility
        gstCheckbox.addEventListener('change', function() {
            gstInput.style.display = this.checked ? 'block' : 'none';
            if (!this.checked) {
                gstInput.value = '';
                gstInput.removeAttribute('required');
            }else{ 
              gstInput.setAttribute('required', '');
            }
            calculateTotal();
        });
        
        // Validate GSTIN when entered
        gstInput.addEventListener('input', function() {
            validateGSTIN();
            calculateTotal();
        });
        
        // Calculate total when children count changes
        childrenSelect.addEventListener('change', calculateTotal);
        
        

       
        
        // Initial calculation
        //calculateTotal();
    });
     function validateGSTIN() {
            if (!gstCheckbox.checked) return;
            
            const gstin = gstInput.value;
            const isValid = gstin.match(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/);
            
            if (gstin.length > 0 && !isValid) {
                gstInput.classList.add('invalid');
                gstWarning.style.display = 'block';
            } else {
                gstInput.classList.remove('invalid');
                gstWarning.style.display = 'none';
            }
        }

    function calculateTotal() {
            validateGSTIN();
            const childrenCount = parseInt(childrenSelect.value);
            const includeGST = gstCheckbox.checked;
            const gstinValid = gstInput.value.match(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/);
            
            // Calculate child charges
            // Before calculating the child charge checkin and checkout dates has to be filled as this charge will be calculated for total nights(checkout-checkin)
            //const checkin = document.getElementById('checkin').value;
            //const checkout = document.getElementById('checkout').value;
            const checkin = new Date(document.getElementById('modalCheckin').value);
            const checkout = new Date(document.getElementById('modalCheckout').value);

            let totalNightsToStay = 0;
           if (!isNaN(checkin.getTime()) && !isNaN(checkout.getTime())) {
             totalNightsToStay = Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24));
           }

// Now calculate childCharges safely
const childChargeValue = Number(modalChildCharge.value) || 0;
const childCharges = childrenCount * childChargeValue * totalNightsToStay;

roomChargesLabel.innerHTML = `Room Charge(${modalRoomPrice.value} x ${totalNightsToStay} nights):`;
roomChargesAmount.textContent = `₹${(modalRoomPrice.value*(totalNightsToStay))}`;
            if (childrenCount > 0) {
                extraChildCharge.style.display = 'flex';
                extraChildAmount.textContent = `₹${childCharges}`;
                extraChildChargeLabel.innerHTML =  `Extra Child Charge(${childrenCount} x ₹${childChargeValue} x ${totalNightsToStay} nights):`;
            } else {
                extraChildCharge.style.display = 'none';
            }
            
            // Calculate subtotal
            let subtotal = (totalNightsToStay>0)?(+(modalRoomPrice.value*(totalNightsToStay)) + childCharges):(Number(modalRoomPrice.value));
            
            // Calculate GST if applicable
            if (includeGST && gstinValid) {
                const gst = subtotal * gstRate;
                gstCharge.style.display = 'flex';
                gstAmount.textContent = `₹${gst.toFixed(2)}`;
                gstChargeLabel.innerHTML = `GST Charge(₹${subtotal} x  12.5%):`;//this line has to be here only otherwise calculation will be incorrect
                subtotal += gst;
            } else {
                gstCharge.style.display = 'none';
            }
            
            // Update total
            totalPrice.textContent = `₹${subtotal.toFixed(2)}`;
        }

        // Gallery-specific JavaScript with unique variable names
    // document.addEventListener('DOMContentLoaded', function() {
    //     // Gallery elements
    //     const gallerySlides = document.querySelectorAll('.gallery-slide');
    //     const galleryIndicators = document.querySelectorAll('.gallery-indicator');
    //     const galleryPrev = document.querySelector('.gallery-prev');
    //     const galleryNext = document.querySelector('.gallery-next');
    //     let currentGallerySlide = 0;
        
    //     function showGallerySlide(index) {
    //         gallerySlides.forEach(slide => slide.classList.remove('active'));
    //         galleryIndicators.forEach(indicator => indicator.classList.remove('active'));
            
    //         gallerySlides[index].classList.add('active');
    //         galleryIndicators[index].classList.add('active');
    //     }
        
    //     galleryNext.addEventListener('click', () => {
    //         currentGallerySlide = (currentGallerySlide + 1) % gallerySlides.length;
    //         showGallerySlide(currentGallerySlide);
    //     });
        
    //     galleryPrev.addEventListener('click', () => {
    //         currentGallerySlide = (currentGallerySlide - 1 + gallerySlides.length) % gallerySlides.length;
    //         showGallerySlide(currentGallerySlide);
    //     });
        
    //     galleryIndicators.forEach(indicator => {
    //         indicator.addEventListener('click', () => {
    //             currentGallerySlide = parseInt(indicator.getAttribute('data-index'));
    //             showGallerySlide(currentGallerySlide);
    //         });
    //     });
        
    //     // Auto-advance (optional)
    //     let galleryInterval = setInterval(() => {
    //         currentGallerySlide = (currentGallerySlide + 1) % gallerySlides.length;
    //         showGallerySlide(currentGallerySlide);
    //     }, 5000);
        
    //     document.querySelector('.gallery-container').addEventListener('mouseenter', () => {
    //         clearInterval(galleryInterval);
    //     });
        
    //     document.querySelector('.gallery-container').addEventListener('mouseleave', () => {
    //         galleryInterval = setInterval(() => {
    //             currentGallerySlide = (currentGallerySlide + 1) % gallerySlides.length;
    //             showGallerySlide(currentGallerySlide);
    //         }, 5000);
    //     });
        
    //     // Keyboard navigation for gallery
    //     document.addEventListener('keydown', function(e) {
    //         if (document.getElementById('roomModal').style.display === 'block') {
    //             if (e.key === 'ArrowRight') {
    //                 currentGallerySlide = (currentGallerySlide + 1) % gallerySlides.length;
    //                 showGallerySlide(currentGallerySlide);
    //             } else if (e.key === 'ArrowLeft') {
    //                 currentGallerySlide = (currentGallerySlide - 1 + gallerySlides.length) % gallerySlides.length;
    //                 showGallerySlide(currentGallerySlide);
    //             }
    //         }
    //     });
    // });
    // Function to initialize gallery of room modal when open it.
function initGallery() {
    const gallerySlides = document.querySelectorAll('.gallery-slide');
    const galleryIndicators = document.querySelectorAll('.gallery-indicator');
    const galleryPrev = document.querySelector('.gallery-prev');
    const galleryNext = document.querySelector('.gallery-next');
    let currentGallerySlide = 0;
    let galleryInterval;

    function showGallerySlide(index) {
        gallerySlides.forEach(slide => slide.classList.remove('active'));
        galleryIndicators.forEach(indicator => indicator.classList.remove('active'));
        
        gallerySlides[index].classList.add('active');
        galleryIndicators[index].classList.add('active');
    }

    function setupEventListeners() {
        // Clear existing event listeners to avoid duplicates
        galleryNext.replaceWith(galleryNext.cloneNode(true));
        galleryPrev.replaceWith(galleryPrev.cloneNode(true));
        
        const newNext = document.querySelector('.gallery-next');
        const newPrev = document.querySelector('.gallery-prev');

        newNext.addEventListener('click', () => {
            currentGallerySlide = (currentGallerySlide + 1) % gallerySlides.length;
            showGallerySlide(currentGallerySlide);
            resetInterval();
        });
        
        newPrev.addEventListener('click', () => {
            currentGallerySlide = (currentGallerySlide - 1 + gallerySlides.length) % gallerySlides.length;
            showGallerySlide(currentGallerySlide);
            resetInterval();
        });
        
        galleryIndicators.forEach(indicator => {
            indicator.addEventListener('click', () => {
                currentGallerySlide = parseInt(indicator.getAttribute('data-index'));
                showGallerySlide(currentGallerySlide);
                resetInterval();
            });
        });
    }

    function setupAutoAdvance() {
        resetInterval();
        
        const galleryContainer = document.querySelector('.gallery-container');
        galleryContainer.addEventListener('mouseenter', () => {
            clearInterval(galleryInterval);
        });
        
        galleryContainer.addEventListener('mouseleave', () => {
            resetInterval();
        });
    }

    function resetInterval() {
        clearInterval(galleryInterval);
        galleryInterval = setInterval(() => {
            currentGallerySlide = (currentGallerySlide + 1) % gallerySlides.length;
            showGallerySlide(currentGallerySlide);
        }, 5000);
    }

    function setupKeyboardNavigation() {
        document.addEventListener('keydown', function(e) {
            if (document.getElementById('roomModal').style.display === 'block') {
                if (e.key === 'ArrowRight') {
                    currentGallerySlide = (currentGallerySlide + 1) % gallerySlides.length;
                    showGallerySlide(currentGallerySlide);
                    resetInterval();
                } else if (e.key === 'ArrowLeft') {
                    currentGallerySlide = (currentGallerySlide - 1 + gallerySlides.length) % gallerySlides.length;
                    showGallerySlide(currentGallerySlide);
                    resetInterval();
                }
            }
        });
    }

    setupEventListeners();
    setupAutoAdvance();
    setupKeyboardNavigation();
    showGallerySlide(0);
}

// Function to update gallery with new images
function updateGallery(room) {
    const modalRoomGallery = document.querySelector('.gallery-slider');
    const pagination = document.querySelector('.gallery-pagination');
    
    // Clear existing slides
    modalRoomGallery.innerHTML = "";
    pagination.innerHTML = "";
    
    // Add new slides
    room.images.forEach((imgData, index) => {
        const img = document.createElement("img");
        img.src = imgData.src;
        img.alt = imgData.alt;
        img.className = index === 0 ? "gallery-slide active" : "gallery-slide";
        modalRoomGallery.appendChild(img);
        
        // Create new indicators
        const indicator = document.createElement("span");
        indicator.className = index === 0 ? "gallery-indicator active" : "gallery-indicator";
        indicator.setAttribute('data-index', index);
        pagination.appendChild(indicator);
    });
    
    // Reinitialize gallery functionality
    initGallery();
}

// Usage when opening modal with a specific room:
// updateGallery(roomData);
//Modal Booking Form Submission
 // Modal booking form submission
        modalBookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            // Collect all form data
            const checkin = new Date(document.getElementById('modalCheckin').value);
            const checkout = new Date(document.getElementById('modalCheckout').value);

            let totalNightsToStay = 0;
           if (!isNaN(checkin.getTime()) && !isNaN(checkout.getTime())) {
             totalNightsToStay = Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24));
           }
    const formData = {
        roomId: document.getElementById('modalRoomId').value,
        roomType: document.getElementById('modalRoomType').value,
        name: document.getElementById('modalName').value,
        email: document.getElementById('modalEmail').value,
        phone: document.getElementById('modalPhone').value,
        address: document.getElementById('modalAddress').value,
        checkin: document.getElementById('modalCheckin').value,
        checkout: document.getElementById('modalCheckout').value,
        totalNights:totalNightsToStay,
        adults: document.getElementById('modalAdults').value,
        children: document.getElementById('modalChildren').value,
        includeGST: document.getElementById('modalIncludeGST').checked,
        gstin: document.getElementById('modalIncludeGST').checked 
               ? document.getElementById('modalGSTIN').value 
               : null,
        specialRequests: document.getElementById('modalSpecialRequests').value,
        roomBasePrice:parseFloat(document.getElementById('modalRoomPrice').value),
        roomCharge: (document.getElementById('modalRoomPrice').value)*(totalNightsToStay), // Your base room price
        perChildCharge:(document.getElementById('modalChildCharge').value),
        childCharges: parseInt(document.getElementById('modalChildren').value) * (document.getElementById('modalChildCharge').value)*totalNightsToStay,
        gstAmount: document.getElementById('modalIncludeGST').checked
                 ? parseFloat(document.getElementById('gstAmount').textContent.replace('₹', ''))
                 : 0,
        totalAmount: parseFloat(document.getElementById('modalTotalPrice').textContent.replace('₹', ''))
    };

    // Here's where you would send the data to your backend
    console.log('Form data collected:', formData);
    // Set a 4-second timer to show loading
    const loadingTimeout = setTimeout(() => {
        document.getElementById('loadingIcon').style.display = 'flex';
    }, 10); // Show loader after 2 seconds
    
    // Example: Send to Google Apps Script
    //Check room availability
    fetch(`https://royalinnbackend.onrender.com/checkRoomAvailability?checkIn=${formData.checkin}&checkOut=${formData.checkout}&roomType=${formData.roomType}`, {
    method: 'GET'
})
.then(response => response.json())
.then(data => {
     clearTimeout(loadingTimeout); // Stop the timer
     document.getElementById('loadingIcon').style.display = 'none'; // Hide loader if it was shown
    if (data.success && data.data.available) {
        // First Show payment message to collect payment via QR code
        console.log("availability data: "+JSON.stringify(data));
        showPaymentModal(formData);
    } else {
        alert("This Room not available for selected date.");
    }
})
.catch(error => {
    clearTimeout(loadingTimeout);
        document.getElementById('loadingIcon').style.display = 'none';
    console.error('Error:', error);
    alert('Booking failed. Please try again.');
});
    /*
    fetch('YOUR_GOOGLE_SCRIPT_URL', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Show success message
        showSuccessModal();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Booking failed. Please try again.');
    });
    */
    
    // For now just show the collected data
    //alert('Booking successful! Data: ' + JSON.stringify(formData, null, 2));
    
            
            // In a real app, you would send this to your Google Apps Script backend
            // For now, we'll simulate a successful booking
            //simulateBooking(formData);
        });
        // Set up date validation logic
function setupDateValidation() {
    const checkinInput = document.getElementById('modalCheckin');
    const checkoutInput = document.getElementById('modalCheckout');
    
    // Set initial minimum dates
    setMinDates();
    
    // When check-in date changes
    checkinInput.addEventListener('change', function() {
        const checkinDate = new Date(this.value);
        const checkoutDate = new Date(checkoutInput.value);
        
        // If check-out exists and is before new check-in
        if (checkoutInput.value && checkoutDate <= checkinDate) {
            // Set check-out to day after check-in
            const nextDay = new Date(checkinDate);
            nextDay.setDate(nextDay.getDate() + 1);
            checkoutInput.value = nextDay.toISOString().split('T')[0];
        }
        
        // Update check-out min date
        checkoutInput.min = this.value;
        validateDates();
    });
    
    // When check-out date changes
    checkoutInput.addEventListener('change', function() {
        const checkinDate = new Date(checkinInput.value);
        const checkoutDate = new Date(this.value);
        
        // If check-in exists and is after check-out
        if (checkinInput.value && checkoutDate <= checkinDate) {
            // Set check-in to day before check-out
            const prevDay = new Date(checkoutDate);
            prevDay.setDate(prevDay.getDate() - 1);
            checkinInput.value = prevDay.toISOString().split('T')[0];
        }
        validateDates();
    });
}
function showPaymentModal(bookingData){
  console.log("showPayment:"+bookingData);
     const room = rooms.find(r => r.id === parseInt(bookingData.roomId));
            const checkinDate = new Date(bookingData.checkin).toLocaleDateString();
            const checkoutDate = new Date(bookingData.checkout).toLocaleDateString();
            
            paymentMessage.innerHTML = `
                Send payment screenshot to reserve <strong style="color:#8B5A2B;">${room.title}</strong><br><br>
                <strong>Amount:</strong>${bookingData.totalAmount}<br>
                <strong>Check-in:</strong> ${bookingData.checkin}<br>
                <strong>Check-out:</strong> ${bookingData.checkout}<br>
                <strong>Guests:</strong> ${bookingData.adults} Adults, ${bookingData.children} Children
            `;
            
            closeModal(); // Close the room modal
            paymentModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            proceedPaymentModal.addEventListener('click', (e) => {
          paymentModal.style.display = 'none';
          bookRoom(bookingData);
          //showSuccessModal(bookingData);
          });
}
function bookRoom(bookingData){
 
    fetch('https://royalinnbackend.onrender.com/bookRoom', {
        method: 'POST',
        body: JSON.stringify(bookingData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Show success message
        if (data.success && (data.data.updates.updatedRows>0)) {
        // First Show payment message to collect payment via QR code
        console.log("booking data: "+JSON.stringify(data));
        showSuccessModal(bookingData);
    } else {
        console.log("This Room not booked.");
    }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Booking failed. Please try again.');
    });
    
    
}
function showSuccessModal(bookingData){
  console.log("showSuccessModal:"+bookingData);
  const room = rooms.find(r => r.id === parseInt(bookingData.roomId));
            const checkinDate = new Date(bookingData.checkin).toLocaleDateString();
            const checkoutDate = new Date(bookingData.checkout).toLocaleDateString();
            successMessageGreen.innerHTML = `Your reservation for the <strong style="color:#8B5A2B;">${room.title}</strong> has been confirmed.<br><br>`
            successMessage.innerHTML = `
                <strong>Check-in:</strong> ${bookingData.checkin}<br>
                <strong>Check-out:</strong> ${bookingData.checkout}<br>
                <strong>Guests:</strong> ${bookingData.adults} Adults, ${bookingData.children} Children
            `;
            closeModal(); // Close the room modal
            successModal.style.display = 'block';
            document.body.style.overflow = 'hidden';

}
// Simple Slider Functionality
    document.addEventListener('DOMContentLoaded', function() {
        const slides = document.querySelectorAll('.banquet-slide');
        const dots = document.querySelectorAll('.banquet-dot');
        let currentSlide = 0;
        let slideInterval;
        
        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            slides[index].classList.add('active');
            dots[index].classList.add('active');
            currentSlide = index;
        }
        
        function nextSlide() {
            const newIndex = (currentSlide + 1) % slides.length;
            showSlide(newIndex);
        }
        
        // Auto-advance slides
        function startSlider() {
            slideInterval = setInterval(nextSlide, 5000);
        }
        
        // Click on dots
        dots.forEach(dot => {
            dot.addEventListener('click', function() {
                const slideIndex = parseInt(this.getAttribute('data-slide'));
                showSlide(slideIndex);
                clearInterval(slideInterval);
                startSlider();
            });
        });
        
        // Start the slider
        startSlider();
        
        // Pause on hover
        const sliderContainer = document.querySelector('.banquet-slider-container');
        sliderContainer.addEventListener('mouseenter', () => clearInterval(slideInterval));
        sliderContainer.addEventListener('mouseleave', startSlider);
    });

//     const checkinInput = document.getElementById('modalCheckin');
// const checkoutInput = document.getElementById('modalCheckout');
// const childrenSelect = document.getElementById('modalChildren');
// const childrenWarning = document.getElementById('childrenWarning');

// Function to validate dates and enable/disable the children select
function validateDates() {
    const checkinDate = checkinInput.value;
    const checkoutDate = checkoutInput.value;
    
    if (checkinDate && checkoutDate) {
        childrenSelect.disabled = false;
        gstCheckbox.disabled = false;
        //childrenSelect.value = "0"; // reset to 0
        childrenValidation.style.display = 'none';
        roomCharges.style.display = 'flex';
        //gstCheckbox.disabled = false;
        //gstInput.value = '';
        calculateTotal();

    } else {
        childrenSelect.disabled = true;
        childrenSelect.value = "0"; // reset to 0
        childrenValidation.style.display = 'block';
        gstCheckbox.disabled = true;
        roomCharges.style.display = 'none';

    }
}



// Re-validate when either date changes
//checkinInput.addEventListener('change', validateDates);
//checkoutInput.addEventListener('change', validateDates);
   