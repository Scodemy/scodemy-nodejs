module.exports = () => {
  function index(req, res) {
    res.json({
      status: 'Alive'
    })
  }

  return {
    index
  }
}
