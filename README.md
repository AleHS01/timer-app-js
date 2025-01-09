# Timer App

A minimalistic and user-friendly timer application designed for simplicity and functionality.

## Features

- **Set Timer**: Easily configure the timer by specifying hours, minutes, and seconds (HH:MM:SS).  
- **Start Timer**: Begin the countdown.  
- **Stop Timer**: Pause the timer whenever needed without losing the current countdown.  
- **Reset Timer**: Reset the timer to its initial value for repeated tasks.  
- **Sound Effect**: Audio feedback when the timer reaches zero.

---

## Tech Stack
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)
## Prerequisites

- A code editor is required. **VS Code** is recommended for its ease of use.  
  - Install the **Live Server** extension for a smoother development experience.  

---
## Setup
- Clone the repository:

```bash
git clone https://github.com/AleHS01/timer-app-js.git
cd timer-app-js
```
---
## Running the App

- If you're using **VS Code** with the **Live Server Extension**, click the **Go Live** button at the bottom of the editor.  
- Visit the app in your browser at:  
```bash
http://localhost:5500
```
---

## Functionality

<details>
  <summary>Countdown</summary>
  
  ```javascript
  function countdown(hrs, mins, secs) {
  decrementTime = setInterval(() => {
    secs--;

    if (secs < 0) {
      secs = 59;
      if (mins > 0) {
        mins--;
      } else {
        mins = 59;
        if (hrs > 0) {
          hrs--;
        } else {
          clearInterval(decrementTime);
          displayTime();
          const audio = new Audio(
            "./resources/mixkit-digital-clock-digital-alarm-buzzer-992.wav"
          );
          audio.play();
          setTimeout(() => audio.pause(), 5000);
          timeUps();
          return;
        }
      }
    }
    displayTime(hrs, mins, secs);
    hours = hrs;
    minutes = mins;
    seconds = secs;
    }, 1000);
    }
```
</details>
<details>
  <summary>Color Change</summary>
  
  ```javascript
  function timeUps() {
  let count = 0;

  let colorChange = setInterval(() => {
    hoursDisplay.classList.toggle("red");
    minutesDisplay.classList.toggle("red");
    secondsDisplay.classList.toggle("red");
    count++;

    if (count === 10) {
      clearInterval(colorChange);
      hoursDisplay.classList.remove("red");
      minutesDisplay.classList.remove("red");
      secondsDisplay.classList.remove("red");
    }
  }, 500);
}
```
</details>

## Deployment

This project is deployed using GitHub Pages.  
[**Live Demo**](https://alehs01.github.io/timer-app-js/)

You can deploy your own instance by following these steps:  
1. Go to the **Settings** of your repository.  
2. Click on **Pages** in the sidebar.  
3. Under the **Branch** section, select "Main" and click **Save**.  
4. Wait 3-5 minutes for the deployment to complete.  
5. The deployed app's link will appear in the **Deployments** section on the right sidebar.
6. Ensure the main page of your project is named **index.html** so GitHub can locate it correctly.  

