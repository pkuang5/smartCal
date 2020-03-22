var googleLoginController = require('./src/controllers/googleLoginController');
//var googleOAuthController.js = require('./src/controllers/googleOAuthController')

var loginController = new googleLoginController();
loginController.setOAuth2Client(CREDENTIALS_PATH); 
//client = loginController.client;

//prompt user to open redirect URL and enter token code
//create token.json

//calenderClient = googleOAuth.setTokenCredentials(client, TOKEN_PATH);
