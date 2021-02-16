module.exports = function (sequelize, DataTypes) {
  var Projects = sequelize.define("Projects", {
  });

  // associate UserEvents with Users and Events
  Projects.associate = models => {
    // Each project belongs to me
    models.Projects.belongsTo(models.User, { onDelete: "cascade" });

    // 
    models.Projects.hasMany(models.Skills, { onDelete: "cascade" });
  }

  return Skills;
}