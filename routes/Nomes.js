class Nomes {

  constructor() {
    this.names = [
      {
        name: 'Henri',
        meaning: 'O governante da casa, senhor do lar'
      },
      {
        name: 'Joviane',
        meaning: 'Presente de Júpiter'
      },
      {
        name: 'Luna',
        meaning: 'Lua, a iluminada, a feminina'
      }
    ]
  }

  getAll(req, res) {
    res.send(this.names)
  }

  getNameId(req, res) {
    const id = req.params.id

    res.send(this.names[id])
  }

  create(req, res) {
    const name = req.body

    this.names.push(name)  

    res.send(this.names)
  }

  remove(req, res) {
    const id = req.params.id

    this.names.splice(id, 1)

    res.send({
      status: 200,
      msg: `O nome do id: ${id}, foi excluído com sucesso`
    })
  }

  update(req, res) {
      const id = req.params.id
      const name = req.body
    
      this.names[id] = name
    
      res.send(this.names)
  }
}

module.exports = new Nomes()