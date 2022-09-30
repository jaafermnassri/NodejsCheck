var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'goldiroger11@gmail.com',
    pass: '**************'
  }
});

var mailOptions = {
  from: 'goldiroger11@gmail.com',
  to: 'abdelhafidh.bensalem1990@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Checkpoint Node.js Task 5 - Jaafer Mnassri'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});