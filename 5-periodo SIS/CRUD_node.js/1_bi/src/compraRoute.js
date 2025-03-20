const compraController = require("./compraController");

module.exports = (app) => {
    app.post("/compra", compraController.post);          
    app.put("/compra/:id", compraController.put);        
    app.delete("/compra/:id", compraController.delete);  
    app.get("/compra", compraController.get);            
    app.get("/compra/:id", compraController.getByIdCompra);  
};
