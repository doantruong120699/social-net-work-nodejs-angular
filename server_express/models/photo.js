'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Photo.belongsTo(models.Album);
      Photo.belongsTo(models.User);
    }
  }
  Photo.init({
    album_id: DataTypes.INTEGER,
    caption: DataTypes.TEXT,
    url: DataTypes.TEXT,
    height: DataTypes.INTEGER,
    width: DataTypes.INTEGER,
    owner_id: DataTypes.INTEGER,
    likes: DataTypes.INTEGER,
    comments: DataTypes.INTEGER,
    share: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Photo',
  });
  return Photo;
};