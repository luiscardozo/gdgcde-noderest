'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hotel = sequelize.define('Hotel', {
    nombre: DataTypes.STRING,
    direccion: DataTypes.STRING,
    latitud: DataTypes.DECIMAL,
    longitud: DataTypes.DECIMAL,
    imagenUrl: {
      field: 'imagen_url',
      type: DataTypes.STRING
    }
  },
  {
    timestamps: false,
    tableName: 'hotel',
  });
  Hotel.associate = function(models) {
    // associations can be defined here
  };
  return Hotel;
};