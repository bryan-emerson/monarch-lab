const Monarch = require('../../models/Monarch.js')
const Kingdom = require('../../models/Kingdom.js')

const monarchRaw = require('../data/monarchRaw.json')
const kingdomRaw = require('../data/kingdomRaw.json')

const monarchData = monarchRaw.map(monarch => {
    const newMonarch = {}
    newMonarch.name = monarch.name
    newMonarch.house = monarch.house
    newMonarch.start = monarch.start
    newMonarch.end = monarch.end
    newMonarch.endReason = monarch.endReason
    return newMonarch
})

Monarch.remove({})
Monarch.create(monarchData)
    .then(monarchs => {
        console.log(monarchData)
    })
    .catch(err => {
        console.log(err)
    })