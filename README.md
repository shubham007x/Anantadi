# Anantadi
# Video Cropping Tool
![image](https://github.com/user-attachments/assets/9b0f15e7-ebe2-4dd7-a5f6-85129ec3aa5f)
![image](https://github.com/user-attachments/assets/2f03c60d-f704-4e10-89af-d4b86cec946f)


This is a **Video Cropping Tool** built with **React** that allows users to crop videos by selecting start and end times. It includes a timeline slider for selecting the crop range, a video player to preview the video, and a button to toggle between light and dark modes.

## Features

- **Crop Controls**: Displays start time, end time, and duration of the cropped video.
- **Timeline**: Interactive slider to select start and end time for cropping.
- **Dark Mode Toggle**: Toggle between light and dark modes.
  
## Technologies Used

- React
- Tailwind CSS
- React Player (for video playback)
- rc-slider (for timeline slider)

## Demo

[Link to the demo video cropping tool] (If you have a live demo link, otherwise, leave this empty)

## Installation

### Prerequisites

Make sure you have the following installed:

- **Node.js**: You can download it from [https://nodejs.org/](https://nodejs.org/)
- **npm** or **yarn**: npm comes with Node.js, but you can also install yarn from [https://yarnpkg.com/](https://yarnpkg.com/)

### Setup

Follow the steps below to set up the project locally:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/video-cropping-tool.git
   cd video-cropping-tool
   ```
-----------------------------------------------------------------------------------------------------------------------------


# Express.js Task Queue API with Bull

This is a backend application built with **Express.js** and **Bull** for managing task queues. It provides an API endpoint for enqueuing tasks and processes them by decrementing a duration every minute. It also integrates with **Redis** for managing the queue. 

## Features

- **Task Queueing**: Queue tasks with a specific total duration and user data.
- **Task Processing**: Processes tasks by decrementing the remaining time by 1 minute at intervals.
- **Redis**: Uses Redis as the backend to manage the queue.

## Technologies Used

- **Express.js**: Web framework for Node.js.
- **Bull**: A Redis-based queue system for handling background tasks.
- **Redis**: In-memory database for managing queues.
- **CORS**: Middleware for handling cross-origin requests.
- **dotenv**: Loads environment variables from `.env` files.

## Demo

![image](https://github.com/user-attachments/assets/99a7238c-0a4c-489a-9aae-46851f9d5442)


## Installation

### Prerequisites

Make sure you have the following installed:

- **Node.js**: Download from [https://nodejs.org/](https://nodejs.org/)
- **Redis**: You need to have Redis installed and running on your machine. You can download it from [https://redis.io/download](https://redis.io/download).

### Setup

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/task-queue-api.git
   cd task-queue-api
```
