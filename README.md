# gcal

Google cloud function that retrieves upcoming events from google calendar and uses the Twilio api to text me.

## Setup

### Environment variables

The following environment variables are needed before running this locally

```console
CREDENTIALS=<aimformoore@gmail.com>
REFRESH_TOKEN=<ya29.a0AVvZVsof5x_xgxzrlz23GMirKOuvUDRXLAkcXPXi3u4shKPhsTJKIQhEY_rwq1UKTEcLG9HiLy5N8NDoPM4EeD2mfkRr2LHnH_Ih1zwWarNyjLJmS8Dm2Wx3tsjG4CLMM277quZhB6dQUpj5cub2NRA6Sce7aCgYKASASARMSFQGbdwaIaJlVrFiqNOyuXQxTpM6Z6g0163>
TWILIO_SID=<ACe34bbb71d58626c74cb0856719f5eb75>
TWILIO_TOKEN=<e1b2d21cac1951277dc18640043027ad>
TWILIO_SERVICE_SID=<SM723628c46b374b04bea85ef0e43377bb>
PHONE_NUMBER=<+19514783595>
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

