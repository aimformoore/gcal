const { google } = require('googleapis');
const twilio = require('twilio')
const { formatInTimeZone } = require('date-fns-tz')
const dateFns = require('date-fns')

exports.gcal = async (req, res) => {
  try {
    const credentials = JSON.parse(Buffer.from(process.env.CREDENTIALS, 'base64').toString('utf8'))
    const { web: { client_id: clientId, client_secret: clientSecret }} = credentials

    const oauth2Client = new google.auth.OAuth2(
      clientId,
      clientSecret,
      'https://nkhil.com',
    )

    oauth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN,
      scope: 'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events',
    })

    const calendar = google.calendar({
      version: 'v3',
      auth: oauth2Client,
    })

    const response = await calendar.events.list({
      calendarId: 'primary',
      timeMax: dateFns.endOfDay(new Date()),
      timeMin: dateFns.startOfDay(new Date()),
    })

    const twilioClient = twilio(
      process.env.TWILIO_SID,
      process.env.TWILIO_TOKEN,
    )

    if (response.data?.items.length) {
        const messageBody = response.data.items.reverse().reduce((acc, val) => {
          const formattedDate = formatInTimeZone(new Date(val.start.dateTime), 'Europe/London', 'HH:mm aaa')
          acc += `\n=> ${formattedDate} - ${val.summary}\n`
          return acc
        }, '\n')

      twilioClient.messages.create({
        body: messageBody,
        messagingServiceSid: process.env.TWILIO_SERVICE_SID,
        to: process.env.PHONE_NUMBER,
      })

      res.status(200).send(messageBody)
    }
    res.status(200).send('No events today. Going back to sleep...')
  } catch (error) {
    console.log(JSON.stringify(error))
    res.status(500).send()
  }
}
