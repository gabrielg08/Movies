const Movies = require('./Movies')
const Actors = require('./Actors')
const Directors = require('./Directors')
const Generes = require('./Generes')

//Pivot

Movies.belongsToMany(Actors, { through: 'MovieActor' });
Movies.belongsToMany(Directors, { through: 'MovieDirector' });
Movies.belongsToMany(Generes, { through: 'MovieGenre' });

Actors.belongsToMany(Movies, { through: 'MovieActor' });

Directors.belongsToMany(Movies, { through: 'MovieDirector' });

Generes.belongsToMany(Movies, { through: 'MovieGenre' });
