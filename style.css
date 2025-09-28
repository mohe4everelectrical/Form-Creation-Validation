<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Registration Form</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f5f5f5;
            margin: 0;
        }

        form {
            background: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 400px;
        }

        label {
            margin-bottom: 5px;
            font-weight: bold;
            color: #333;
            display: block;
        }

        input {
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 4px;
            width: calc(100% - 22px); /* Adjust width to account for padding and border */
            box-sizing: border-box; /* Include padding and border in element's total width and height */
        }

        button {
            background-color: #007bff;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            cursor: pointer;
            width: 100%;
            box-sizing: border-box;
            transition: background-color 0.3s ease;
        }

        button:hover {
            background-color: #0056b3;
        }

        #form-feedback {
            margin-top: 10px;
            padding: 10px;
            color: #d8000c;
            background-color: #ffbaba;
            border-radius: 4px;
            display: none; /* Initially hide the feedback div */
        }

        .success {
            color: #28a745 !important;
            background-color: #d4edda !important;
        }
    </style>
</head>
<body>
    <form id="registration-form">
        <label for="username">Username:</label>
        <input type="text" id="username" required>

        <label for="email">Email:</label>
        <input type="email" id="email" required>

        <label for="password">Password:</label>
        <input type="password" id="password" required>

        <button type="submit">Register</button>
        <div id="form-feedback"></div>
    </form>
    
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Form Selection
            const form = document.getElementById('registration-form');
            // Feedback Division Selection
            const feedbackDiv = document.getElementById('form-feedback');
            
            // Form Submission Event Listener
            form.addEventListener('submit', function(event) {
                // Prevent the form from submitting to the server
                event.preventDefault();
                
                // Input Retrieval and Trimming
                const username = document.getElementById('username').value.trim();
                const email = document.getElementById('email').value.trim();
                const password = document.getElementById('password').value.trim();
                
                // Initialize Validation Variables
                let isValid = true;
                const messages = [];
                
                // Username Validation
                if (username.length < 3) {
                    isValid = false;
                    messages.push('Username must be at least 3 characters long.');
                }
                
                // Email Validation
                if (!email.includes('@') || !email.includes('.')) {
                    isValid = false;
                    messages.push('Please enter a valid email address.');
                }
                
                // Password Validation
                if (password.length < 8) {
                    isValid = false;
                    messages.push('Password must be at least 8 characters long.');
                }
                
                // Displaying Feedback
                feedbackDiv.style.display = "block";
                
                if (isValid) {
                    feedbackDiv.textContent = "Registration successful!";
                    feedbackDiv.className = "success";
                } else {
                    feedbackDiv.innerHTML = messages.join('<br>');
                    feedbackDiv.style.color = "#dc3545";
                }
            });
        });
    </script>
</body>
</html>
