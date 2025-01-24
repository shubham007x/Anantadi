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
