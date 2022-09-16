const { ModelOrientado, ModelOrientador } = require('./database/associations.js');
const ModelNovedades = require('./database/models/ModelNovedades.js');
const ModelAdmin = require('./database/models/ModelAdmin.js');
const sequelize = require('./database/db.js');

const orientadores = [
    { name: 'Cristian', lastname: 'Vera', email: 'cristianvera@academy.com', age: 47,avatar:'cristianVera.png' },
    { name: 'Macarena', lastname: 'Leiva', email: 'macaleiva@academy.com', age: 40,avatar:'macarenaLeiva.png' },
    { name: 'Ezequiel', lastname: 'Rodriguez', email: 'ezerodriguez@academy.com', age: 48,avatar:'ezequielRodriguez.png' },
    { name: 'Gonzalo', lastname: 'Cataldo', email: 'gonzacataldo@academy.com', age: 37,avatar:'gonzaloCataldo.png' },
    { name: 'Iara', lastname: 'Gerardi', email: 'gerardiiara@academy.com', age: 39,avatar:'iaraGerardi.png' },
    { name: 'Sebastian', lastname: 'Avila', email: 'avilaseba@academy.com', age: 42,avatar:'sebastianAvila.png' },
    { name: 'Ayelen', lastname: 'Maidana', email: 'ayemaidana@academy.com', age: 36,avatar:'ayelenMaidana.png' },
    { name: 'Maximiliano', lastname: 'Portel', email: 'maxportel@academy.com', age: 45,avatar:'maximilianoBeraud.png' },
];

