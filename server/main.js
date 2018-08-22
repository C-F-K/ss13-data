import { Meteor } from 'meteor/meteor';
import say from 'say'

Meteor.startup(() => {
    // code to run on server at startup
});

Meteor.methods({
    'speak': speak,
});

function speak(text) {
    say.speak(text,"Microsoft Zira Desktop");
}
