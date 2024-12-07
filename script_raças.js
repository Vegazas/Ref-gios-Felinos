const API_KEY = 'live_YXxEnskmav2TCk71sinPO3KFpYvhAyHj7Zsq079m8VLIHoaClIHTr8s9eETPLp6O'; // Replace with your API key from TheCatAPI
const API_URL = 'https://api.thecatapi.com/v1/breeds'; // Endpoint to get cat breeds

// Function to fetch cat breeds from TheCatAPI
async function fetchCatBreeds() {
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'x-api-key': API_KEY // Use your API key here
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch cat breeds');
    }

    const data = await response.json();
    displayCatBreeds(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Function to display cat breeds
function displayCatBreeds(breeds) {
  const catBreedsContainer = document.getElementById('cat-breeds');
  catBreedsContainer.innerHTML = ''; // Clear the container before adding new content

  breeds.forEach(breed => {
    const breedCard = document.createElement('div');
    breedCard.classList.add('breed-card');
    breedCard.innerHTML = `
      <img src="${breed.image?.url || 'https://via.placeholder.com/250'}" alt="${breed.name}" />
      <h3>${breed.name}</h3>
    `;
    catBreedsContainer.appendChild(breedCard);
  });
}

// Call the function to fetch and display the breeds
fetchCatBreeds();