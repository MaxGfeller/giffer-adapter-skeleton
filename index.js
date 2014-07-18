var EventEmitter = require('events').EventEmitter
var inherits = require('inherits')

inherits(Adapter, EventEmitter)

function Adapter(config) {

}

Adapter.prototype.start = function() {
  this.emit('start')
  // start grabbing some gifs
  // and then `this.emit('gif', url)`
}

Adapter.prototype.stop = function() {
  this.emit('stop')
  // stop grabbing gifs
}

module.exports = Adapter
