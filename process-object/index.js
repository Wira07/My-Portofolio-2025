const initialMemoryUsage = process.memoryUsage().heapUsed; // Get initial memory usage
const yourName = "YourName"; // Replace with your name
const environment = process.env.NODE_ENV || "development"; // Use environment variable or fallback

for (let i = 0; i <= 10000; i++) {
  // Proses looping ini akan membuat penggunaan memori naik
}

const currentMemoryUsage = process.memoryUsage().heapUsed; // Get memory usage after the loop

console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`);
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);