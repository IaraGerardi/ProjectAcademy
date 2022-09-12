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
    "name": "Rubia",
    "lastname": "Bravington",
    "email": "rbravington0@cdbaby.com",
    "phone": "6487728549",
    "photoProfile": "default.png",
    "dni": 39780850,
    "age": "1998-01-15",
    "school": "Eastlawn",
    "address": "0 Hollow Ridge Center",
    "orientadoreId": 3
  }, {
    "name": "Thebault",
    "lastname": "Daughtery",
    "email": "tdaughtery1@bloglines.com",
    "phone": "3922698657",
    "photoProfile": "default.png",
    "dni": 35914905,
    "age": "1997-03-05",
    "school": "Bartillon",
    "address": "3 New Castle Avenue",
    "orientadoreId": 8
  }, {
    "name": "Reuven",
    "lastname": "Braisted",
    "email": "rbraisted2@furl.net",
    "phone": "6332352485",
    "photoProfile": "default.png",
    "dni": 28843708,
    "age": "1986-09-24",
    "school": "Oriole",
    "address": "882 Bonner Alley",
    "orientadoreId": 4
  }, {
    "name": "Rayshell",
    "lastname": "Baff",
    "email": "rbaff3@mapquest.com",
    "phone": "8717251294",
    "photoProfile": "default.png",
    "dni": 26876088,
    "age": "1991-05-15",
    "school": "Sachs",
    "address": "999 Buena Vista Street",
    "orientadoreId": 5
  }, {
    "name": "Brendis",
    "lastname": "Knighton",
    "email": "bknighton4@fastcompany.com",
    "phone": "7189381254",
    "photoProfile": "default.png",
    "dni": 30566799,
    "age": "1997-10-24",
    "school": "Northwestern",
    "address": "3409 Towne Junction",
    "orientadoreId": 8
  }, {
    "name": "Roberto",
    "lastname": "Elgar",
    "email": "relgar5@home.pl",
    "phone": "2762523622",
    "photoProfile": "default.png",
    "dni": 29836156,
    "age": "1986-02-16",
    "school": "Texas",
    "address": "99 Oxford Court",
    "orientadoreId": 1
  }, {
    "name": "Christi",
    "lastname": "Napier",
    "email": "cnapier6@networkadvertising.org",
    "phone": "3378445344",
    "photoProfile": "default.png",
    "dni": 39856232,
    "age": "2000-07-06",
    "school": "Michigan",
    "address": "9 Di Loreto Junction",
    "orientadoreId": 5
  }, {
    "name": "Binky",
    "lastname": "Hutsby",
    "email": "bhutsby7@washingtonpost.com",
    "phone": "4899136404",
    "photoProfile": "default.png",
    "dni": 37304342,
    "age": "1980-06-27",
    "school": "Drewry",
    "address": "21 Mayer Terrace",
    "orientadoreId": 3
  }, {
    "name": "Shayne",
    "lastname": "Matieu",
    "email": "smatieu8@illinois.edu",
    "phone": "8755239983",
    "photoProfile": "default.png",
    "dni": 46226397,
    "age": "2000-06-01",
    "school": "Dawn",
    "address": "01 Dwight Hill",
    "orientadoreId": 5
  }, {
    "name": "Fairlie",
    "lastname": "Lanigan",
    "email": "flanigan9@printfriendly.com",
    "phone": "1592801909",
    "photoProfile": "default.png",
    "dni": 20784337,
    "age": "1978-06-19",
    "school": "Oxford",
    "address": "5 Meadow Valley Place",
    "orientadoreId": 6
  }, {
    "name": "Winston",
    "lastname": "Rubie",
    "email": "wrubiea@i2i.jp",
    "phone": "7717400489",
    "photoProfile": "default.png",
    "dni": 23154679,
    "age": "1996-08-21",
    "school": "Hudson",
    "address": "38238 Esker Street",
    "orientadoreId": 8
  }, {
    "name": "Marijn",
    "lastname": "Zuppa",
    "email": "mzuppab@illinois.edu",
    "phone": "4789184295",
    "photoProfile": "default.png",
    "dni": 33312405,
    "age": "1984-04-12",
    "school": "Dovetail",
    "address": "86 Darwin Circle",
    "orientadoreId": 7
  }, {
    "name": "Marve",
    "lastname": "Blindt",
    "email": "mblindtc@hexun.com",
    "phone": "4067638427",
    "photoProfile": "default.png",
    "dni": 46143097,
    "age": "1975-12-29",
    "school": "Fallview",
    "address": "5 Montana Terrace",
    "orientadoreId": 1
  }, {
    "name": "Virge",
    "lastname": "Hamerton",
    "email": "vhamertond@aol.com",
    "phone": "7497982031",
    "photoProfile": "default.png",
    "dni": 44371739,
    "age": "1990-01-15",
    "school": "Melvin",
    "address": "7 Westport Way",
    "orientadoreId": 5
  }, {
    "name": "Eryn",
    "lastname": "Stave",
    "email": "estavee@1688.com",
    "phone": "4069612771",
    "photoProfile": "default.png",
    "dni": 37524793,
    "age": "1981-07-31",
    "school": "Northwestern",
    "address": "35801 Evergreen Drive",
    "orientadoreId": 4
  }, {
    "name": "Lezlie",
    "lastname": "Beseke",
    "email": "lbesekef@about.me",
    "phone": "8403256015",
    "photoProfile": "default.png",
    "dni": 41470994,
    "age": "1975-09-15",
    "school": "Ohio",
    "address": "35 Macpherson Lane",
    "orientadoreId": 5
  }, {
    "name": "Dasi",
    "lastname": "Carriage",
    "email": "dcarriageg@miitbeian.gov.cn",
    "phone": "2103636184",
    "photoProfile": "default.png",
    "dni": 48457374,
    "age": "1989-08-26",
    "school": "Bay",
    "address": "3 Buell Park",
    "orientadoreId": 4
  }, {
    "name": "Emilie",
    "lastname": "Waterhowse",
    "email": "ewaterhowseh@nba.com",
    "phone": "3018104282",
    "photoProfile": "default.png",
    "dni": 30059179,
    "age": "1976-02-09",
    "school": "Kings",
    "address": "35082 Moland Way",
    "orientadoreId": null
  }, {
    "name": "Kristen",
    "lastname": "Wagen",
    "email": "kwageni@about.com",
    "phone": "3947664193",
    "photoProfile": "default.png",
    "dni": 44412342,
    "age": "1990-05-12",
    "school": "Melby",
    "address": "08 Onsgard Park",
    "orientadoreId": null
  }, {
    "name": "Cornall",
    "lastname": "Spurrior",
    "email": "cspurriorj@discovery.com",
    "phone": "4333280560",
    "photoProfile": "default.png",
    "dni": 25965699,
    "age": "1990-04-30",
    "school": "Superior",
    "address": "849 Gina Trail",
    "orientadoreId": null
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