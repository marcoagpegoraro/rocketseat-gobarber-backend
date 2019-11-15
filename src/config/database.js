module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true, // created at, updated at columns
    underscored: true,
    underscoredAll: true,
  }
}