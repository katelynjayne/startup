class EventMessage {
    constructor(from, value) {
      this.from = from;
      this.value = value;
    }
  }
  
  class NotifierObj {
    events = [];
    handlers = [];
  
    constructor() {
      setInterval(() => {
        const score = Math.floor(Math.random() * 3000);
        const date = new Date().toLocaleDateString();
        const userName = 'other-user';
        const msg = "Test message";
        this.broadcastEvent(userName,{ name: userName, score: score, date: date, msg: msg });
      }, 5000);
    }
  
    broadcastEvent(from, value) {
      const event = new EventMessage(from, value.msg);
      this.receiveEvent(event);
    }
  
    addHandler(handler) {
      this.handlers.push(handler);
    }
  
    removeHandler(handler) {
      this.handlers.filter((h) => h !== handler);
    }
  
    receiveEvent(event) {
      this.events.push(event);
  
      this.events.forEach((e) => {
        this.handlers.forEach((handler) => {
          handler(e);
        });
      });
    }
  }
  
  const Notifier = new NotifierObj();
  export { Notifier };