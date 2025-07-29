# Project To-do List
1. [Frontend Development Tasks](#1-frontend-development-tasks)
2. [Backend Development Tasks](#2-backend-development-tasks)
3. [AI Chatbot Development Tasks](#3-ai-chatbot-development-tasks)
## 1. Frontend Development Tasks
### 1.1 Design and build the main page knowledge modules area
Show different knowledge blocks on the homepage, clearly grouped by user type (e.g., beginners, heat pump users, troubleshooting, government support), so users can quickly find what interests them.

### 1.2 Implement click interaction for knowledge blocks
When a user clicks on a knowledge block, the frontend should call the backend API to get related articles or videos and display the content smoothly.

### 1.3 Build search input and submission
Allow users to type questions into the search bar and send their queries to the backend when they submit.

### 1.4 Enable search results to lead to AI chat page
After submitting a search, automatically redirect users to the AI chat interface where they can interact with the chatbot based on their question.

### 1.5 Design and develop the AI chat page UI
Create the chat window, input box, send button, and other basic UI components so users can easily chat with the AI.

### 1.6 Integrate chat message display and input logic
Support real-time showing of user messages and AI replies for a smooth conversational experience.

### 1.7 Implement asynchronous calls to backend AI API
Send user questions to the backend AI service and receive/display AI-generated answers asynchronously.

## 2. Backend Development Tasks
### 2.1 Design database schema
Create tables for the knowledge base (storing titles, categories, article/video links) and optionally a query log table to anonymously track user searches for analysis.

### 2.2 Develop API for knowledge base
Provide endpoints to get article/video links based on knowledge block IDs or categories for the frontend to use.

### 2.3 Build search request API
Receive search queries from the frontend and forward them to the AI chat module to get intelligent answers.

### 2.4 Integrate third-party AI service API
Implement logic to connect with OpenAI or other AI providers, send user questions to the AI model, and get responses.

### 2.5 Implement security measures
Add protections such as API rate limiting, input validation, and request filtering to keep the system secure and stable.

### 2.6 Deploy and test backend services
Make sure all APIs work correctly, support frontend needs, and meet performance and security requirements.

## 3. AI Chatbot Development Tasks
### 3.1 Design and refine chat prompt templates
Limit the AI’s answer scope to ensure it responds professionally and accurately, avoiding unrelated or confusing replies.

### 3.2 Prepare initial training data or sample Q&A pairs
Gather example questions and answers to train or fine-tune the AI model for better results.

### 3.3 Test chat functionality using OpenAI API
Evaluate how well the AI answers questions and verify that basic chat works as expected.

### 3.4 Integrate the model
Deploy the model for backend API use.

## 4. Future Enhancements (Lower Priority)
### 4.1 Add user identity dropdown in search bar and track search behavior
Let users select their identity (e.g., beginner, expert) before searching, and collect anonymous statistics to improve content recommendations.

### 4.2 Dynamically update and highlight popular knowledge blocks
Adjust the homepage display of knowledge blocks based on what users search for most.

### 4.3 Implement responsive UI design for multiple devices
Make sure the website looks and works well on phones, tablets, and different screen sizes.

<!-- ### 4.4 Develop user feedback collection and analysis
Provide a way for users to submit feedback to help improve the system continuously.-->