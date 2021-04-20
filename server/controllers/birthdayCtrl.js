const nodemailer = require('nodemailer')
const {EMAIL,ENTRY_KEY} =process.env
module.exports={

    getBirthday: (req, res) => {
        const today = new Date()
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const mmdd = String(`${mm}-${dd}`)
        const db = req.app.get('db');
       db.get_birthday(mmdd)
       .then(dbRes => {
        res.status(200).send(dbRes)
    })
    .catch(err => console.log(err))
    },
     
    sendEmail: async (req, res) => {
        const { name,email,emailMessage} = req.body
    
    try {
          //invoke the createTransport function passing in your email information. 
          let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: EMAIL,
              pass: ENTRY_KEY
            }
          });
    
          //invoke the sendMail function with the info in the email
          let info = await transporter.sendMail({
            from: `'Jared Andersen 🥳🎈🎁' <${EMAIL}>`, //This will show up when you go into the email
            to:email,
            subject: `It's ${name}'s Birthday!`, //This will show on the subject of the email
            text: emailMessage, //for clients with plaintext support only
            html: `<div>${emailMessage}<div> 
                  <img src="cid:unique@nodemailer.com"/>`,
            attachments: [
              { //this is the attachment of the document
                filename: 'license.txt',
                path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
              },
            //   {
            //     cid: 'unique@nodemailer.com', //same cid value as in the html img src
            //     path:image
            //   }
            ]
          }, (err, res) => {
            if (err) {
              console.log('err', err)
            } else {
              console.log('res', res)
              res.status(200).send(info)
            }
          })
        } catch (err) {
          console.log(err)
          res.sendStatus(500)
        }
      },
      getEmails: (req, res) => {
        const db = req.app.get('db');
        db.get_emails()
            .then(dbRes => {
                res.status(200).send(dbRes)
            })
            .catch(err => console.log(err))
    },
    
    }

