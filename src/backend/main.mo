import Array "mo:core/Array";
import Int "mo:core/Int";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";

actor {
  type ContactMessage = {
    id : Nat;
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module ContactMessage {
    public func compare(a : ContactMessage, b : ContactMessage) : Order.Order {
      Int.compare(b.timestamp, a.timestamp);
    };
  };

  var nextMessageId = 1;
  let messages = Map.empty<Nat, ContactMessage>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, subject : Text, message : Text) : async () {
    if (name.trim(#char ' ').isEmpty()) {
      Runtime.trap("Please enter your name.");
    };
    if (email.trim(#char ' ').isEmpty()) {
      Runtime.trap("Please enter your email.");
    };
    if (subject.trim(#char ' ').isEmpty()) {
      Runtime.trap("Please enter a subject.");
    };
    if (message.trim(#char ' ').isEmpty()) {
      Runtime.trap("Please enter a message.");
    };

    let contactMessage : ContactMessage = {
      id = nextMessageId;
      name;
      email;
      subject;
      message;
      timestamp = Time.now();
    };

    messages.add(nextMessageId, contactMessage);
    nextMessageId += 1;
  };

  public query ({ caller }) func getAllContactMessages() : async [ContactMessage] {
    messages.values().toArray().sort();
  };
};
