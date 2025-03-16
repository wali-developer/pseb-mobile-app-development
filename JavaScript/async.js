// Promise -> Two possible value -> Fulfilled or Reject
// Promise stat -> Pending, Fulfilled, Reject

const prom = new Promise((resolve, reject) => {
  const loading = false;

  setTimeout(() => {
    if (loading === true) {
      resolve("Promise Resolved...");
    } else {
      reject("Promise has been rejected due to loading...");
    }
  }, 2000);
});

let state = "pending";

// prom
//   .then((res) => {
//     console.log("Response: ", res);
//     state = "Resolved.";
//   })
//   .catch((err) => {
//     console.log("ERROR: ", err);
//     state = "rejeted.";
//   });

// Call to server API and handle the promise
const getPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const resData = await response.json();
    console.log("Response: ", resData);
  } catch (error) {
    console.log(error);
  }
};

// getPosts();
