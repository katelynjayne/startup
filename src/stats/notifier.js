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
        const userName = 'other-user';
        const msg = "Test message";
        this.broadcastEvent(userName, msg);
      }, 5000);
    }
  
    broadcastEvent(from, value) {
      const event = new EventMessage(from, value);
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