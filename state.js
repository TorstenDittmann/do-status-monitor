class State {
  constructor() {
    this.services = [];
  }

  setStatus(name, status) {
    const index = this.services.findIndex(service => service.name == name);
    if(index > -1) {
      this.services[index].status = status;
      this.services[index].lastCheck = Date.now();
    }
  }
}

module.exports = (new State);