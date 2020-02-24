const functions = require('firebase-functions');

const {dialogflow} = require('actions-on-google');

const WELCOME_INTENT = 'Default Welcome Intent';
const FALLBACK_INTENT = 'Default Fallback Intent';
const QUERY_INTENT = 'Query';
const FOOD_TYPE_ENTITY = 'FoodType';

const app = dialogflow();

app.intent(WELCOME_INTENT, (conv) => {
    conv.ask("How may I help you? (Ask about food)");
});

app.intent(FALLBACK_INTENT, (conv) => {
    conv.ask("I didn't understand your request");
});

app.intent(QUERY_INTENT, (conv) => {
    const food_type = conv.parameters[FOOD_TYPE_ENTITY].toLowerCase();
    if (food_type == "pizza") {
      conv.ask("Here are some suggested places for Pizza:");
      conv.ask("Pizza Hut: https://www.pizzahut.com/index.php#/home");
      conv.ask("Dominos: https://www.dominos.com/en/");
      conv.ask("Little Caesars: https://littlecaesars.com/en-us/");
    }
    else if (food_type == "hamburger") {
      conv.ask("Here are some suggested places for Hamburger:");
      conv.ask("McDonalds: https://www.mcdonalds.com/us/en-us.html");
      conv.ask("Jack In The Box: https://www.jackinthebox.com/");
      conv.ask("Whataburger: https://whataburger.com/home");
    }
    else if (food_type == "pasta") {
      conv.ask("Here are some suggested places for Pasta:");   
      conv.ask("Olive Garden: https://www.olivegarden.com/home");
    }
  	else if (food_type == "steak") {
      conv.ask("Here are some suggested places for Steak:");
      conv.ask("Outback Steakhouse: https://www.outback.com/");
    }
  	else if (food_type == "fish") {
      conv.ask("Here are some suggested places for Fish:");     
      conv.ask("Kura: https://kurasushi.com/");
    }
    else {
      conv.ask("Here are some suggested places to eat:");
      conv.ask("Chipotle: https://www.chipotle.com/");
    }
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
