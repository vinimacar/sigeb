const email = require('emailjs');

const server = email.server.connect({
   user: "your_email@example.com",
   password: "your_password",
   host: "smtp.your-email-provider.com",
   ssl: true
});

module.exports = {
   sendEmail: function(to, subject, message) {
      const emailMessage = {
         text: message,
         from: "your_email@example.com",
         to: to,
         subject: subject
      };

      server.send(emailMessage, function(err, message) {
         if (err) {
            console.log(err);
         } else {
            console.log("Email sent: " + message);
         }
      });
   }
};
