async function fetchMeme() {
    const memeContainer = document.getElementById('memeContainer');
    memeContainer.innerHTML = '<p>Loading...</p>'; // Loading message

    try {
        const response = await fetch('https://meme-api.com/gimme');
        if (!response.ok) {
            throw new Error('Failed to fetch meme.');
        }

        const data = await response.json();
        memeContainer.innerHTML = `
            <img src="${data.url}" alt="${data.title}" style="max-width: 100%; border: 2px solid #ccc; border-radius: 10px;">
            <p><strong>${data.title}</strong></p>
        `;
    } catch (error) {
        memeContainer.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
}

// Add event listener to the button
document.getElementById('fetchMemeButton').addEventListener('click', fetchMeme);