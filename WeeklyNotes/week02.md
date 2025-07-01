# Questions from Last Week (Still Unresolved)
1. **Should each page provide direct user feedback such as:**
Estimated ROI (time spent vs. lifetime savings)? Learn X mins → Save £Y lifetime
Real-time or monthly electricity cost tracking?
Progress indication within the heat pump learning journey (e.g., Novice → Advanced)?
**Follow-up Considerations:**
**Feasibility:** Electricity tracking may require smart meter integration or user-provided utility data.
**Motivational value:** ROI-style feedback and learning progress gamification can help improve user retention and encourage deeper engagement.
**Privacy:** Since the website does not collect user data, feedback must be generated without storing personal information — possibly using local/session storage.

2. **Should we personalize learning paths beyond home type?**
e.g., based on user goals: cost savings / sustainability / comfort?
Could a short optional quiz classify users into different learning personas?

3. **Which pages require internationalization or localization support?**
Should we prepare for multi-language support at this stage?
What terms (e.g., “Flat” vs. “Apartment”) vary across UK audiences?

4. **Do we need a dedicated accessibility review (a11y)?**
Check ARIA labels, keyboard navigation, color contrast, etc.
Especially important for diagram-heavy, interactive content.
Next Steps (To do this week)

# Next Steps (To do this week)
1. Design 4 distinct UI prototypes for the learning journey
2. Finish database structure and connect it with Spring Boot backend

# Design 4 distinct UI prototypes
**goal:** 
To build an **interactive, visual-first website** that helps users with different levels of understanding learn about heat pumps and improve the efficiency of their home usage. The site follows a **"learning journey"** concept, guiding users through personalized paths to quickly access relevant knowledge.

## 1. Spiral Learning Journey Map
- Displays a floating spiral path with distributed knowledge blocks (nodes) along the journey. Spiral and nodes can include soft shadows or float-style animation (via Smart Animate).
- Users can scroll or drag along the path; clicking a node opens detailed content.
- Inspiration: Museum-style learning maps + Doodle Jump-like visual mood.

### 1.1 Core Layout and Navigation
1. **Spiral Structure:**
Knowledge points are distributed along a spiral path, representing different learning stages.
2. **Color Legend:**
A sidebar legend explains the user category of each node:</br>
🟡 Beginner
🔵 Heat Pump User
🔴 Troubleshooting
⚫ Government Support

### 1.2 Node Interactions
1. **Hover Effect:**<br>
When the user hovers over a knowledge node:
- The node becomes brighter and enlarged.
- It signals that the node is interactive.
2. **Click Action:**<br>
Each knowledge node supports two types of behavior: 
- Display Overlay – A floating card shows detailed knowledge content.
- Navigate to Frame – Jumps to a separate knowledge detail page.

### 1.3 Search + Auto Focus
1. **Search Bar:**
- Users can enter a question or keyword (e.g., Why is my electricity bill high?)
- The spiral zooms in and centers on the relevant knowledge node.

### 1.4 View Mode Switch: Bird View ↔ Step View
1. **Bird View (default):**
- Top-down overview of the spiral and all topics.
2. **Step View:**
- Switches to a first-person perspective.
- The camera follows the spiral path, one node at a time.
- Ideal for immersive storytelling and focused learning.

### 1.5 Progress Tracking
- **Viewed Topic Indicator:** <br>
After a user views a topic, nodes can change color (e.g., dim or glow).
- **Progress Summary:**<br>
Displayed below the spiral: ```Progress: 6/12 topics viewed (50%)```<br>
Encourages full completion of the learning journey.

## 2. Interactive Heat Pump Machine Model
- A 3D interactive model of a heat pump (and optionally, house cross-section).
- User can zoom in/out, rotate, and click on components to learn their function.
- Visual interaction inspired by Apple product pages, possibly WebGL or lightweight AR.

## 3. Duduo Bird / Quiz Game Style (Brilliant.org-inspired)
- A gamified step-by-step quiz system where users explore topics through micro challenges and instant feedback.
- Suitable for guiding users through decision logic (e.g., which heat pump suits you).

## 4. Realistic Community Map Interface
- A map view showing the city of Bristol, with clickable houses representing different home types.
- Designed to feel like a local guide; paths from city center lead to various household profiles.
- Users choose home type visually, then proceed to customization and learning.


[View Prototypes on Figma](https://www.figma.com/design/FYXBRrEyK2Uux0yu9Oj5cN/Heatpump-01?node-id=46-331&t=7TpZ9SOAYtvYOPCr-1)

# Database structure and Backend Development
See project **heatpump-backend** in VS Code for full implementation details.
Database tables are designed and managed in DataGrip, under the schema **heatpump**.
Below is the ER diagram for the `heatpump` database schema:
![ER_Diagram](images/ER_diagram.jpg)