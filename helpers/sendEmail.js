const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendEmail = async (to, token) => {
    const msg = {
        to,
        from: 'andrii-verhun@meta.ua',
        subject: 'Mail verification',
        text: `Please follow the link to confirm your email: http://localhost:3000/api/users/verify/${token}`,
    }

    try {
        const result = await sgMail.send(msg)
        return result
    } catch (error) {
        throw error
    }
}

module.exports = sendEmail