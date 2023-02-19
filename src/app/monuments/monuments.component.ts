import { Component } from '@angular/core';

@Component({
  selector: 'app-monuments',
  templateUrl: './monuments.component.html',
  styleUrls: ['./monuments.component.scss']
})
export class MonumentsComponent {
  monuments = [
    {title: "Las Médulas",content: "Las Médulas is a historic gold-mining site near the town of Ponferrada in the comarca of El Bierzo (province of León, Castile and León, Spain). It was the most important gold mine, as well as the largest open-pit gold mine in the entire Roman Empire. Las Médulas Cultural Landscape is listed by UNESCO as a World Heritage Site. Advanced aerial surveys conducted in 2014 using LIDAR have confirmed the wide extent of the Roman-era works."},
    {title: "Ojo Guareña",content: "Ojo Guareña is a karst complex located in the Cantabrian Mountains of Castile and Leon, Spain, declared a natural monument by the government of Castile and Leon in 1996. It is composed of over 90 kilometres (56 mi) of galleries and passages within an area of some 13,850 hectares (34,200 acres). The limestone formation containing the system is approximately 100 metres (330 ft) thick and sits on a massive water-resistant layer of marl. The caves were formed in the limestone by erosion sometime within the Coniacian Age. Ojo Guareña was considered the greatest karst system of the Iberian Peninsula until 2009, when a significant length of new passages was discovered in the Mortillano system."},
    {title: "Abbey of Santo Domingo de Silos",content: "Santo Domingo de Silos Abbey (Spanish: Abadía del Monasterio de Santo Domingo de Silos) is a Benedictine monastery in the village of Santo Domingo de Silos in the southern part of Burgos Province in northern Spain. The monastery is named after the eleventh-century saint Dominic of Silos."},
    {title: "Burgos Cathedral",content: "The Cathedral of Saint Mary of Burgos (Spanish: Santa Iglesia Basílica Catedral Metropolitana de Santa María de Burgos) is a Catholic church dedicated to the Virgin Mary located in the historical center of the Spanish city of Burgos. Its official name is Santa Iglesia Catedral Basílica Metropolitana de Santa María de Burgos. "}
  ]
}
