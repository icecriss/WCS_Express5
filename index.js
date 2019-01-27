// // const express = require('express');
// // const app = express();
// // const port = 3000;
// // const connection = require('./conf');
// // const bodyParser = require('body-parser');

// // // Support JSON-encoded bodies
// // app.use(bodyParser.json());
// // // Support URL-encoded bodies
// // app.use(bodyParser.urlencoded({
// //   extended: true
// // }));

// // app.post('/api/movies', (req, res) => {
// //   // TODO récupérer les données (étape 2)
// //   // Données stockées dans req.body
// //   const formData = req.body;
// //   // TODO enregistrer les données (étape 3)
// //   connection.query('INSERT INTO movie SET ?', formData, (err, results) => {
// //     // TODO envoyer une réponse au client (étape 4)
// //     if (err) {
// //       console.log(err);
// //       res.status(500).send("Something went wrong while trying to save a movie");
// //     } else {
// //       console.log(results);
// //       res.status(200).send('Youhooo, your movie has been added to the list');
// //     }
// //   });
// // });

// // // si l'id est passé en tant que paramètre
// // app.put('/api/movies/:id', (req, res) => {
// //   const idmovie = req.params.id;
// //   //TODO récupérer les données (étape 2)
// //   // Données stockées dans req.body
// //   const formData = req.body;
// //   // TODO modifier les données dans la table (étape 3)
// //   connection.query('UPDATE movie SET ? WHERE id = ?', [formData, idmovie], err => {
// //     // TODO envoyer une réponse au client (étape 4)
// //     if (err) {
// //       console.log(formData);
// //       console.log(err);
// //       res.status(500).send("Erreur lors de la modification d'un film");
// //     } else {
// //       res.sendStatus(200);
// //     }
// //   });

// // });

// // // // Si l'ID est passé en tant que donnée
// // // app.put('/api/employee', (req, res) => {
// // //   const idEmployee = req.body.id;
// // //   // TODO récupérer les données (étape 2)
// // //   // Données stockées dans req.body
// // //   const formData = req.body;
// // //   //TODO modifier les données dans la table (étape 3)
// // //   connection.query('UPDATE employee SET ? WHERE id = ?', [formData, idEmployee], err => {
// // //     // TODO envoyer une réponse au client (étape 4)
// // //     if (err) {
// // //       console.log(err);
// // //       res.status(500).send("Erreur lors de la modification d'un employé");
// // //     } else {
// // //       res.sendStatus(200);
// // //     }
// // //   });
// // // });

// // app.listen(port, (err) => {
// //   if (err) {
// //     throw new Error('Something bad happened...');
// //   }

// //   console.log(`Server is listening on ${port}`);
// // });


// const express = require('express');
// const app = express();
// const port = 3000;
// const connection = require('./conf');
// const bodyParser = require('body-parser');

// // Support JSON-encoded bodies
// app.use(bodyParser.json());
// // Support URL-encoded bodies
// app.use(bodyParser.urlencoded({
//   extended: true
// }));

// // si l'id est passé en tant que paramètre
// app.put('/api/movies/:id', (req, res) => {
//   const idmovie = req.params.id;
//   //TODO récupérer les données (étape 2)
//   // Données stockées dans req.body
//   const formData = req.body;
//   // TODO modifier les données dans la table (étape 3)
//   connection.query('UPDATE movie SET ? WHERE id = ?', [formData, idmovie], err => {
//     // TODO envoyer une réponse au client (étape 4)
//     if (err) {
//       console.log(formData);
//       console.log(err);
//       res.status(500).send("Erreur lors de la modification d'un film");
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });


// app.get('/api/movies', (req, res) => {
//   connection.query('SELECT id, name FROM movie', (err, results) => {
//     if (err) {
//       res.status(500).send('Erreur lors de la récupération des films');
//     } else {
//       res.json(results);
//     }
//   });
// });

// app.delete('/api/movies/:id', (req, res) => {
//   const movieId = req.params.id;
//   // TODO supprimer les données (étape 2)
//   connection.query('DELETE FROM movie WHERE id = ?', [movieId], err => {
//     // TODO envoyer une réponse au client (étape 3)
//     if (err) {
//       res.status(500).send("Erreur lors de la suppression d'un film");
//     } else {
//       console.log(req);
//       res.status(200).send(`The movie with id ${movieId} has been correctly deleted`);
//     }
//   });
// });



// app.listen(port, (err) => {
//   if (err) {
//     throw new Error('Something bad happened...');
//   }

//   console.log(`Server is listening on ${port}`);
// });

const express = require('express');
const app = express();
const port = 3000;
const connection = require('./conf');
const bodyParser = require('body-parser');

// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));

app.delete('/api/movies/:id', (req, res) => {
  const movieId = req.params.id;
  // TODO supprimer les données (étape 2)
  connection.query('DELETE FROM movie WHERE id = ?', [movieId], err => {
    // TODO envoyer une réponse au client (étape 3)
    if (err) {
      res.status(500).send("Erreur lors de la suppression d'un film");
    } else {
      console.log(req);
      res.status(200).send(`The movie with id ${movieId} has been correctly deleted`);
    }
  });
});

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});