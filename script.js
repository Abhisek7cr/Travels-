let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn =>{
    btn.onclick = () =>{
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .video-container .video').src = src;
    }
})


document.querySelector('#book-form form').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const place = document.querySelector('input[placeholder="place name"]').value;
    const date = document.querySelector('input[type="date"]').value;
    const travelers = document.querySelector('input[placeholder="number of travelers"]').value;

    const bookingData = { place, date, travelers };

    try {
        const response = await fetch('http://localhost:5000/api/book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookingData),
        });
        
        const result = await response.json();
        alert(result.message);
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to create booking');
    }
});
