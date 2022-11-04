// Observer Pattern: Esquema general

/* FINAL CAP 2017-18

El patró Observer es representa en llenguatges amb classes de la següent
manera (segons el llibre clàssic Design Patterns): => Veure transparència 59

La idea és, molt per sobre, que hi ha un objecte (instància de ConcreteSubject) que
admet observadors que seran notificats de canvis en aquest objecte, i objectes que poden
notificar l’interés per aquests canvis (les instàncies de ConcreteObserver). En Javascript
sense classes podem simplificar considerant que tenim una funció Subject() amb la que
crear objectes susceptibles de ser observats: let subj = new Subject(), amb
operacions subj.attach(observer), subj.detach(observer), subj.notify(),
subj.getState(). També necessitarem la funció Observer tal que permeti crear
observadors: let o = new Observer() amb operacions o.update(subject).
Feu una implementació senzilla d’aquestes funcions Subject() i Observer().,
considerant que no podeu ser massa específics a l’hora d’implementar getState o
update.

function Subject() {
  this.observers = [];
}
  
Subject.prototype.attach = function (observer) {
   this.observers.push(observer);
}

Subject.prototype.detach = function (observer) {
   this.observers = this.observers.filter( function (obs) {
   return (obs !== observer);})
}

Subject.prototype.notify = function () {
   this.observers.forEach( function (observer) {
      observer.update(this);
   })
}

Subject.prototype.getState = function () { /* . . . * }

function Observer() { }
   Observer.prototype.update = function (subject) {
   /* ... fer alguna cosa amb subject.getState() ... *
}

*/



// Observer pattern
// aka Publish/Subscribe pattern
// from http://addyosmani.com/resources/essentialjsdesignpatterns/book/
// by Addy Osmani

let pubsub = {};

(function(q) {

    let topics = {},
        subUid = -1;

    // Publish or broadcast events of interest
    // with a specific topic name and arguments
    // such as the data to pass along
    q.publish = function( topic, args ) {

        if ( !topics[topic] ) {
            return false;
        }

        let subscribers = topics[topic],
            len = subscribers ? subscribers.length : 0;

        while (len--) {
            subscribers[len].func( topic, args );
        }

        return this;
    };

    // Subscribe to events of interest
    // with a specific topic name and a
    // callback function, to be executed
    // when the topic/event is observed
    q.subscribe = function( topic, func ) {

        if (!topics[topic]) {
            topics[topic] = [];
        }

        let token = ( ++subUid ).toString();
        topics[topic].push({
            token: token,
            func: func
        });
        return token;
    };

    // Unsubscribe from a specific
    // topic, based on a tokenized reference
    // to the subscription
    q.unsubscribe = function( token ) {
        for ( let m in topics ) {
            if ( topics[m] ) {
                for ( let i = 0, j = topics[m].length; i < j; i++ ) {
                    if ( topics[m][i].token === token) {
                        topics[m].splice( i, 1 );
                        return token;
                    }
                }
            }
        }
        return this;
    };
}( pubsub ));



//---------------------------------------------------------------



// Another simple message handler

// A simple message logger that logs any topics and data received through our
// subscriber

let messageLogger = function ( topics, data ) {
    console.log( "Logging: " + topics + ": " + data );
};

// Subscribers listen for topics they have subscribed to and
// invoke a callback function (e.g messageLogger) once a new 
// notification is broadcast on that topic

let subscriber = pubsub.subscribe( "inbox/newMessage", messageLogger );

// Publishers are in charge of publishing topics or notifications of
// interest to the application. e.g:

pubsub.publish( "inbox/newMessage", "hello world!" );

// or
pubsub.publish( "inbox/newMessage", ["test", "a", "b", "c"] );

// or
pubsub.publish( "inbox/newMessage", {
  sender: "hello@google.com", 
  body: "Hey again!"
});

// We can also unsubscribe if we no longer wish for our subscribers
// to be notified
pubsub.unsubscribe( "0" );  // token

// Once unsubscribed, this for example won't result in our
// messageLogger being executed as the subscriber is
// no longer listening
pubsub.publish( "inbox/newMessage", "Hello! are you still there?" );
