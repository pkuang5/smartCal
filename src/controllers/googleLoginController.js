const fs = require('fs');
const {google} = require('googleapis');
var {redirectURL, client} = require('../model/modelAttributes')

class googleLoginController {

    setOAuth2Client(credentialPath){
        fs.readFile(credentialPath, (err, content) => {
            if (err) return console.log('Error loading client secret file:', err);
            // Authorize a client with credentials, then call the Google Calendar API.
            let credentials = JSON.parse(content);
            const {client_secret, client_id, redirect_uris} = credentials.installed;
            client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
          });
    }

    setRedirectURL(oAuth2Client, scopeURL){
        redirectURL = oAuth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: scopeURL,
          });
    }

}

module.exports = googleLoginController;