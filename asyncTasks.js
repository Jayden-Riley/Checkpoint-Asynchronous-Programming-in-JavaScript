// Task 01: Iterating with Async/Await
async function iterateWithAsyncAwait(values) {
  for (let value of values) {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 1-second delay
    console.log(value);
  }
}

// Task 02: Awaiting a Call
async function awaitCall() {
  const data = await new Promise((resolve) =>
    setTimeout(() => resolve("Data fetched!"), 2000)
  );
  console.log(data);
}

// Task 03: Handling Errors with Async/Await
async function awaitCallWithErrorHandling() {
  try {
    await new Promise((_, reject) =>
      setTimeout(() => reject("API call failed!"), 2000)
    );
  } catch (error) {
    console.error("Error:", error);
  }
}

// Uncomment to run one at a time
// iterateWithAsyncAwait([1, 2, 3]);
// awaitCall();
// awaitCallWithErrorHandling();
