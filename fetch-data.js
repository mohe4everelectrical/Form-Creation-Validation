// Initialize the Async Function
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Select the Data Container Element
    const dataContainer = document.getElementById('api-data');
    
    // Add loading animation
    dataContainer.classList.add('loading');

    try {
        // Fetch Data
        const response = await fetch(apiUrl);
        
        // Check if response is ok
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const users = await response.json();
        
        // Clear the Loading Message
        dataContainer.innerHTML = '';
        dataContainer.classList.remove('loading');
        
        // Create success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = `Successfully loaded ${users.length} users`;
        dataContainer.appendChild(successMessage);
        
        // Create and Append User List
        const userList = document.createElement('ul');
        
        // Loop through users and create list items
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
        
        // Append the user list to the container
        dataContainer.appendChild(userList);
        
    } catch (error) {
        // Error Handling
        console.error('Error fetching user data:', error);
        dataContainer.innerHTML = '';
        dataContainer.classList.remove('loading');
        
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.textContent = 'Failed to load user data. Please try again later.';
        dataContainer.appendChild(errorMessage);
    }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);

// Optional: Add refresh functionality
document.addEventListener('DOMContentLoaded', function() {
    const contentDiv = document.getElementById('content');
    
    // Create refresh button
    const refreshButton = document.createElement('button');
    refreshButton.textContent = 'Refresh Data';
    refreshButton.style.cssText = `
        display: block;
        margin: 20px auto;
        padding: 10px 20px;
        background-color: #667eea;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        transition: background-color 0.3s;
    `;
    
    refreshButton.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#5a6fd8';
    });
    
    refreshButton.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#667eea';
    });
    
    refreshButton.addEventListener('click', fetchUserData);
    
    // Insert refresh button after the title
    const title = contentDiv.querySelector('h1');
    contentDiv.insertBefore(refreshButton, title.nextSibling);
});
