# FitLog

> **Train with intent. Log every set.**  
FitLog is a dark, no-nonsense gym companion designed to help you discover lifts, structure your daily workout routine, and track your fitness progress in real time.

---

## Short Description

**FitLog** is an interactive web application that serves as a modern exercise library and workout planner. Users can explore various compound and isolation exercises across major muscle groups, review detailed instructions and metrics, save workouts for later, and build a targeted daily plan. With real-time metrics tracking total minutes and calories burned, FitLog keeps your training session focused and organized.

---

## Technologies Used

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Library / Components:** DaisyUI & React Icons
- **State Management:** React Context API
- **Notifications:** React Toastify
- **Deployment:** Vercel

---

## Key Features

1. **- Comprehensive Exercise Library & Sorting**
   - Browse a responsive 3x4 grid displaying diverse lifts with key information such as muscle group tags, equipment needed, duration, calories burned, and user ratings.
   - Dynamically sort workouts by **Duration**, **Calories**, or **Rating** using an interactive dropdown menu.

2. **- Real-Time Metrics & Dynamic State Management**
   - Global Context keeps track of your **Today's Plan** and **Saved** workouts.
   - Calculates total exercises, cumulative duration (minutes), and total calories burned live as workouts are added or removed.

3. **- Detailed Workout Breakdown & Instructions**
   - Step-by-step ordered exercise instructions with comprehensive spec sheets (Difficulty, Sets, Reps, Equipment, etc.).
   - Instant action buttons to add lifts directly into today's routine or bookmark them for later with feedback notifications.

4. **- Interactive "My Plan" Log & Quick Actions**
   - Tabbed view allowing users to switch seamlessly between **Today's Plan** and **Saved** items.
   - Features **Mark as Done** and **Remove (X)** functionality per workout card with toast notifications.
   - Includes custom empty states with direct navigation back to the library when no exercises are queued.

5. **- Modern Dark-Mode UI & Full Responsiveness**
   - Built with a mobile-first approach ensuring a fluid user experience across mobile, tablet, and desktop viewports.
   - Features an updated dark layout, smooth anchor-link scrolling from the Hero section, a custom 404 page, and robust loading state indicators during data fetching.

---

##  Live Demo & Links

- **Live Site:** [[ FitLog ](https://fit-log-safoun.vercel.app/)]
- **GitHub Repository:** [[ GitHub ](https://github.com/safoun10/a_06_fit_log)]