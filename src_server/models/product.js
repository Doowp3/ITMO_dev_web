module.exports = (sequelize,Sequelize) =>{
    const Product = sequelize.define('product', {
        name: {
          type: Sequelize.STRING,
        },
        image: {
          type: Sequelize.BLOB('long'),
        },
        description: {
          type: Sequelize.STRING,
        },
      });
    /*
    Product.sync()
        .then(() => console.log('Product table created successfully'))
        .catch(err => console.log('oooh, did you enter wrong database credentials?'));
    */
    return Product;
}
