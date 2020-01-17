const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

// sgMail.send({
//     to: 'aashwinvats@gmail.com',
//     from: 'aashwinvats@gmail.com',
//     subject: 'This is my first test email.',
//     text: 'I hope this actually gets to you'

// })

const sendEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'aashwinvats@gmail.com',
        subject: 'Request to join the porject at IdeaPool',
        text: 'Hi, ' + ''

    })
}