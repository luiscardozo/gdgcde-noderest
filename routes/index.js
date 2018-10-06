var hotel = require('../controllers/hotel');

module.exports = function(router) {
    router.get('/hoteles', hotel.buscarTodos);
    router.get('/hoteles/:id', hotel.buscarPorId);
    router.post('/hoteles', hotel.crear);
    router.put('/hoteles/:id', hotel.actualizar);
    router.delete('/hoteles/:id', hotel.eliminar);

    return router;
}