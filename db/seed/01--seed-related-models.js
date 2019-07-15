const Monarch = require('../../models/Monarch.js')
const Kingdom = require('../../models/Kingdom.js')

const monarchRaw = require('../data/monarchRaw.json')
const kingdomRaw = require('../data/kingdomRaw.json')

Monarch.find({})
    .then(monarchs => {
        console.log(monarchs)
        monarchs.forEach(monarch => {
            // console.log(monarch)
            let monarchJSON = monarchRaw.find(monarchJSON => monarchJSON.name === monarch.name)
            // console.log(monarchJSON)
            Kingdom.findOne({ title: monarchJSON.kingdom })
                .then(kingdom => {
                    console.log(kingdom)
                    monarch.kingdom = kingdom._id
                    monarch.save()
                })
        })
    })