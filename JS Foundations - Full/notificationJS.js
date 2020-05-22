// Notification.requestPermission().then(function(result) {
//   alert(result);
// });

// new Notification("Subscribe to MuminjonGuru!");

function notifyMe() {
  if(!("Notification" in window)) {
    alert("This browser does not support system notifications");
  }
  else if(Notification.permission === "granted") {
    notify();
  }
  else if (Notification.permission === "denied") {
    Notification.requestPermission(function(permission) {
      if(permission === "granted") {
        notify();
      }
    });
  }

  function notify() {
    var notification = new Notification("Hello from MuminjonGuru", {
      icon: "https://muminjon.com/assets/img/muminjonguru.png",
      body: "How are you buddy!",
    });
  }
}

