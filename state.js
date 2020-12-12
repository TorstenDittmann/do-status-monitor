class State {
  constructor() {
    this.services = [];
  }

  setStatus(name, status, time = 0) {
    const index = this.services.findIndex(service => service.name == name);
    if(index > -1) {
      this.services[index].status = status;
      this.services[index].time = time;
      this.services[index].lastCheck = Date.now();
      console.log(`${new Date(this.services[index].lastCheck).toLocaleString()} - ${status ? '✅' : '❌'} ${name}`);
    }
  }
}

export default (new State);
