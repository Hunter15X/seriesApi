const seriesDao = new (require('../models/Series'))();

module.exports = {

// ROTAS async and await
 async listar (req, res){

        const list = await seriesDao.lista()

        if(list)
            return res.send(list)

        return res.status(404).send({erro:"lista vazia"})
  },

  async inserir (req, res){
      let serie = req.body;

      try{
        const resultado = await seriesDao.inserir(serie)

        const insertId = resultado.insertId;
        
        serie = {id:insertId, ...serie}

        return res.status(201).json(serie)

      } catch(erro){
            return res.status(500).send(erro)
      }

  },

  async buscaPorId (req, res){
    const id = req.params.id

    const serie = await seriesDao.buscaPorId(id)

    if(!serie)
        return res.status(404).send({erro:"serie não encontrada"})

    return res.send(serie)
  },

  async atualizar (req, res){
    const id = req.params.id
    let series = req.body
    series.id = id

    const retorno =  await seriesDao.atualizar(series)

    if(!retorno.affectedRows){
        res.status(404).send({status: 'serie não encontrada'})
        return
    }

     return res.status(200).send({id, ...series})

  },

  async delete (req, res){
    const id = req.params.id

    const retorno = await seriesDao.delete(id)

    if(!retorno.affectedRows){
        return res.status(404).send({status: 'id não encontrado'})
    }

     return res.status(204).send({message:"Serie deletada"})
  }

// ROTAS metódo antigo

    // GET

    // app.get("/series",(rec,res) => {
    //     var seriesDao = app.models.Series

    //     seriesDao.lista()
    //         .then(resultado =>{
    //             res.send(resultado)
    //         })
    //         .catch(erro => {
    //             console.log("Erro ao consultar" + erro)

    //             res.status(500).send(erro)

    //         })
    // })


    // POST

    // app.post("/series", (req,res) => {
    //     const seriesDao = app.models.Series

    //     let serie = req.body;

    //     console.log(serie);

    //     seriesDao.inserir(serie)
    //         .then(resultado =>{
    //             const insertId = resultado.insertId;
    //             serie = {id:insertId, ...serie}
    //             res.status(201).json(serie)
    //         })
    //         .catch(erro => {
    //             console.log("Erro ao consultar" + erro)

    //             res.status(500).send(erro)

    //         })

    // })

    // GET by ID

    // app.get("/series/:id", (req,res) =>{

    //     const id = req.params.id

    //     const seriesDao = app.models.Series

    //     seriesDao.buscaPorId(id)

    //         .then(serie => {
    //             if(!serie){
    //                 res.status(404).send()
    //             } else{
    //                 res.send(serie)
    //             }
    //         })

    //         .catch(erro => {
    //             console.log("Erro ao buscar serie" + erro)

    //             res.status(500).send(erro)
    //         })

    // })

    // DELETE

    // app.delete("/series/:id", (req,res) => {
    //     const id = req.params.id

    //     const seriesDao = app.models.Series

    //     seriesDao.delete(id)
    //         .then(serie => {

    //             if(!serie.affectedRows){
    //                 res.status(404).send({status: 'id não encontrado'})
    //                 return
    //             }

    //              res.status(200).send({message:"Serie deletada"})
    //         })
    //         .catch(erro => {
    //             console.log("Erro ao deletar serie" + erro)

    //             res.status(500).send(["Erro ao deletar"])
    //         })

    // })

    // //PUT

    // app.put("/series/:id", (req, res) => {

    //     const id = req.params.id

    //     const series = req.body
    //     series.id = id

    //     const seriesDao = app.models.Series

    //     seriesDao.update(series)
    //         .then(retorno => {

    //         if(!retorno.affectedRows){
    //             res.status(404).send({status: 'serie não encontrada'})
    //             return
    //         }

    //          res.status(200).send({message:"Serie atualizada"})
    //          })

    //          .catch(erro => res.status(500).send(erro))
    // })



}

// module.exports = series;