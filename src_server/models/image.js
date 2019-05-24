module.exports = (sequelize,Sequelize) =>{
    const Image = sequelize.define('image', {
        name: {
          type: Sequelize.STRING,
        },
        image: {
          type: Sequelize.STRING,
        },
        owner: {
          type: Sequelize.STRING,
        },
      });
    /*
    Product.sync()
        .then(() => console.log('Product table created successfully'))
        .catch(err => console.log('oooh, did you enter wrong database credentials?'));
    */
    return Image;
}
