
function openresume() {
    window.open("https://drive.google.com/file/d/1y7NRM4BXZJnEC13Tb5ILPKiix8HKKpR0/view",);
}

function openCertificates() {
    window.open("https://drive.google.com/drive/folders/1Mjenpy3nlLpzKlrJOd0FfcouvzmsLQ4o?usp=sharing",);
}

function sendMessage(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const subject = encodeURIComponent("Portfolio Contact from " + name);
  const body = encodeURIComponent(
    "Name: " + name + "\n" +
    "Email: " + email + "\n\n" +
    "Message:\n" + message
  );

  window.location.href =
    "mailto:kushwanthbyragoni@gmail.com?subject=" + subject + "&body=" + body;
}

document.getElementById("contactForm").addEventListener("submit", sendMessage);

