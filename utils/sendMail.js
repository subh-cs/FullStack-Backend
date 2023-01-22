const nodemailer = require("nodemailer");
const User = require("../model");
// const connectDB = require("./connectDB");
const { google } = require("googleapis");
// require("dotenv").config();

const CLIENT_ID =
  "538019106249-89ogb9m7na0uvf5r579f90fqap7brbt1.apps.googleusercontent.com";
const CLEINT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN =
  "1//04Hte8V0hgbYkCgYIARAAGAQSNwF-L9IrhwlZifhHk8qOAGVzcvMY833zkjifxddAEM0vNJ44kEiRKQ2L2Cqpr33m2x9S2x-HRsE";

// let emails = ["subho3506@gmail.com", "subhodiproy.it2020@nsec.ac.in"];

// const mailOptions = {
//   from: "Subhodip <rsubh281@gmail.com>",
//   to: ["subho3506@gmail.com", "subhodiproy.it2020@nsec.ac.in"],
//   // to: emails,
//   subject: "Welcome",
//   text: "Welcome to the world of development",
//   html: "<h1>Welcome to the world of somthing else</h1>",
// };

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLEINT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const sendMail = async (mailOptions) => {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "rsubh281@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLEINT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });
    const result = await transport.sendMail(mailOptions);
    return result;
    // return res.status(200).json({ message: "Email sent", result });
  } catch (error) {
    console.log("Error", error);
  }
};
// connectDB();
const sendMailToAll = async (req, res) => {
  try {
    const users = await User.find();
    for (let i = 0; i < users.length; i++) {
      const email = users[i].email;
      const message = users[i].message;
      // create mailOptions
      const mailOptions = {
        from: "Subhodip <rsubh281@gmail.com>",
        to: email,
        subject: "Welcome",
        text: message,
      };
      const result = await sendMail(mailOptions);
      console.log("Email sent to", email);
    }
    res.status(200).json({ message: "Email sent to everyone successfully" });
  } catch (error) {
    console.log("Error", error);
  }
};

module.exports = { sendMail, sendMailToAll };
