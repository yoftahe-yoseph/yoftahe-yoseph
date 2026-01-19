// Simple DB smoke test that connects with the MONGODB_URI environment variable.
// Run with: $env:MONGODB_URI="..."; node test-db.js  (PowerShell)
// or: MONGODB_URI="..." node test-db.js  (bash)
const mongoose = require("mongoose");

async function testConnection() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("❌ Missing MONGODB_URI env var. Set it then retry.");
    process.exit(1);
  }

  try {
    console.log("Testing MongoDB connection...");
    await mongoose.connect(uri);
    console.log("✅ MongoDB connected successfully!");
    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
}

testConnection();