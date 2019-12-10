import 'telegram-bot-api';

let api = new telegram({
	token: '684584697:AAFZ3142ik4tIMOnvDFb1Tr_qFN2lZqjbU0',
	updates: {
		enabled: true
	}
});

//
// Pseudo KI mit if und else schreiben.
//


api.on('message', function (message) {


	const text = message.text;
	const chatId = message.chat.id;

if(text === "Hallo") {
	api.sendMessage({text: "-_-", chat_id: chatId});
}
	console.log("text: " + text);


});

