const assert = require('assert');
const emailjs = require('emailjs');

const server = emailjs.server.connect({
    user: 'your_email@example.com',
    password: 'your_password',
    host: 'smtp.your-email-provider.com',
    ssl: true
});

test('send email', (done) => {
    server.send({
        text: 'This is a test email',
        from: 'your_email@example.com',
        to: 'recipient@example.com',
        subject: 'Test Email'
    }, (err, message) => {
        assert.strictEqual(err, null);
        assert.strictEqual(message.header.from, 'your_email@example.com');
        done();
    });
});
