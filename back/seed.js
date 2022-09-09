const { ModelOrientado, ModelOrientador } = require('./database/associations.js');
const ModelNovedades = require('./database/models/ModelNovedades.js');
const ModelAdmin = require('./database/models/ModelAdmin.js');
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
}];

const novedades = [{
    titulo: "Mr. Average",
    content: "ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget",
    link: "https://weebly.com/odio/curabitur/convallis.png?rhoncus=dis&mauris=parturient&enim=montes&leo=nascetur&rhoncus=ridiculus&sed=mus&vestibulum=vivamus&sit=vestibulum&amet=sagittis&cursus=sapien&id=cum&turpis=sociis&integer=natoque&aliquet=penatibus&massa=et"
  }, {
    titulo: "Unfinished Life, An",
    content: "consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus",
    link: "https://jiathis.com/donec/quis/orci/eget.png?aliquam=curabitur&quis=in&turpis=libero&eget=ut&elit=massa&sodales=volutpat&scelerisque=convallis&mauris=morbi&sit=odio&amet=odio&eros=elementum&suspendisse=eu&accumsan=interdum&tortor=eu&quis=tincidunt&turpis=in&sed=leo&ante=maecenas&vivamus=pulvinar&tortor=lobortis&duis=est&mattis=phasellus&egestas=sit&metus=amet&aenean=erat&fermentum=nulla&donec=tempus&ut=vivamus"
  }, {
    titulo: "Creature from the Haunted Sea",
    content: "vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit",
    link: "https://biglobe.ne.jp/ipsum/dolor/sit/amet/consectetuer.png?id=pellentesque&mauris=volutpat&vulputate=dui&elementum=maecenas&nullam=tristique&varius=est&nulla=et&facilisi=tempus&cras=semper&non=est&velit=quam&nec=pharetra&nisi=magna&vulputate=ac&nonummy=consequat&maecenas=metus&tincidunt=sapien&lacus=ut&at=nunc&velit=vestibulum&vivamus=ante&vel=ipsum&nulla=primis&eget=in&eros=faucibus&elementum=orci&pellentesque=luctus"
  }, {
    titulo: "Hunted, The",
    content: "ipsum primis in faucibus orci luctus et ultrices posuere cubilia",
    link: "http://army.mil/vehicula/consequat/morbi/a/ipsum/integer.aspx?tellus=vitae&semper=consectetuer&interdum=eget&mauris=rutrum&ullamcorper=at&purus=lorem&sit=integer&amet=tincidunt&nulla=ante&quisque=vel&arcu=ipsum&libero=praesent&rutrum=blandit&ac=lacinia&lobortis=erat&vel=vestibulum&dapibus=sed&at=magna&diam=at&nam=nunc&tristique=commodo&tortor=placerat"
  }, {
    titulo: "It's a Wonderful Afterlife",
    content: "massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec",
    link: "https://wordpress.org/tincidunt/ante/vel/ipsum/praesent/blandit/lacinia.html?aenean=ligula&lectus=suspendisse&pellentesque=ornare&eget=consequat&nunc=lectus&donec=in&quis=est&orci=risus&eget=auctor&orci=sed&vehicula=tristique&condimentum=in&curabitur=tempus&in=sit&libero=amet&ut=sem&massa=fusce&volutpat=consequat&convallis=nulla&morbi=nisl&odio=nunc&odio=nisl&elementum=duis&eu=bibendum&interdum=felis&eu=sed&tincidunt=interdum&in=venenatis&leo=turpis&maecenas=enim&pulvinar=blandit&lobortis=mi&est=in&phasellus=porttitor&sit=pede&amet=justo&erat=eu&nulla=massa&tempus=donec&vivamus=dapibus&in=duis&felis=at&eu=velit"
  }, {
    titulo: "Dead Rising: Watchtower",
    content: "vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in",
    link: "http://amazon.co.uk/consequat/nulla.aspx?nullam=odio&molestie=cras&nibh=mi&in=pede&lectus=malesuada&pellentesque=in&at=imperdiet&nulla=et&suspendisse=commodo&potenti=vulputate&cras=justo&in=in&purus=blandit&eu=ultrices&magna=enim&vulputate=lorem&luctus=ipsum&cum=dolor&sociis=sit&natoque=amet&penatibus=consectetuer&et=adipiscing&magnis=elit&dis=proin&parturient=interdum&montes=mauris&nascetur=non&ridiculus=ligula&mus=pellentesque&vivamus=ultrices&vestibulum=phasellus&sagittis=id&sapien=sapien&cum=in&sociis=sapien&natoque=iaculis&penatibus=congue&et=vivamus&magnis=metus&dis=arcu&parturient=adipiscing&montes=molestie&nascetur=hendrerit&ridiculus=at&mus=vulputate&etiam=vitae&vel=nisl&augue=aenean&vestibulum=lectus&rutrum=pellentesque&rutrum=eget&neque=nunc&aenean=donec&auctor=quis&gravida=orci&sem=eget&praesent=orci&id=vehicula&massa=condimentum&id=curabitur&nisl=in&venenatis=libero&lacinia=ut&aenean=massa&sit=volutpat&amet=convallis&justo=morbi&morbi=odio&ut=odio&odio=elementum&cras=eu&mi=interdum&pede=eu&malesuada=tincidunt&in=in&imperdiet=leo&et=maecenas&commodo=pulvinar&vulputate=lobortis&justo=est"
  }, {
    titulo: "Aningaaq",
    content: "mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc",
    link: "http://storify.com/mauris/sit/amet.aspx?ipsum=imperdiet&aliquam=sapien&non=urna&mauris=pretium&morbi=nisl&non=ut&lectus=volutpat&aliquam=sapien&sit=arcu&amet=sed&diam=augue&in=aliquam&magna=erat&bibendum=volutpat&imperdiet=in&nullam=congue&orci=etiam&pede=justo&venenatis=etiam&non=pretium&sodales=iaculis&sed=justo&tincidunt=in&eu=hac&felis=habitasse&fusce=platea&posuere=dictumst&felis=etiam&sed=faucibus&lacus=cursus&morbi=urna&sem=ut&mauris=tellus&laoreet=nulla&ut=ut&rhoncus=erat&aliquet=id&pulvinar=mauris&sed=vulputate&nisl=elementum&nunc=nullam&rhoncus=varius&dui=nulla&vel=facilisi&sem=cras&sed=non&sagittis=velit&nam=nec&congue=nisi&risus=vulputate&semper=nonummy"
  }, {
    titulo: "Remorques (Stormy Waters)",
    content: "nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit",
    link: "https://tumblr.com/enim.jsp?nisl=in&aenean=felis&lectus=eu&pellentesque=sapien&eget=cursus&nunc=vestibulum&donec=proin&quis=eu&orci=mi&eget=nulla&orci=ac&vehicula=enim&condimentum=in&curabitur=tempor&in=turpis&libero=nec&ut=euismod&massa=scelerisque&volutpat=quam&convallis=turpis&morbi=adipiscing&odio=lorem&odio=vitae&elementum=mattis&eu=nibh&interdum=ligula&eu=nec&tincidunt=sem&in=duis&leo=aliquam&maecenas=convallis&pulvinar=nunc&lobortis=proin&est=at&phasellus=turpis&sit=a&amet=pede&erat=posuere&nulla=nonummy&tempus=integer&vivamus=non&in=velit&felis=donec&eu=diam&sapien=neque&cursus=vestibulum&vestibulum=eget"
  }, {
    titulo: "Tom, Tom, the Piper's Son",
    content: "id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam",
    link: "https://eepurl.com/dui.png?nec=odio&nisi=in&volutpat=hac&eleifend=habitasse&donec=platea&ut=dictumst&dolor=maecenas&morbi=ut&vel=massa&lectus=quis&in=augue&quam=luctus&fringilla=tincidunt&rhoncus=nulla&mauris=mollis&enim=molestie&leo=lorem&rhoncus=quisque&sed=ut&vestibulum=erat&sit=curabitur&amet=gravida&cursus=nisi&id=at&turpis=nibh&integer=in&aliquet=hac&massa=habitasse&id=platea&lobortis=dictumst&convallis=aliquam&tortor=augue&risus=quam&dapibus=sollicitudin&augue=vitae&vel=consectetuer&accumsan=eget&tellus=rutrum&nisi=at&eu=lorem&orci=integer&mauris=tincidunt&lacinia=ante&sapien=vel&quis=ipsum&libero=praesent&nullam=blandit&sit=lacinia&amet=erat&turpis=vestibulum&elementum=sed&ligula=magna&vehicula=at&consequat=nunc&morbi=commodo&a=placerat&ipsum=praesent&integer=blandit"
  }, {
    titulo: "Falling in Love Again",
    content: "ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui",
    link: "https://dailymotion.com/nunc.html?egestas=mauris&metus=lacinia&aenean=sapien&fermentum=quis&donec=libero&ut=nullam&mauris=sit&eget=amet&massa=turpis&tempor=elementum&convallis=ligula&nulla=vehicula&neque=consequat&libero=morbi&convallis=a&eget=ipsum&eleifend=integer&luctus=a&ultricies=nibh&eu=in&nibh=quis&quisque=justo&id=maecenas&justo=rhoncus&sit=aliquam&amet=lacus&sapien=morbi&dignissim=quis&vestibulum=tortor&vestibulum=id&ante=nulla&ipsum=ultrices&primis=aliquet&in=maecenas&faucibus=leo&orci=odio&luctus=condimentum&et=id&ultrices=luctus&posuere=nec&cubilia=molestie&curae=sed&nulla=justo&dapibus=pellentesque&dolor=viverra&vel=pede&est=ac&donec=diam&odio=cras&justo=pellentesque&sollicitudin=volutpat&ut=dui&suscipit=maecenas&a=tristique&feugiat=est&et=et&eros=tempus&vestibulum=semper&ac=est&est=quam&lacinia=pharetra&nisi=magna&venenatis=ac&tristique=consequat&fusce=metus&congue=sapien&diam=ut&id=nunc&ornare=vestibulum&imperdiet=ante&sapien=ipsum&urna=primis&pretium=in&nisl=faucibus&ut=orci&volutpat=luctus"
  }];

  const admin = [
    {user: 'admin1', password: 'admin1', name: 'Felipe', lastname: 'Anselmo', email: 'filipanselmo@admin.com', phone: '(495) 918-2532', linkedin: 'www.linkedin/dementira'},
    {user: 'admin2', password: 'admin2', name: 'Michael', lastname: 'Jackson', email: 'imnotdead@volviamiplaneta.com', phone: '0303-456', linkedin: 'www.linkedin/shanana'},
    {user: 'admin3', password: 'admin3', name: 'Lord', lastname: 'Voldemort', email: 'hewhomust@notbenamed.com', phone: '495) 918-2532', linkedin: 'www.linkedin/dementira'}
]

const añadir = async () => {
    try {
        sequelize.sync({ force: false });
        console.log('Conexion establecida'); //Descomentar uno por uno para que ande. Buscar error porque no anda todo junto (Creo que es necesario poner el await, solo que no se donde)
        orientadores.forEach((orientadores) => ModelOrientador.create(orientadores));
        orientados.forEach((orientados) => ModelOrientado.create(orientados));
        novedades.forEach((novedades) => ModelNovedades.create(novedades));
        admin.forEach((admin) => ModelAdmin.create(admin));
    }
    catch(error){
        console.log(error);
    }
}
añadir()