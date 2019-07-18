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

const kingdomData = kingdomRaw.map(kingdom => {
    const newKingdom = {}
    newKingdom.title = kingdom.title
    newKingdom.extract = kingdom.extract
    return newKingdom
})

Monarch.remove({})
    .then(() => {
        Monarch.create(monarchData)
            .then(monarchs => {
                console.log(monarchData)
            })
            .catch(err => {
                console.log(err)
            })
    })

Kingdom.remove({})
    .then(() => {
        Kingdom.create(kingdomData)
            .then(kingdoms => {
                console.log(kingdomData)
            })
            .catch(err => {
                console.log(err)
            })
    })
