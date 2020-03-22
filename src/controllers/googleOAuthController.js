const fs = require('fs');
const {google} = require('googleapis');


class googleOAuthController {

    constructor(tokenPath, scope, credentialPath) {
        this.TOKEN_PATH = tokenPath;
        this.SCOPES = scope;
        this.credentials = '';
        this.credentialPath = credentialPath;
        this.oAuth2Client = null;
    }

    /**
     * returns a google.auth.OAuth2 object containing specifications
     * from credentials.json
     * @param {String} pathway The String pathway to credentials.json
     */
    getOAuth2Client() {
        fs.readFile(this.credentialPath, (err, content) => {
            if (err) return console.log('Error loading client secret file:', err);
            // Authorize a client with credentials, then call the Google Calendar API.
            this.credentials = JSON.parse(content);
          });
        const {client_secret, client_id, redirect_uris} = this.credentials.installed;
        this.oAuth2Client = new google.auth.OAuth2(
            client_id, client_secret, redirect_uris[0]);

    }
}