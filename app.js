
const mongoose = require('mongoose'); 

mongoose.connect('mongodb+srv://Grupo-13:grupo13@cursadanodejs.ls9ii.mongodb.net/Node-js' , {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conexion exitosa a MongoDB'))
.catch(error => console.error('Error al conectar MongoDB:', error));



const SuperheroSchema = new mongoose.Schema(
    {   
        nombreSuperHeroe: { type: String, required: true },
        nombreReal: { type: String, required: true },
        edad: { type: Number, min: 0 },
        planetaOrigen: { type: String, default: 'Desconocido' },
        debilidad: { type: String },
        poderes: { type: [String] },
        aliados: { type: [String] },
        enemigos: { type: [String] },
        createdAt : {type: Date, default: Date.now},
        creador: String 
    }, { collection:'Grupo-13' });
    
    const modeloSuperheroe = mongoose.model('Grupo-13', SuperheroSchema, 'Grupo-13');
    
    async function insertarSuperHeroe() {
        const hero = new modeloSuperheroe({
            nombreSuperHeroe: 'Shadow Striker',
            nombreReal: 'Ethan Drake',
            edad: 32,
            planetaOrigen: 'Nebulon-5',
            debilidad: 'Luz intensa',
            poderes: [
                'Invisibilidad en la oscuridad',
                'Teletransportación a corta distancia',
                'Reflejos sobrehumanos',
                'Maestro en combate cuerpo a cuerpo'
            ],
            aliados: ['Night Phantom', 'Cyber Guardian'],
            enemigos: ['Doctor Eclipse', 'Crimson Reaper'],
            creador: 'Carlos'
        });
    
        await hero.save();
        console.log('Superhéroe insertado:', hero);
    }
    
    insertarSuperHeroe();
    
    async function insertMultipleSuperHeroes() {
      const heroes = [
        
          {
              nombreSuperHeroe: 'Wonder Woman',
              nombreReal: 'Diana Prince',
              edad: 2500,
              planetaOrigen: 'Tierra',
              debilidad: 'ninguna',
              poderes: ['Fuerza','Volar','Velocidad','Reflejos'],
              aliados: ['Superman','Batman','Aquaman'],
              enemigos: ['Baronesa Paula Von Gunther', 'Cheetah', 'Ares', 'Doctor Poison'],
              creador: 'Carlos'
          },
          {
              nombreSuperHeroe: 'Black Widow',
              nombreReal: 'Natasha Romanoff',
              edad: 33,
              planetaOrigen: 'Tierra',
              debilidad: 'Ninguna conocida',
              poderes: ['Maestría en combate', 'Espionje'],
              aliados: ['Hawkeye'],
              enemigos: ['Taskmaster'],
              creador: 'Carlos'
          },
          {
              nombreSuperHeroe: 'Hulk',
              nombreReal: 'Bruce Banner',
              edad: 40,
              planetaOrigen: 'Tierra',
              debilidad: 'Control emocional',
              poderes: ['Fuerza bruta', 'Resistencia'],
              aliados: ['Ironman'],
              enemigos: ['loki'],
              creador: 'Carlos'
          },
          {
              nombreSuperHeroe: 'Capitan America',
              nombreReal: 'Steve Rogers',
              edad: 102,
              planetaOrigen: 'Tierra',
              debilidad: 'No tiene habilidades sobrehumanas',
              poderes: ['Fuerza aumentada', 'Agilidad'],
              aliados: ['Bucky Barnes'],
              enemigos: ['Red Skull'],
              creador: 'Carlos'
          },
          {
              nombreSuperHeroe: 'Doctor Strange',
              nombreReal: 'Stephen Strange',
              edad: 40,
              planetaOrigen: 'Tierra',
              debilidad:'Desconocida',
              poderes: ['Magia','Teletransportación'],
              aliados: ['Wong'],
              enemigos: ['Dormammu'],
              creador: 'Carlos'
          }
      ];
  
      await SuperHero.insertMany(heroes);
      console.log('Superhéroes insertados:', heroes);
  }
  
    
    async function actualizarSuperHeroe(nombreSuperHeroe) {
        const result = await modeloSuperheroe.updateOne(
          { nombreSuperHeroe: nombreSuperHeroe },
          { $set: { edad: 26 } }
        );
        console.log('Resultado de la actualización: ', result);
      }
      
    actualizarSuperHeroe('Shadow Striker');
    
    
     
    
    async function borrarSuperHeroe(nombreSuperHeroe) {
       
        const result = await modeloSuperheroe.deleteOne({nombreSuperHeroe: nombreSuperHeroe});
        console.log('Superheroe eliminado:',result);
      }
      
     
    borrarSuperHeroe('Shadow Striker'); 
    
     async function buscarSuperHeroes() {
        const superHeroes = await modeloSuperheroe.find({ nombreSuperHeroe: 'Shadow Striker' });
        console.log('Superhéroes encontrados:', superHeroes);
      }
      
     buscarSuperHeroes();
    
    