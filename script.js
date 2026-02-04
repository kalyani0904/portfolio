// Simple Portfolio JavaScript

$(document).ready(function() {
    // Smooth scrolling for navigation links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        
        var target = this.hash;
        var $target = $(target);
        
        // Update active nav link
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
        
        // If target is a tab, switch to it
        if ($target.hasClass('tab-pane')) {
            var tabId = $(this).attr('href');
            $('.nav-tabs button[data-bs-target="' + tabId + '"]').tab('show');
        }
        
        // Scroll to section
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 70
        }, 500, 'swing');
    });
    
    // Contact form submission
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
        
        // Simple validation
        if (name && email && message) {
            // In a real application, you would send this data to a server
            alert('Thank you, ' + name + '! Your message has been sent. I\'ll get back to you soon.');
            
            // Reset form
            $('#contactForm')[0].reset();
            
            // Switch to contact tab if not already
            $('.nav-tabs button[data-bs-target="#projects"]').tab('show');
        } else {
            alert('Please fill in all fields.');
        }
    });
    
    // Add animation to skill items on hover
    $('.skill-item').hover(
        function() {
            $(this).addClass('shadow-sm');
        },
        function() {
            $(this).removeClass('shadow-sm');
        }
    );
    
    // Update active nav based on scroll position
    $(window).on('scroll', function() {
        var scrollPos = $(document).scrollTop() + 100;
        
        // Check which section is in view
        $('section').each(function() {
            var sectionTop = $(this).offset().top;
            var sectionBottom = sectionTop + $(this).outerHeight();
            
            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                var sectionId = $(this).attr('id');
                $('.navbar-nav .nav-link').removeClass('active');
                $('.navbar-nav .nav-link[href="#' + sectionId + '"]').addClass('active');
            }
        });
    });
    
    // Initialize tooltips (if using Bootstrap tooltips)
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Tab switching animation
    $('button[data-bs-toggle="tab"]').on('shown.bs.tab', function(e) {
        var target = $(e.target).attr('href'); // activated tab
        
        // Update navbar active state
        $('.navbar-nav .nav-link').removeClass('active');
        var navLink = $('.navbar-nav .nav-link[href="' + target + '"]');
        if (navLink.length) {
            navLink.addClass('active');
        } else {
            // If it's a subtab, find parent tab
            $('.navbar-nav .nav-link[href="#projects"]').addClass('active');
        }
    });
    
    // Simple console greeting
    console.log('Welcome to Kalyani Rathod\'s Portfolio!');
    console.log('Feel free to explore my skills and projects.');
});