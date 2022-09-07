const { ModelOrientado, ModelOrientador } = require('./database/associations.js');
const sequelize = require('./database/db.js');

const orientadores = [
    { name: 'Cristian', lastname: 'Vera', email: 'cristianvera@academy.com', age: 47 },
    { name: 'Macarena', lastname: 'Leiva', email: 'macaleiva@academy.com', age: 40 },
    { name: 'Ezequiel', lastname: 'Rodriguez', email: 'ezerodriguez@academy.com', age: 48 },
    { name: 'Gonzalo', lastname: 'Cataldo', email: 'gonzacataldo@academy.com', age: 37 },
    { name: 'Iara', lastname: 'Gerardi', email: 'gerardiiara@academy.com', age: 39 },
    { name: 'Sebastian', lastname: 'Avila', email: 'avilaseba@academy.com', age: 42 },
    { name: 'Ayelen', lastname: 'Maidana', email: 'ayemaidana@academy.com', age: 36 },
    { name: 'Maximiliano', lastname: 'Portel', email: 'maxportel@academy.com', age: 45 },
];

const orientados = [{
    name: "Purcell",
    lastname: "MacConnechie",
    email: "pmacconnechie0@sogou.com",
    phone: "+380 (478) 588-4037",
    dni: 65100915,
    age: "7/18/1996",
    school: "Ilene",
    address: "1 5th Court",
    OrientadoreId: 7
}, {
    name: "Ailey",
    lastname: "Fouldes",
    email: "afouldes1@virginia.edu",
    phone: "+62 (662) 457-2062",
    dni: 37405345,
    age: "9/16/2000",
    school: "Hovde",
    address: "146 Rusk Way",
    OrientadoreId: 8
}, {
    name: "Foster",
    lastname: "Lowy",
    email: "flowy2@google.pl",
    phone: "+351 (284) 486-7837",
    dni: 35340973,
    age: "12/13/1998",
    school: "Fremont",
    address: "4612 Farmco Court",
    OrientadoreId: 4
}, {
    name: "Penelopa",
    lastname: "Rikkard",
    email: "prikkard3@dailymotion.com",
    phone: "+967 (744) 618-3749",
    dni: 76001228,
    age: "8/18/1994",
    school: "Namekagon",
    address: "0 Melvin Junction",
    OrientadoreId: 8
}, {
    name: "Maryellen",
    lastname: "Brehault",
    email: "mbrehault4@oracle.com",
    phone: "+54 (117) 986-5175",
    dni: 74956566,
    age: "9/30/1991",
    school: "Mosinee",
    address: "07659 Ludington Road",
    OrientadoreId: 1
}, {
    name: "Timi",
    lastname: "Vlasyuk",
    email: "tvlasyuk5@elpais.com",
    phone: "+55 (462) 168-4059",
    dni: 70440665,
    age: "9/23/1994",
    school: "Lerdahl",
    address: "7960 Mayfield Circle",
    OrientadoreId: 8
}, {
    name: "Shanna",
    lastname: "Candlin",
    email: "scandlin6@bigcartel.com",
    phone: "+30 (191) 567-8147",
    dni: 59650881,
    age: "9/19/1995",
    school: "Hovde",
    address: "5865 Hayes Way",
    OrientadoreId: 6
}, {
    name: "Alonso",
    lastname: "Creasy",
    email: "acreasy7@examiner.com",
    phone: "+62 (661) 940-9903",
    dni: 47890017,
    age: "3/28/1989",
    school: "Mosinee",
    address: "628 Loeprich Road",
    OrientadoreId: 6
}, {
    name: "Cordie",
    lastname: "Jaggard",
    email: "cjaggard8@cisco.com",
    phone: "+58 (656) 789-7715",
    dni: 53027642,
    age: "2/28/1998",
    school: "Anzinger",
    address: "7 Dunning Place",
    OrientadoreId: 5
}, {
    name: "Ambrosi",
    lastname: "Lauret",
    email: "alauret9@fda.gov",
    phone: "+86 (354) 353-0116",
    dni: 54951077,
    age: "9/13/1987",
    school: "Union",
    address: "1 Ridgeway Trail",
    OrientadoreId: 6
}, {
    name: "Aylmar",
    lastname: "Fourcade",
    email: "afourcadea@sourceforge.net",
    phone: "+30 (585) 839-9583",
    dni: 57520932,
    age: "12/24/1988",
    school: "Blaine",
    address: "163 Pond Center",
    OrientadoreId: 1
}, {
    name: "Allie",
    lastname: "Streater",
    email: "astreaterb@cargocollective.com",
    phone: "+62 (998) 308-2360",
    dni: 32848581,
    age: "11/16/2003",
    school: "Dapin",
    address: "62783 Ilene Circle",
    OrientadoreId: 5
}, {
    name: "Juieta",
    lastname: "Davidov",
    email: "jdavidovc@squarespace.com",
    phone: "+62 (983) 580-8341",
    dni: 79625877,
    age: "6/25/2003",
    school: "Heffernan",
    address: "38 Kings Terrace",
    OrientadoreId: 1
}, {
    name: "Timothea",
    lastname: "Sheal",
    email: "tsheald@archive.org",
    phone: "+86 (131) 198-5143",
    dni: 75968078,
    age: "1/26/2000",
    school: "Eliot",
    address: "86 Kim Crossing",
    OrientadoreId: 7
}, {
    name: "Olympie",
    lastname: "Kearley",
    email: "okearleye@blogspot.com",
    phone: "+30 (422) 218-2299",
    dni: 31938566,
    age: "12/7/1985",
    school: "Coleman",
    address: "39187 Welch Center",
    OrientadoreId: 3
}, {
    name: "Dorris",
    lastname: "Witter",
    email: "dwitterf@unicef.org",
    phone: "+850 (210) 235-5853",
    dni: 55910142,
    age: "11/21/1998",
    school: "Bashford",
    address: "7862 1st Point",
    OrientadoreId: 5
}, {
    name: "Erhard",
    lastname: "Gariff",
    email: "egariffg@economist.com",
    phone: "+51 (489) 982-4089",
    dni: 49477476,
    age: "9/8/1997",
    school: "Stone Corner",
    address: "341 Sauthoff Court",
    OrientadoreId: 7
}, {
    name: "Trudie",
    lastname: "Ayling",
    email: "taylingh@freewebs.com",
    phone: "+86 (808) 514-4813",
    dni: 62661324,
    age: "4/21/1989",
    school: "Dovetail",
    address: "29 Cordelia Street",
    OrientadoreId: null
}, {
    name: "Beatrice",
    lastname: "Bucky",
    email: "bbuckyi@unesco.org",
    phone: "+1 (683) 774-5426",
    dni: 43683836,
    age: "5/24/1988",
    school: "Donald",
    address: "14450 Blackbird Trail",
    OrientadoreId: null
}, {
    name: "Ottilie",
    lastname: "Compston",
    email: "ocompstonj@ow.ly",
    phone: "+241 (495) 918-2532",
    dni: 66395573,
    age: "12/16/1994",
    school: "Havey",
    address: "664 Parkside Park",
    OrientadoreId: null
}]

const añadir = async () => {
    try {
        
        sequelize.sync({ force: false });
        console.log('Conexion establecida'); //Descomentar uno por uno para que ande. Buscar error porque no anda todo junto (Creo que es necesario poner el await, solo que no se donde)
        orientadores.forEach((orientadores) => ModelOrientador.create(orientadores));
        orientados.forEach((orientados) => ModelOrientado.create(orientados));
    }
    catch(error){
        console.log(error);
    }
}
añadir()