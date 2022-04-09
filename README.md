# gcal

Google cloud function that retrieves upcoming events from google calendar and uses the Twilio api to text me.

## Setup

### Environment variables

The following environment variables are needed before running this locally

```console
CREDENTIALS=<gcloud credentials>
REFRESH_TOKEN=<google account refresh token>
TWILIO_SID=<Twilio SID>
TWILIO_TOKEN=<Twilio auth token>
TWILIO_SERVICE_SID=<Twilio service SID>
PHONE_NUMBER=<phone number>
```

Install dependencies using `npm i`

### Run the function

```console
npm run start
```

### Test the function

```console
curl localhost:8080
```

