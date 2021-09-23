var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aniketshrivastav02@gmail.com',
    pass: '"####secured password####"'
  }
});

var mailOptions = {
  from: 'aniketshrivastav02@gmail.com',
  to: 'bt19cse079@iiitn.ac.in',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});