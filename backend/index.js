require("dotenv").config();
const express = require("express");
const Queue = require("bull");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to Redis (Required for Bull)
const taskQueue = new Queue("taskQueue", {
  redis: { host: "127.0.0.1", port: 6379 },
});

// API Endpoint to Queue Task
app.post("/enqueue", async (req, res) => {
  const { totalDuration = 3, userId, data } = req.body;

  if (totalDuration % 1 !== 0) {
    return res.status(400).json({ error: "Total duration must be a multiple of 1 minute" });
  }

  const job = await taskQueue.add(
    { userId, totalDuration, remainingDuration: totalDuration, data },
    { removeOnComplete: true } // Auto-remove after completion
  );

  res.json({ message: "Task queued successfully", jobId: job.id });
});

// Process Queue
taskQueue.process(async (job, done) => {
  let { userId, totalDuration, remainingDuration, data } = job.data;

  const interval = setInterval(async () => {
    remainingDuration -= 1;

    if (remainingDuration > 0) {
      console.log(`User ${userId}: Running... Remaining: ${remainingDuration} mins`);
      await job.update({ remainingDuration });
    } else {
      console.log(`User ${userId}: Task Completed`);
      clearInterval(interval);
      done(); // Mark job as completed
    }
  }, 1 * 60 * 1000); // Run every 1 minute
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
