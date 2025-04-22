// ==============================
// User Registration and Authentication
// ==============================
$(document).ready(function() {
    // Handle User Registration
    $('#register-form').submit(function(e) {
        e.preventDefault();
        
        const email = $('#email').val();
        const password = $('#password').val();

        if (email && password) {
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userPassword', password);
            
            alert('Registration successful! You can now register for events.');
            $('#register-form')[0].reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
});

// ==============================
// Admin Event Management
// ==============================

let events = [];

// Display events dynamically
function displayEvents() {
    let eventList = $('#event-list');
    eventList.empty();
    
    events.forEach((event, index) => {
        eventList.append(`
            <div class="card mb-3">
                <div class="card-body">
                    <h5>${event.name}</h5>
                    <p>${event.date}</p>
                    <p>${event.description}</p>
                    <button class="btn btn-warning" onclick="editEvent(${index})">Modify</button>
                    <button class="btn btn-danger" onclick="deleteEvent(${index})">Delete</button>
                </div>
            </div>
        `);
    });
}

// Handle event form submission
$('#event-form').submit(function(e) {
    e.preventDefault();

    const name = $('#event-name').val();
    const date = $('#event-date').val();
    const description = $('#event-description').val();

    if (name && date && description) {
        events.push({ name, date, description });
        displayEvents();
        
        $('#event-form')[0].reset();
        alert('Event added successfully!');
    } else {
        alert('Please fill all fields.');
    }
});

// Modify an existing event
function editEvent(index) {
    const event = events[index];

    $('#event-name').val(event.name);
    $('#event-date').val(event.date);
    $('#event-description').val(event.description);

    events.splice(index, 1);
    displayEvents();
}

// Delete an event
function deleteEvent(index) {
    if (confirm("Are you sure you want to delete this event?")) {
        events.splice(index, 1);
        displayEvents();
    }
}

// ==============================
// Event Registration
// ==============================
function registerForEvent(eventName) {
    const userEmail = localStorage.getItem('userEmail');

    if (userEmail) {
        alert(`You have successfully registered for ${eventName}`);
    } else {
        alert('Please sign up or log in to register for events.');
    }
}

// ==============================
// Post-event Feedback and Rating
// ==============================
function submitFeedback() {
    const feedback = $('#feedback').val();
    
    if (feedback) {
        alert('Thank you for your feedback!');
        $('#feedback').val('');
    } else {
        alert('Please write your feedback before submitting.');
    }
}

// ==============================
// Smooth Scrolling Animation
// ==============================
$(document).ready(function() {
    $('.nav-link').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 800);
    });
});

// ==============================
// Animations on Scroll
// ==============================
$(window).scroll(function() {
    $('.event-card').each(function() {
        const position = $(this).offset().top;
        const windowHeight = $(window).height();
        const scrollTop = $(window).scrollTop();

        if (scrollTop + windowHeight > position + 100) {
            $(this).addClass('animate__fadeInUp');
        }
    });
});
