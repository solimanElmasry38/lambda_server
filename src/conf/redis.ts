// const redis = require('redis');

// // Create a Redis client
// const redisClient = redis.createClient({
//     host: "redisDB", // Assuming "redisDB" is the hostname of your Redis instance
//     port: 6379,      // Default Redis port
// });

// // Handle connection errors
// redisClient.on("error", (error) => {
//     console.error(`Error with Redis client: ${error}`);
// });

// // Example usage: set a key-value pair
// redisClient.set('key', 'value', (err, reply) => {
//     if (err) {
//         console.error('Error setting value:', err);
//     } else {
//         console.log('Value set successfully:', reply);
//     }
// });

// // Example usage: get a value by key
// redisClient.get('key', (err, reply) => {
//     if (err) {
//         console.error('Error getting value:', err);
//     } else {
//         console.log('Retrieved value:', reply);
//     }
// });