const orientados = [{
    "name": "Adams",
    "password": "Q343fM",
    "lastname": "Roistone",
    "email": "aroistone0@nytimes.com",
    "phone": "6113510781",
    "photoProfile": "default1.png",
    "dni": 31630263,
    "age": "1984-01-04",
    "school": "Oneill",
    "address": "1077 Northfield Trail",
    "OrientadoreId": 7
  }, {
    "name": "Edythe",
    "password": "aqcoaxC3u",
    "lastname": "Starten",
    "email": "estarten1@google.com.hk",
    "phone": "6085446805",
    "photoProfile": "default2.png",
    "dni": 30522223,
    "age": "1981-07-19",
    "school": "Badeau",
    "address": "55 Golf Course Avenue",
    "OrientadoreId": 4
  }, {
    "name": "Dona",
    "password": "LZ8L38t",
    "lastname": "Stening",
    "email": "dstening2@forbes.com",
    "phone": "8029367451",
    "photoProfile": "default3.png",
    "dni": 34212925,
    "age": "1997-02-27",
    "school": "Ridgeway",
    "address": "6 Dakota Junction",
    "OrientadoreId": 8
  }, {
    "name": "Dorice",
    "password": "qEKKvg9BNGO",
    "lastname": "Backshill",
    "email": "dbackshill3@umich.edu",
    "phone": "4091770317",
    "photoProfile": "default4.png",
    "dni": 21977387,
    "age": "1979-04-09",
    "school": "Spenser",
    "address": "87 Shoshone Avenue",
    "OrientadoreId": 5
  }, {
    "name": "Hendrik",
    "password": "Stpo83W",
    "lastname": "Thorsby",
    "email": "hthorsby4@a8.net",
    "phone": "3773063391",
    "photoProfile": "default5.png",
    "dni": 41158365,
    "age": "1990-05-26",
    "school": "Merchant",
    "address": "16 Columbus Junction",
    "OrientadoreId": 3
  }, {
    "name": "Ned",
    "password": "iTlIKFRCTY5",
    "lastname": "Brown",
    "email": "nbrown5@w3.org",
    "phone": "9161218940",
    "photoProfile": "default6.png",
    "dni": 23340403,
    "age": "1996-11-08",
    "school": "Burning Wood",
    "address": "30225 Hagan Junction",
    "OrientadoreId": 7
  }, {
    "name": "Kendal",
    "password": "B5bw8D",
    "lastname": "Milkins",
    "email": "kmilkins6@mtv.com",
    "phone": "3059078476",
    "photoProfile": "default7.png",
    "dni": 46931124,
    "age": "1987-09-07",
    "school": "Reindahl",
    "address": "01426 Jay Junction",
    "OrientadoreId": 7
  }, {
    "name": "Margie",
    "password": "tCRpWwfo4tU",
    "lastname": "Danilchev",
    "email": "mdanilchev7@ebay.co.uk",
    "phone": "6271063476",
    "photoProfile": "default8.png",
    "dni": 49500048,
    "age": "1989-11-21",
    "school": "Lerdahl",
    "address": "9 Butternut Road",
    "OrientadoreId": 3
  }, {
    "name": "Alvira",
    "password": "EuCvMGO",
    "lastname": "Stygall",
    "email": "astygall8@printfriendly.com",
    "phone": "6013821494",
    "photoProfile": "default9.png",
    "dni": 29377386,
    "age": "2001-04-30",
    "school": "Vera",
    "address": "08967 Birchwood Road",
    "OrientadoreId": 3
  }, {
    "name": "Hewet",
    "password": "NmTxNcPcHjt",
    "lastname": "Dalziell",
    "email": "hdalziell9@youku.com",
    "phone": "8085279622",
    "photoProfile": "default10.png",
    "dni": 29166918,
    "age": "1999-12-18",
    "school": "Fieldstone",
    "address": "79 Mayfield Road",
    "OrientadoreId": 2
  }, {
    "name": "Maura",
    "password": "pk7tsg426s0",
    "lastname": "Hastler",
    "email": "mhastlera@nature.com",
    "phone": "5619620952",
    "photoProfile": "default20.png",
    "dni": 37208494,
    "age": "1994-11-21",
    "school": "Portage",
    "address": "7 Warbler Trail",
    "OrientadoreId": 6
  }, {
    "name": "Berti",
    "password": "se0UMPAOf",
    "lastname": "Wallbutton",
    "email": "bwallbuttonb@rambler.ru",
    "phone": "7041015879",
    "photoProfile": "default11.png",
    "dni": 32144595,
    "age": "1977-11-23",
    "school": "Fuller",
    "address": "90 Paget Park",
    "OrientadoreId": 8
  }, {
    "name": "Berkeley",
    "password": "OaUjtc51MK",
    "lastname": "Haldon",
    "email": "bhaldonc@miibeian.gov.cn",
    "phone": "9078488920",
    "photoProfile": "default12.png",
    "dni": 38433396,
    "age": "1976-06-17",
    "school": "Longview",
    "address": "33620 Prairieview Parkway",
    "OrientadoreId": 5
  }, {
    "name": "Brooke",
    "password": "ZfNNXLPHoos",
    "lastname": "Bielfelt",
    "email": "bbielfeltd@who.int",
    "phone": "5163091655",
    "photoProfile": "default13.png",
    "dni": 22864690,
    "age": "1987-09-07",
    "school": "Maple Wood",
    "address": "41639 Monterey Street",
    "OrientadoreId": 8
  }, {
    "name": "Alvera",
    "password": "bdEr1KCEz",
    "lastname": "Gainor",
    "email": "againore@google.pl",
    "phone": "4348360300",
    "photoProfile": "default14.png",
    "dni": 30315765,
    "age": "1988-01-11",
    "school": "Mifflin",
    "address": "699 Duke Road",
    "OrientadoreId": 1
  }, {
    "name": "Jolie",
    "password": "Isf2rsxQKbJH",
    "lastname": "Best",
    "email": "jbestf@blogspot.com",
    "phone": "6477356896",
    "photoProfile": "default15.png",
    "dni": 41812406,
    "age": "1995-04-06",
    "school": "Homewood",
    "address": "13281 Harbort Street",
    "OrientadoreId": 3
  }, {
    "name": "Sutherlan",
    "password": "7tQTgDF",
    "lastname": "Falloon",
    "email": "sfalloong@hibu.com",
    "phone": "6178869993",
    "photoProfile": "default16.png",
    "dni": 25284300,
    "age": "1980-12-25",
    "school": "Bayside",
    "address": "43796 1st Lane",
    "OrientadoreId": 1
  }, {
    "name": "Lief",
    "password": "RxhBSB1",
    "lastname": "Hannigan",
    "email": "lohanniganh@aboutads.info",
    "phone": "9151929118",
    "photoProfile": "default17.png",
    "dni": 47568414,
    "age": "1985-01-30",
    "school": "Clarendon",
    "address": "21 Green Point",
    "OrientadoreId": 7
  }, {
    "name": "Emelda",
    "password": "JBIw8QkV",
    "lastname": "Dionisetto",
    "email": "edionisettoi@sina.com.cn",
    "phone": "1135788922",
    "photoProfile": "default18.png",
    "dni": 28783672,
    "age": "1978-06-08",
    "school": "Porter",
    "address": "7853 Declaration Junction",
    "OrientadoreId": 4
  }, {
    "name": "Ive",
    "password": "3mjNxpIUk",
    "lastname": "Luscombe",
    "email": "iluscombej@reference.com",
    "phone": "4955222699",
    "photoProfile": "default19.png",
    "dni": 24817824,
    "age": "1979-08-02",
    "school": "Golf",
    "address": "3236 Shelley Trail",
    "OrientadoreId": 3
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
    {user: 'admin1', password: 'admin1', name: 'Felipe', lastname: 'Anselmo', email: 'filipanselmo@admin.com', phone: '(495) 918-2532', linkedin: 'www.linkedin/dementira',avatar:'admin1.png'},
    {user: 'admin2', password: 'admin2', name: 'Michael', lastname: 'Jackson', email: 'imnotdead@volviamiplaneta.com', phone: '0303-456', linkedin: 'www.linkedin/shanana',avatar:'admin2.png'},
    {user: 'admin3', password: 'admin3', name: 'Lord', lastname: 'Voldemort', email: 'hewhomust@notbenamed.com', phone: '495) 918-2532', linkedin: 'www.linkedin/dementira',avatar:'admin3.png'}
]

const addAll = async () => {
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
addAll()