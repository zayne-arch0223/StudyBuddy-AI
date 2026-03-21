LearnSmart AI 🎓
An intelligent, AI-powered learning resource finder designed specifically for high school students. Discover curated textbooks, video lessons, interactive tools, and study materials tailored to your learning style, grade level, and subjects.




￼
📋 Table of Contents
 • Overview
 • Features
 • Demo
 • Installation
 • Usage
 • Project Structure
 • Code Architecture
 • Resource Database
 • Customization
 • Browser Support
 • Contributing
 • License

￼
🎯 Overview
LearnSmart AI is a single-page web application that helps high school learners (Grades 9-12) find the best free educational resources. The application features an intelligent filtering system, AI-generated study schedules, and a curated database of 24+ high-quality learning resources covering Mathematics, Science, Humanities, Languages, Computer Science, Test Prep, and Life Skills.
Why LearnSmart AI?
 • 🆓 100% Free Resources - All materials are open-access and verified
 • 🎨 Learning Style Matching - Adapts to visual, auditory, reading, and interactive learners
 • 🤖 AI Study Planner - Generates personalized study schedules
 • 📱 Responsive Design - Works seamlessly on desktop, tablet, and mobile
 • 🌙 Dark Mode Support - Easy on the eyes for late-night study sessions

￼
✨ Features
1. Smart Search & Multi-Filter System
 • Real-time search across titles, descriptions, tags, and subjects
 • Multi-dimensional filtering:
 ◦ By Subject (Mathematics, Science, Humanities, Languages, Coding, Arts, Test Prep, Life Skills)
 ◦ By Resource Type (Videos, Textbooks, Interactive, Notes)
 ◦ By Grade Level (9-10, 11-12, Test Prep)
 ◦ By Learning Style (Visual, Reading, Interactive, Auditory)
 • Active filter display with one-click removal
2. Curated Resource Database
24+ verified educational resources including:
Mathematics: Khan Academy algebra, openStax calculus, Desmos, Paul's Notes___ Science: Khan Academy Biology, PhET Simulations, Crash Course, MIT physics____ Humanities: Project Gutenberg, Library of Congress, TED-Ed___ Languages: Duolingo, Memrise___ Computer Science: freeCodeCamp, Codecademy, CS50 Harvard, Scratch___ Test Prep: Khan Academy SAT, Quizlet_____ Life Skills: Khan Academy Personal Finance, Everfi___ and many more
3. AI Study Schedule Generator
 • Input subjects and exam dates
 • AI generates time-blocked study plans
 • Alternates learning modalities for optimal retention
 • Recommends specific resources for each study session
4. Adaptive UI/UX
 • GSAP animations for smooth scrolling and transitions
 • Glass morphism design with backdrop filters
 • Floating animations and hover effects
 • Typewriter text effects in hero section
 • Gradient backgrounds with animated color shifts
5. Accessibility Features
 • Semantic HTML5 structure
 • ARIA labels for interactive elements
 • Keyboard navigation support
 • High contrast mode compatibility
 • Screen reader friendly

￼
🚀 Demo
Live Demo
View Live Demo (Deploy to GitHub Pages/Vercel/Netlify)
Screenshots
Hero Section with Smart Search

Resource Filtering Interface

Study Schedule Generator


￼
💻 Installation
Prerequisites
 • Modern web browser (Chrome, Firefox, Safari, Edge)
 • Text editor (VS Code, Sublime Text, etc.) - optional for customization
 • Local server (Live Server extension) - optional for development
Quick Start
1. Clone or Download
￼
2. Open the File
Simply open index.html in your browser:
￼
Or use a local development server:
￼
3. View in Browser
Navigate to http://localhost:8000 or simply open the file directly.
No Build Required! 🎉
This is a pure frontend application - no npm install, no webpack, no build process. Just HTML, CSS, and JavaScript.

￼
📖 Usage Guide
For Students
1. Finding Resources
 ◦ Use the search bar to type keywords (e.g., "AP Calculus", "SAT prep")
 ◦ Click subject buttons to filter by category
 ◦ Select your grade level for age-appropriate content
 ◦ Choose your learning style for personalized recommendations
2. Using the Study Planner
 ◦ Scroll to the "AI Study Schedule Generator" section
 ◦ Enter your subject and exam date
 ◦ Click "Generate My Study Plan"
 ◦ Follow the AI-recommended schedule with suggested resources
3. Saving Resources
 ◦ Click the "Access" button on any resource card
 ◦ Opens resource in new tab
 ◦ Bookmark resources in your browser for quick access
For Educators
1. Sharing with Students
 ◦ Deploy to your school website or LMS
 ◦ Share direct links to filtered views
 ◦ Use specific subject filters for classroom recommendations
2. Customizing Resources
 ◦ Edit the resources array in JavaScript to add school-specific materials
 ◦ Modify difficulty ratings based on your curriculum
 ◦ Add custom tags for your district's standards

￼
🗂️ Project Structure
￼
Single File Architecture
The entire application is contained in one HTML file for simplicity:
 • Lines 1-50: HTML Head (meta tags, CDN links)
 • Lines 51-400: HTML Body (sections, navigation, components)
 • Lines 400-900: CSS Styles (Tailwind + custom CSS)
 • Lines 900-1200: JavaScript (data, functions, event handlers)

￼
🏗️ Code Architecture
HTML Structure
￼
CSS Architecture
The styling uses a hybrid approach:
1. Tailwind CSS (via CDN) - Utility-first classes for layout
2. Custom CSS - Complex animations, gradients, and component styles
3. CSS Variables - Dark mode support via dark: classes
Key Style Components
￼
JavaScript Architecture
Data Model
￼
State Management
￼
Core Functions
￼
Event Flow
￼

￼
📚 Resource Database Schema
Each resource in the database follows this structure:
￼
Adding New Resources
To add a new resource, simply append to the resources array:
￼

￼
🎨 Customization Guide
Changing Colors
Edit the CSS variables in the <style> section:
￼
Adding New Subjects
1. Add button HTML in the subjects section:
￼
2. Add resources with subject: "newsubject"
3. Update filter logic if needed
Modifying Difficulty Ratings
Change the color coding in the render function:
￼
Customizing Animations
Adjust GSAP animations in initAnimations():
￼

￼
🌐 Browser Support
￼
Required Features
 • CSS Grid & Flexbox
 • CSS Custom Properties (Variables)
 • ES6+ JavaScript (Arrow functions, const/let, template literals)
 • Fetch API (for future backend integration)
 • CSS Backdrop Filter (glass effect)

￼
🤝 Contributing
We welcome contributions! Here's how to help:
Adding Resources
1. Verify the resource is free and high-quality
2. Test the URL works
3. Add to the resources array following the schema
4. Submit a pull request with resource description
Bug Reports
Use the issue template:
￼
Feature Requests
 • AI-powered resource recommendations
 • User accounts for saving favorites
 • Backend API for dynamic resource updates
 • Mobile app version (React Native/Flutter)

￼
📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
Resource Attribution
All educational resources linked in this application remain the property of their respective owners:
 • Khan Academy ® Khan Academy
 • OpenStax ® Rice University
 • Desmos ® Desmos Inc.
 • Crash Course ® Complexly
 • And others as listed in the application

￼
🙏 Acknowledgments
 • Tailwind CSS for utility-first styling
 • GSAP for professional-grade animations
 • Google Fonts for Inter and Space Grotesk typography
 • Open Educational Resources movement for free learning materials

￼
📞 Support
 • Issues: GitHub Issues
 • Email: support.LearnSmartAI@gmail.com
 • Twitter: @LearnSmartAI

