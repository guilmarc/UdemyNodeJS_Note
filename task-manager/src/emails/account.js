const sgMail = require("@sendgrid/mail")

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

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