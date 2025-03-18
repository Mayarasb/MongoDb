use('estoque')
db.estados.find().forEach(function (estado) {
    db.estados.updateOne(
        {_id: estado._id},
        {$set: {
            local: {
                type: 'Point',
                coordinates: [estado.longitude, estado.latitude]
            }
        },
        $unset: {latitude: "", longitude: ""}
        }
    )
})

use('estoque')
db.estados.find({},{local:1})

use('estoque')
//Criando o indice 2dSphere
db.estados.createIndex({local: '2dsphere'})

use('estoque')
//Localizando os estados \té 200km  200km proximos da fatec
db.estados.find({
    local: {
        $near:{
            $geometry:{
                type: 'Point',
                coordinates: [-47.4495, -23.5313]//Fatec
            },
            $maxDistance: 2000000 //em metros - 200km
        }
    }
}, {nome:1, _id:0})


use('estoque')
db.estados.find({
    local:{
        $geoWithin: {
            $centerSphere: [[-47.4495, -23.5313],
            2000 / 6378.1] // raio em radianos
        }
    }
}, {nome:1,_id:0})
// 6378.1 raio médio da terra em Km

use('estoque')
db.municipios.find().forEach(function (municipios) {
    db.municipios.updateOne(
        {_id: municipios._id},
        {$set: {
            local: {
                type: 'Point',
                coordinates: [municipios.longitude, municipios.latitude]
            }
        },
        $unset: {latitude: "", longitude: ""}
        }
    )
})