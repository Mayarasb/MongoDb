const { MongoClient } = require('mongodb')
const fs = require('fs')

const uri = 'mongodb://localhost:27017'
const dbName = 'estoque'
const collectionName = 'municipios'

async function importaMunicipios() {
    const client = new MongoClient(uri)


    try{
        await client.connect()
        console.log('✅Conectando ao MongoDb')
        //Ler o arquivo Json
        const dados = fs.readFileSync('municipios.json','utf-8')
        const municipios = JSON.parse(dados)
        //verificar se é um array
        if(!Array.isArray(municipios)){throw new Error('O JSON deve conter um array de objetos')}
        //Inserir os dados no MongoDb
        const db = client.db(dbName)
        const collection = db.collection(collectionName)
        // Dropar a collection se existir
        const collections = await db.listCollections({name:collectionName}).toArray()
        if(collections.length>0){
            await collection.drop()
            console.log(`🟨 Coleção ${collectionName} foi dropada`)
        }
        const resultado = await collection.insertMany(municipios)
        console.log(`${resultado.insertedCount} documentos inseridos`)
    }
    catch(error){
        console.error('❌ Erro ao importar', error.message)
    }finally {
        await client.close() //fecha a conexão
    }
}

importaMunicipios()
