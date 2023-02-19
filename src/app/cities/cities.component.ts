import { Component } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent {
  characters = [
    { name: "Ávila", img: "../../assets/imgs/avila.jpg", description: "It is the capital and most populated municipality of the Province of Ávila.\n\nÁvila was declared a UNESCO World Heritage Site in 1985. The site originally consisted of the walled city and four extra muros churches. The number of churches included in the site has since been increased.", link: "https://en.wikipedia.org/wiki/%C3%81vila" },
    { name: "Burgos", img: "../../assets/imgs/burgos.jpg", description: "It is the capital and most populated municipality of the province of Burgos.\n\nThe Museum of Human Evolution opened here in 2010. The museum features remains of the first hominins in Europe, who lived in this area 750,000-800,000 years ago. The Cathedral of Burgos is a World Heritage Site. Burgos was selected as the 'Spanish Gastronomy Capital' of 2013. In 2015 UNESCO named it 'City of Gastronomy', and it has been part of the Creative Cities Network since then.", link: "https://en.wikipedia.org/wiki/Burgos" },
    { name: "León", img: "../../assets/imgs/leon.jpg", description: "Founded as the military encampment of the Legio VI Victrix around 29 BC, its standing as an encampment city was consolidated with the definitive settlement of the Legio VII Gemina from 74 AD. Following its partial depopulation due to the Umayyad conquest of the peninsula, 910 saw the beginning of one its most prominent historical periods, when it became the capital of the Kingdom of León, which took active part in the Reconquista against the Moors, and came to be one of the fundamental kingdoms of medieval Spain.", link: "https://en.wikipedia.org/wiki/Le%C3%B3n,_Spain" },
    { name: "Palencia", img: "../../assets/imgs/palencia.jpg", description: "Palencia lies in the north of the central Spanish plateau, the Meseta Central, in the middle of the Carrión river valley, near the river's confluence with the Pisuerga, which flows through the town creating four islets, Dos Aguas and Sotillo being the largest. Palencia is located approximately 190 km north of Madrid, and some 40 km north of Valladolid, capital of Castile and León.", link: "https://en.wikipedia.org/wiki/Palencia" },
    { name: "Salamanca", img: "../../assets/imgs/salamanca.jpg", description: "Is a city in western Spain and is the capital of the Province of Salamanca in the autonomous community of Castile and León. The city lies on several rolling hills by the Tormes River. Its Old City was declared a UNESCO World Heritage Site in 1988. As of 2018, the municipality has a population of 143,978.", link: "https://en.wikipedia.org/wiki/Salamanca" },
    { name: "Segovia", img: "../../assets/imgs/segovia.jpg", description: "The city is famous for its historic buildings including three main landmarks: its midtown Roman aqueduct, its cathedral (one of the last ones to be built in Europe following a Gothic style), and the medieval castle, which served as one of the templates for Walt Disney's Cinderella Castle. The city center was declared of World Heritage by UNESCO in 1985.", link: "https://en.wikipedia.org/wiki/Segovia" },
    { name: "Soria", img: "../../assets/imgs/soria.jpg", description: "Is a municipality and a Spanish city, located on the Douro river in the east of the autonomous community of Castile and León and capital of the province of Soria. Its population is 38,881 (INE, 2017), 43.7% of the provincial population. The municipality has a surface area of 271,77 km2, with a density of 144.97 inhabitants/km2. Situated at about 1065 metres above sea level, Soria is the second highest provincial capital in Spain.", link: "https://en.wikipedia.org/wiki/Soria" },
    { name: "Valladolid", img: "../../assets/imgs/valladolid.jpg", description: "The old town is made up of a variety of historic houses, palaces, churches, plazas, avenues and parks, and includes the National Museum of Sculpture as well as the houses of Zorrilla and Cervantes which are open as museums. Among the events that are held each year in the city are the famous Holy Week, Valladolid International Film Festival (Seminci), and the Festival of Theatre and Street Arts (TAC). Together with another 15 surrounding municipalities, it belongs to an urban community of around 404,000 inhabitants.", link: "https://en.wikipedia.org/wiki/Valladolid" },
    { name: "Zamora", img: "../../assets/imgs/zamora.jpg", description: "Is a city and municipality of Spain located in the autonomous community of Castile and León. It is the capital of the province of Zamora. The city straddles the Duero river. With its 24 characteristic Romanesque style churches of the 12th and 13th centuries it has been called a 'museum of Romanesque art'. Zamora is the city with the most Romanesque churches in all of Europe. The most important celebration in Zamora is the Holy Week. ", link: "https://en.wikipedia.org/wiki/Zamora,_Spain" }
  ]
}