module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  define: {
    timestamps: true, // created at, updated at columns
    underscored: true,
    underscoredAll: true,
  }
}