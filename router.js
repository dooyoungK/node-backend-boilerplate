module.exports = function(app) {
    //define route that user can visit.
    app.get('/', function(req, res, next) {
        res.send(['waterbottle', 'phone', 'paper']);
    });

}