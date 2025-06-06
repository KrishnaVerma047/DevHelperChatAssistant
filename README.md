# DevHelper
DevHelper is an intelligent, customizable AI assistant built with .NET 8 and Mistral AI APIs. Designed for developers, it provides accurate, context-aware technical help in programming, DevOps, cloud, and software engineering — all through a natural chat interface.

🚀 Features
Dynamic System Prompt Loading — Instantly update assistant behavior without restarting the backend.
Contextual Chat Memory — Session-based message history for deeper, personalized conversations.
Multi-Persona Support — Switch between roles like DevHelper, Code Reviewer, or Bug Fixer dynamically.
Formatted, Structured Responses — Answers in clear paragraphs and bullet points for better readability.
Greeting Detection — Friendly and varied greeting replies to make chat feel natural.
Long-Form Responses on Demand — Supports detailed answers when explicitly requested.
Developer-Centric Design — Tailored for real-world use in full-stack development, debugging, and code reviews.

💡 Ideal For
Developer platforms & internal tools
VS Code extensions or IDE integrations
Technical customer support bots
Team-based productivity boosters

🛠️ Tech Stack
Backend: ASP.NET Core 8
AI Model: Mistral (via https://api.mistral.ai)
Language: C#
Storage: In-memory session handling (customizable for DB persistence)

📁 Structure
Services/MistralService.cs – Handles API calls and chat logic
Controllers/ChatController.cs – REST endpoint for asking questions
Prompts/devhelper.txt – Editable prompt file for assistant behavior
Models/Message.cs – Role/content structure for messages
appsettings.json – API key and config




To use the DevHelp, insert an API Key inside the File "appsettings.json". And for that API Key, you have to create an experimental account.

To create an experimental account with Mistral AI and obtain an API key, follow these steps:

📝 Step 1: Register for a Mistral AI Account
Navigate to the Mistral AI registration page.
Fill in your details:

Email Address
Password
First Name
Last Name
Alternatively, you can sign up using your Apple, Google, or Microsoft account.
Click on Sign Up to create your account.

📧 Step 2: Verify Your Email Address
Check your inbox for a verification email from Mistral AI.
Click on the verification link provided in the email to confirm your account.

💳 Step 3: Set Up Billing Information
Log in to your account at console.mistral.ai.
Navigate to the Billing section.
Add your payment information to activate payments on your account.

🧪 Step 4: Choose the "Experiment" Plan
In the Limits tab of the console, click on Choose a plan.
Select the Experiment plan, which is free.
You may be prompted to verify your phone number via SMS.
Follow the on-screen instructions to complete the plan activation.

🔑 Step 5: Generate an API Key
In the console, go to the API Keys section.
Click on Create new key.
Provide a name for your API key and click Create Key.
Copy and securely store your API key; it will be used to authenticate your API requests.
