

function sendMail() {
	console.log("maybe?");

	Email.send({
    Host : "smtp.gmail.com",
    Username : "swater315@gmail.com",
    Password : "Fang7777",
    To : 'swater315@gmail.com',
    From : "swater315@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);

}

sendMail();