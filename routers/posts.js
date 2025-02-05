const express = require ('express')
const router = express.Router();

// rotte per le operazioni CRUD (Index, Show, Create, Update e Delete)
console.log('bibi');


 // index
router.get('/', (req, res) => {
    res.send('Server del tuo blog')
    });

 // show
router.get('/:id', (req, res) => {
    res.send('dettagli' + req.params.id)
    });

 // create
router.get('/:id', (req, res) => {
    res.send('dettagli' + req.params.id)
    });

// update
router.put('/:id', (req, res) => {
    res.send('modifica' + req.params.id);
});

// delete
router.delete('/:id', (req, res) => {
    res.send('delete' + req.params.id);
});


module.exports = router;

