import { Meteor } from 'meteor/meteor';
import say from 'say';

Meteor.startup(() => {
    WebApp.connectHandlers.use('/speak', (req,res,next) => {
        if (req.method === 'POST') {
            var body = "";
            req.on('data', data => {
                body += data;
            });
            req.on('end', () => {
                speak(body);
            });
            res.statusCode = 200;
            res.end()
        } else {
            res.statusCode = 405;
            res.end(JSON.stringify({success: false, error: "Method not allowed"}));
        }
    });
});

Meteor.methods({
    'speak': speak,
});

function speak(text, speaker) {
    if (speaker) {
        say.speak(text,"Microsoft " + speaker + " Desktop");
    } else {
        say.speak(text,"Microsoft Zira Desktop");
    }
}
