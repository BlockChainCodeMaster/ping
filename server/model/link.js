const LINK = (sequelize, DataTypes) => {
  var table = sequelize.define('link', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    from: DataTypes.STRING,
    to: DataTypes.STRING,
    signature: DataTypes.STRING,
    date: DataTypes.STRING,
    inviteCode: DataTypes.STRING,
    ga: DataTypes.STRING,
    status: DataTypes.INTEGER
  })
  table.sync();
  return table;
}

export default LINK;