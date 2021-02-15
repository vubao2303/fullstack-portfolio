module.exports = function (sequelize, DataTypes) {
  var Skills = sequelize.define("Skills", {
  });

  // associate UserEvents with Users and Events
  Skills.associate = models => {
    // Each UserEvent belongs to one User
    models.Skills.belongsTo(models.User, { onDelete: "cascade" });
    // and One Event
    models.Skills.belongsTo(models.Project, { onDelete: "cascade" });
  }

  return Skills;
}