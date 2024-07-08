const pinkBtn = document.getElementById("pink-btn");
const blueBtn = document.getElementById("blue-btn");

// Observer1
function sendToGoogleAnalytics(data) {
  console.log("Sent to Google analytics: ", data);
}

// Observer2
function sendToCustomAnalytics(data) {
  console.log("Sent to custom analytics: ", data);
}

// Observer3
function sendToEmail(data) {
  console.log("Sent to email: ", data);
}

const observers = [];
const Observer = Object.freeze({
  notify: (data) => observers.forEach((observer) => observer(data)),
  subscribe: (func) => observers.push(func),
  unsubscribe: (func) => {
    [...observers].forEach((observer, index) => {
      if (observer === func) {
        observers.splice(index, 1);
      }
    });
  },
});

// Observer들이 subject 구독
Observer.subscribe(sendToGoogleAnalytics);
Observer.subscribe(sendToCustomAnalytics);
Observer.subscribe(sendToEmail);

pinkBtn.addEventListener("click", () => {
  const data = "click on pink button!";
  Observer.notify(data);
});

blueBtn.addEventListener("click", () => {
  const data = "click on blue button!";
  Observer.notify(data);
});
