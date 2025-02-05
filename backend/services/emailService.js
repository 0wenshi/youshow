const nodemailer = require('nodemailer');
require('dotenv').config();

// Configure the email transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// send Ticket Email to user
const sendTicketEmail = async (userEmail, ticketDetails) => {
  try {
    const mailOptions = {
      from: `"Your Show" <${process.env.SMTP_USER}>`,
      to: userEmail,
      subject: `🎟 Just Test! Not real--Your Next Comedy Ticket Confirmation - ${ticketDetails.eventName}`,
      html: `
              <h2>Thank you for your purchase! 😁😁😁</h2>
              <p>Hi there,</p>
              <p>This letter is to confirm that your ticket for <strong>${ticketDetails.eventName}</strong> has been successfully purchased.</p>
              <p><strong>Event Date:</strong> ${ticketDetails.eventDate}</p>
              <p><strong>Start Time:</strong> ${ticketDetails.startTime}</p>
              <p><strong>End Time:</strong> ${ticketDetails.endTime}</p>
              <p><strong>Venue:</strong> ${ticketDetails.venue}</p>
              <p><strong>Seat:</strong> ${ticketDetails.seat}</p>
              <p><strong>Order ID:</strong> ${ticketDetails.order_id}</p>
              <p>Enjoy your show! 🎭🎭🎭</p>
              ${false ? `<p><a href="http://localhost:5173/tickets/${ticketDetails.order_id}">View your ticket</a></p>` : ''}
            `,
    };
    await transporter.sendMail(mailOptions);
    console.log(`Ticket confirmation email sent to ${userEmail}`);
  } catch (error) {
    console.error('Error sending ticket email:', error);
  }
};

module.exports = { sendTicketEmail };
