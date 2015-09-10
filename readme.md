#co-memcached

Simple wrapper to the memcached library for co-like interface(eg: koa,co)

To install run:

    npm install co-memcached

Use in co:

    var co = require('co'),
        Memcached = require('co-memcached'),
        memcached = new Memcached('127.0.0.1:11211')

    co(function*(){
        yield memcached.set('foo','bar',1000)
        console.log(yield memcached.get('foo'))
    })

All methods listed in [memcached docs](https://github.com/3rd-Eden/memcached#api)

