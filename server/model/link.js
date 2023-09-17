const LINK = (sequelize, DataTypes) => {
  var table = sequelize.define('link', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    from: DataTypes.STRING,
    signature: DataTypes.STRING,
    tokenID:  DataTypes.STRING,
    date: DataTypes.STRING,
    status: DataTypes.STRING
  })
  table.sync();
  return table;
}

export default LINK;