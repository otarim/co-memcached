var Memcached = module.exports = require('memcached')

var promiseAble = function(fn) {
	return new Promise(function(resolve, reject) {
		fn(function(err, data) {
			if (err) {
				reject(err)
			} else {
				if (arguments.length > 2) {
					data = slice.call(arguments, 1)
				}
				resolve(data)
			}
		})
	})
}

;
[
	'touch',
	'get',
	'gets',
	'getMulti',
	'set',
	'replace',
	'add',
	'cas',
	'append',
	'prepend',
	'incr',
	'increment',
	'decr',
	'decrement',
	'del',
	'delete',
	'version',
	'flush',
	'stats',
	'settings',
	'slabs',
	'items',
	'cachedump',
	'end'
].forEach(function(method) {
	var originFn = Memcached.prototype[method]
	Memcached.prototype[method] = function() {
		var args = [].slice.call(arguments)
		return promiseAble(function(cb) {
			args = args.concat(cb)
			originFn.apply(this, args)
		}.bind(this))
	}
})