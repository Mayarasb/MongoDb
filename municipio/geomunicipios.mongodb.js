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

use('estoque')
db.municipios.find({},{local:1})

use('estoque')
//Criando o indice 2dSphere
db.municipios.createIndex({local: '2dsphere'})

use('estoque')
//Localizando os municipios \té 200km  200km proximos da fatec
db.municipios.find({
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
db.municipios.find({
    local:{
        $geoWithin: {
            $centerSphere: [[-47.4495, -23.5313],
            20 / 6378.1] // raio em radianos
        }
    }
}, {nome:1,_id:0})
// 6378.1 raio médio da terra em Km

