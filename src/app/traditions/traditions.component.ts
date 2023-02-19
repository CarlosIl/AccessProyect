import { Component } from '@angular/core';

@Component({
  selector: 'app-traditions',
  templateUrl: './traditions.component.html',
  styleUrls: ['./traditions.component.scss']
})
export class TraditionsComponent {
  traditions = [
    { title: "Holy Week in Valladolid", content: "The Holy Week in Valladolid is one of the main tourist attractions, and cultural and religious events of Valladolid and the surrounding province during Holy Week in Spain. It boasts of renowned polychrome sculptures, created mainly by sculptors such as Juan de Juni and Gregorio Fernández, who were active when the city served as the imperial court. The city's National Sculpture Museum has a total of 42 images (distributed in the corresponding pasos) for the processions. The Holy Week in Valladolid is known to depict the Passion with great fidelity, rigor and detail."},
    { title: "Holy Week in Zamora", content: "Holy Week in Zamora, Spain, is the annual commemoration of the Passion of Jesus Christ that takes place during the last week of Lent, the week immediately before Easter. Holy Week is the Christian week from Palm Sunday (also called Passion Sunday) through Easter Sunday. It can take place in March or April. In Zamora, Holy Week is celebrated by 16 Catholic religious brotherhoods and fraternities that perform penance processions on the streets of the city. "},
    { title: "Carnival of La Bañeza", content: "The Carnival of La Bañeza (also called winter festivals, carnivals, the run of carnival, antruejo), in the province of Leon, is a festival declared of national tourist interest[1][2] that began to gain importance and fame at the beginning of the 20th century during the repression under Franco, due to the prohibition of concealing one's face or wearing a costume. The main characteristic of La Bañeza's carnival is the absence of a costume competition with prizes and monetary compensation for participating, which may occur in carnivals elsewhere. Most of the city dedicates themselves wholeheartedly to the festival, passing on interest through generations. In many cases, participants prepare a year in advance, searching for accessories, fabrics, masks and acts they will perform, motivated by a 'carnival feeling', lived during those days. Given this, the disorganized carnival is becoming increasingly popular, dressing up outside of parade hours, or on days without events, in the workplace, etc. looking to surprise and amaze the citizens and visitors. "},
    { title: "Saint John of the Mountain Festival", content: "Saint John of the Mountain Festival is a festival in the town of Miranda de Ebro in the autonomous community of Castile and León, in Spain. It is celebrated on the Monday of Pentecost and it is the second most important romeria in Spain behind El Rocío. "}
  ]
}
