
const express=require("express");
const multer = require("multer");
const mogoose =require("mongoose");
const { default: mongoose } = require("mongoose");
const Course=require('./modile/course');
const Expe= require('./modile/expertise');
const Soical= require('./modile/soical');
const Personl= require('./modile/personl');
const Qualt= require('./modile/qualifie');
const Skills= require('./modile/skill');
const course = require("./modile/course");
const skill = require("./modile/skill");
const soical = require("./modile/soical");


const app=express();
app.use(express.urlencoded());

app.set('view engine','ejs');
app.set('views','applic');

app.use(express.static("/public/"))
app.use(express.static('/applic/css'));
app.use(express.static('/applic/js'));
app.use(express.static('/applic/img'));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      if (file.mimetype == "image/png" || file.mimetype == "image/jpg")
        cb(null, "public/image/");
      else if (file.mimetype == "application/pdf") cb(null, "public/pdf/");
     
    },
    filename: (req, file, cb) => {
      var extension = file.originalname.split(".");
      var ext = extension[extension.length - 1];
  
      var uploaded_file_name =
        file.fieldname +
        "-" +
        Date.now() +
        "-" +
        Math.round(Math.random() * 1e9) +
        "." +
        ext;
  
      cb(null, uploaded_file_name);
    },
  });


  const upload = multer({
    storage: storage,
  
    fileFilter: (req, file, callback) => {
      if (
        file.mimetype == "image/png" ||
        file.mimetype == "image/jpg" ||
        file.mimetype == "application/pdf"
      ) {
        callback(null, true);
      } else callback(null, false);
    },
    limits: 1024 * 1024 * 5,
  });


mogoose.connect("mongodb://localhost:27017/proto")
.then((result)=>{
    

})
.catch((error)=>{

})


app.get("/",(req,res)=>{
    
    res.render("start",{title:'potofilo'});
    
});

app.put('/edit_persol',upload.fields([{name:'imge'},{name:'cv'},{name:'cardimg'}]),(req,res)=>{
  const edper = new Personl
});
//Start
app.post('/add_persol',auth,(req,res)=>{
  res.render("add_personl");
});

//Information personal page

app.get("/add_persol", auth, (req, res) => {
  res.render("add_personl");
});
app.post('/add_qulet',upload.fields([{name:'imge'},{name:'cv'},{name:'cardimg'}]),(req,res)=>{
  const pers = new Personl({
    id_p: mongoose.Types.ObjectId,
    name: req.body.name,
    E_mail: req.body.email,
    birthday: req.body.date,
    gender: req.body.gen,
    id_cardnum: req.body.id_cardnum,
    id_cardimg: req.files['cardimg'][0].filename,
    image: req.files['imge'][0].filename,
    cv: req.files['cv'][0].filename,
    address: req.body.addr,
    phone: req.body.phon,
  });
  pers.save();
  console.log("data inserted successful");
  res.render("add_qualt");
  res.end();
  
});

// Qualifie page
app.get("/add_qulet", auth, (req, res) => {
  res.render("add_qualt",);
});
app.post('/add_corus',upload.single('qimge'),(req,res)=>{
  const qualt= new Qualt ({
    id_quality:mongoose.Types.ObjectId,
    name:req.body.qname,
    date:req.body.qdate,
    place:req.body.qplace,
    department:req.body.qdep,
    avreg:req.body.qavg,
    appreciaion:req.body.qapp,
    image: req.file.filename,
  });
  qualt.save((error,result)=>{
    if(error){
      console.log(error.message);
    }
    else
    console.log(result);
  });
  res.render("add_cours");
  res.end();
  
});

//Courses page
app.get("/add_corus", auth, (req, res) => {
    res.render("add_cours");
  });
app.post('/add_exper',upload.single('cimge'),(req,res)=>{
  const cours= new Course({
    id_course:mongoose.Types.ObjectId,
    name:req.body.cname,
    date:req.body.cdate,
    place:req.body.cplace,
    image: req.file.filename
  });
  cours.save((error,result)=>{
    if(error){
      console.log(error.message);
    }
    else
    console.log(result);
  });
  res.render("add_exper");
  res.end();
  
});

// Expertise page
app.get("/add_exper", auth, (req, res) => {
  res.render("add_exper");
});
app.post('/add_skill',upload.single(),(req,res)=>{
  const exper= new Expe({
    id_expe:mongoose.Types.ObjectId,
    name:req.body.exname,
    num_year:req.body.exyear,
    place:req.body.explace,
  });
  exper.save((error,result)=>{
    if(error){
      console.log(error.message);
    }
    else
    console.log(result);
  });
  res.render("add_skill");
  res.end();
  
});

//Skills page
app.get("/show_skill", auth, (req, res) => {
  Skills.find().then((reslut)=>{
    res.render('show_skill',{ sk :reslut});
  });
});
app.get("/add_skill", auth, (req, res) => {
  Skills.find().then((reslut)=>{
    res.render('add_skill',{ sk :reslut});
  });
});
app.post('/add_soic',upload.single(),(req,res)=>{
  const skil= new Skills({     
    id_skill:mongoose.Types.ObjectId,
    name:req.body.kname,
  });
  skil.save((error,result)=>{
    if(error){
      console.log(error.message);
    }
    else
    console.log(result);
  });
  res.render("add_soical");
  res.end();
});
app.get("/add_new/skill" , (req,res)=> {
  Skills.find().then((reslut)=>{
    res.render('add_skill', { sk :reslut});
  });
});
app.post('/add_new/skill',upload.single(),(req,res)=>{
  const skil= new Skills({     
    id_skill:mongoose.Types.ObjectId,
    name:req.body.kname,
  });
  skil.save((error,result)=>{
    if(error){
      console.log(error.message);
    }
    else
    console.log(result);
  });
  res.render("add_skill" );
  res.end();
});


// Soical media page
app.get("/add_soic", auth, (req, res) => {
  res.render("add_soical");
});
app.post('/show_potofilo',upload.single(),(req,res)=>{
  const soil = new Soical({
    id_soical:mongoose.Types.ObjectId,
    name:req.body.soname,
    acount:req.body.acout,
  });
  soil.save((error,result)=>{
    if(error){
      console.log("soical");
      console.log(error.message);
    }
    else
    console.log(result);
  });
  res.render("add_soical");
  res.end();
}); 

app.get("/show_potofilo", async (req, res) => {
  //let person= await personl.find();
  //let qual= await qualifie.find();
  //let exp = await expertise.find();
  let cour = await course.find();
  let skl = await skill.find();
  let sol = await soical.find();

  res.render("potofilo",{/*per:person,qul:qual,ex:exp,*/co:cour,k:skl,so:sol})

});

/*app.get("/show_potofilo", auth, (req, res) => {
  Skills.find().then((reslut)=>{
    res.render('show_persol',{ sk :reslut});
  });
});
app.get('/show_potofilo',(req,res)=>{
  Qualt.find().then((result)=>{
    res.render('show_qualt',{qul:result});
  });
});
app.get('/show_potofilo',(req,res)=>{
  Qualt.find().then((result)=>{
    res.render('show_qualt',{qul:result});
  });
});*/

function auth(req, res, next) {
    next();
}

/*function add(x) {
  x++;
}*/

app.listen((3002),()=>{
    console.log("the esrver is Ok");
    
});