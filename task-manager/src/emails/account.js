const sgMail = require("@sendgrid/mail")
const sendgridAPIKey = "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"
sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "marco.guilmette@zoneaudio.com",
        subject: "Thanks for joining in!",
        text: `Welcome to the app, ${ name }.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "marco.guilmette@zoneaudio.com",
        subject: "Sorry for the cancellation",
        text: `Very, very sorry, ${ name }.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}