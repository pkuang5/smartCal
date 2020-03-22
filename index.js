var googleLoginController = require('./src/controllers/googleLoginController');
const {CREDENTIALS_PATH, client} = require('./src/model/modelAttributes')

var loginController = new googleLoginController();
loginController.setOAuth2Client(CREDENTIALS_PATH);
console.log("clent ", client);