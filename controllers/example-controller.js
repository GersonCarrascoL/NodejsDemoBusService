'use strict'

const path = require('path')

class ExampleController{
    index(req, res){
        return res.sendfile(path.resolve('public/index.html'))
    }
}

module.exports = ExampleController