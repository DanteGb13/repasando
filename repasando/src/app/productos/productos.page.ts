import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],

  
})
export class ProductosPage implements OnInit {
     
//define la lista de productos con sus respectivas imágenes y descripciones. 
  productos = [
    {
      nombre: 'OnePice',
      descripcion: 'narra las aventuras de Monkey D. Luffy y su tripulación mientras buscan el tesoro legendario para que Luffy se convierta en el Rey de los Piratas.',
      imagen: 'assets/img/onepice.jpg',
      precio: 10000
    },
    {
      nombre: 'Superman',
      descripcion: 'Superman es un superhéroe de DC Comics, un extraterrestre de Krypton con poderes sobrehumanos, que protege la Tierra como Clark Kent.',
      imagen: 'assets/img/superman.jpg',
      precio: 20000
    },
    {
      nombre: 'Batman',
      descripcion: 'Batman es un millonario de Gotham City que lucha contra el crimen como el vigilante enmascarado, usando habilidades y tecnología sin superpoderes.',
      imagen: 'assets/img/batman.jpg',
      precio: 20000
    },
    {
      nombre: 'Jocker',
      descripcion: 'El Joker es el enemigo loco y caótico de Batman, conocido por su estilo de payaso y su deseo de causar caos.',
      imagen: 'assets/img/jocker.jpg',
      precio: 20000
    },
    {
      nombre: 'Harley Queen',
      descripcion: 'Harley Quinn es una villana de DC Comics, ex psiquiatra del Joker, conocida por su estilo excéntrico y caos.',
      imagen: 'assets/img/harley.jpg',
      precio: 20000
    },
    {
      nombre: 'Naruto',
      descripcion: '"Naruto" cuenta la historia de Naruto Uzumaki, un joven ninja que sueña con convertirse en el Hokage y ganarse el respeto de su aldea.',
      imagen: 'assets/img/naruto.jpg',
      precio: 20000
    },
    {
      nombre: 'Jujutsu Kaisen',
      descripcion: '"Jujutsu Kaisen" sigue a Yuji Itadori, quien obtiene habilidades sobrenaturales al consumir un objeto maldito y lucha contra maldiciones en una escuela de hechicería.',
      imagen: 'assets/img/jujutsukaisen.jpg',
      precio: 20000
    },
    {
      nombre: 'One Punch Man',
      descripcion: '"One Punch Man" sigue a Saitama, un héroe que derrota a todos con un solo golpe y busca un desafío real.',
      imagen: 'assets/img/onepunchman.jpg',
      precio: 20000
    },
    {
      nombre: 'Chainsawman',
      descripcion: '"Chainsaw Man" sigue a Denji, un cazador de demonios que obtiene poderes de motosierra y busca una vida mejor mientras enfrenta criaturas infernales.',
      imagen: 'assets/img/chainsawman.jpg',
      precio: 20000
    },


    // Añade más productos según sea necesario
  ];

  constructor() { }

  ngOnInit() {
  }

}
