const { exec } = require('child_process');

// Install axios if not already installed
exec('npm list axios --depth=0', (error, stdout) => {
  if (error) {
    console.error('Error checking axios installation:', error);
    return;
  }
  
  if (!stdout.includes('axios')) {
    console.log('Installing axios...');
    exec('npm install axios', (error, stdout, stderr) => {
      if (error) {
        console.error('Error installing axios:', error);
        return;
      }
      console.log('axios installed successfully!');
      // Now that axios is installed, start sending messages
      startSendingMessages();
    });
  } else {
    console.log('axios is already installed.');
    // If axios is already installed, start sending messages
    startSendingMessages();
  }
});

// Function to send message using axios
function sendMessage() {
  const axios = require('axios');
  var message = "KERJA YANG HALAL OM!";
  var url = `https://api.telegram.org/bot7037128599:AAHUOPNUXxHupkBzHMRo0jDJQB5Bz_yoB80/sendMessage?parse_mode=markdown&chat_id=6762706048&text=${message}`;

  axios.get(url)
    .then(response => {
      console.log("Message sent successfully:", response.data);
    })
    .catch(error => {
      console.error("Error sending message:", error);
    });
}

// Function to start sending messages at intervals
function startSendingMessages() {
  // Call sendMessage every 1 second (1000 milliseconds)
  setInterval(sendMessage, 1000);
}
