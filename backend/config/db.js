const { Sequelize } = require('sequelize');

// 创建数据库连接实例
const sequelize = new Sequelize('youshow', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // 禁止控制台日志
});

module.exports = sequelize;
