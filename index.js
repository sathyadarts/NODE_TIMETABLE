var express=require('express')
var ejs =require('ejs')
var mysql=require('mysql')
var app=express();
var bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());


app.use(express.static('public'));
app.set('view engine','ejs');

app.listen(8080);
app.get('/',function(req,res){
    res.render('pages/index');
    });
    var con=mysql.createConnection({
      host:"localhost",
      user:"root",
      password:"",
      database:"timetable"
       });
      con.connect(function(err){
      if(err){
       throw err;
       }
       });
       app.post('/staffsave',function(req,res,next){
        var staffid=req.body.staffid;
        var staffname=req.body.staffname;
        var department=req.body.department;
        var emailid=req.body.emailid;
        var phnno=req.body.phnno;
        var password=req.body.password;
        var cpassword=req.body.cpassword;
        var position=req.body.position;
        var subject=req.body.subject;
        var yrofjoin=req.body.yrofjoin;
          var query="insert into fet1 values('"+req.body.staffid+"','"+req.body.staffname+"','"+req.body.department+"','"+req.body.emailid+"','"+req.body.phnno+"','"+req.body.password+"','"+req.body.cpassword+"','"+req.body.position+"','"+req.body.subject+"','"+req.body.yrofjoin+"')";
          con.query(query,function(err,result){
          if(err)
          {
          throw err;
          }
          else
          {
           console.log("Inserted Successfully");
          }
          });
          });
          var con=mysql.createConnection({
            host:"localhost",
            user:"root",
            password:"",
            database:"timetable"
             });
            con.connect(function(err){
            if(err){
             throw err;
             }
             });

          app.post('/studsave',function(req,res,next){
            var studentid=req.body.studentid;
            var studentname=req.body.studentname;
            var course=req.body.course;
            var department=req.body.department;
            var emailid=req.body.emailid;
            var phnno =req.body.phnno;
            var password =req.body.password;
            var cpassword =req.body.cpassword;
            var semester=req.body.semester;
            var academicyear=req.body.academicyear;
            var query="insert into fet2(studentid,studentname,course,department,emailid,phnno,password,cpassword,semester,academicyear) values('"+req.body.studentid+"','"+req.body.studentname+"','"+req.body.course+"','"+req.body.department+"','"+req.body.emailid+"','"+req.body.phnno+"','"+req.body.password+"','"+req.body.cpassword+"','"+req.body.semester+"','"+req.body.academicyear+"')";
            con.query(query,function(err,result){
            if(err)
            {
            throw err;
            }
            else
            {
             console.log("Inserted Successfully");
            }
            });
            });
            var con=mysql.createConnection({
               host:"localhost",
               user:"root",
               password:"",
               database:"timetable"
                });
               con.connect(function(err){
               if(err){
                throw err;
                }
                });
            app.post('/addclass',function(req,res,next){
               var sno=req.body.sno;
               var classname=req.body.classname;
               var staffname=req.body.staffname;
               var periodtime=req.body.periodtime;
               var department =req.body.department;
               var semester=req.body.semester;
               var year=req.body.year;
               var section=req.body.section;
               var query="insert into fet4(sno,classname,staffname,periodtime,department,semester,year,section) values('"+req.body.sno+"','"+req.body.classname+"','"+req.body.staffname+"','"+req.body.periodtime+"','"+req.body.department+"','"+req.body.semester+"','"+req.body.year+"','"+req.body.section+"')";
               con.query(query,function(err,result){
               if(err)
               {
               throw err;
               }
               else
               {
                console.log("Inserted Successfully");
               }
               });
               });
               var con=mysql.createConnection({
                  host:"localhost",
                  user:"root",
                  password:"",
                  database:"timetable"
                   });
                  con.connect(function(err){
                  if(err){
                   throw err;
                   }
                   });
               app.post('/addsub',function(req,res,next){
                  var subcode=req.body.subcode;
                  var subname =req.body.subname;
                  var credithour=req.body.credithour;
                  var semester=req.body.semester;
                  var year=req.body.year;
                  var query="insert into fet3(subcode,subname,credithour,semester,year) values('"+req.body.subcode+"','"+req.body.subname+"','"+req.body.credithour+"','"+req.body.semester+"','"+req.body.year+"')";
                  con.query(query,function(err,result){
                  if(err)
                  {
                  throw err;
                  }
                  else
                  {
                   console.log("Inserted Successfully");
                  }
                  });
                  });
                

    app.get('/home',function(req,res){
      res.render('pages/home');
    });

    app.get('/home1',function(req,res){
      res.render('pages/home1');
    });

    app.get('/staffregistration',function(req,res){
      res.render('pages/staffregistration');
    });

    app.get('/studregistration',function(req,res){
      res.render('pages/studregistration');
    });

app.get('/login',function(req,res){
 res.render('pages/login');
 });

 app.get('/stud',function(req,res){
 res.render('pages/stud');
 });

 app.get('/addclass',function(req,res){
   res.render('pages/addclass');
   });
   app.get('/addsubject',function(req,res){
      res.render('pages/addsubject');
      });
 app.get('/staff',function(req,res){
    res.render('pages/staff');
    });
    app.get('/update1',function(req,res){
      res.render('pages/update1');
      });
      app.get('/update2',function(req,res){
        res.render('pages/update2');
        });
        app.get('/update3',function(req,res){
          res.render('pages/update3');
          });
          app.get('/update4',function(req,res){
            res.render('pages/update4');
            });
            app.get('/delete1',function(req,res){
              res.render('pages/delete1');
              });
              app.get('/delete2',function(req,res){
                res.render('pages/delete2');
                });
                app.get('/delete3',function(req,res){
                  res.render('pages/delete3');
                  });
                  app.get('/delete4',function(req,res){
                    res.render('pages/delete4');
                    });


app.post('/vlogin',function(req,res,next){

 var uname=req.body.uname;
 var pwd=req.body.pwd;

 if(uname =="sathya")
 {
 if(pwd =="12345")
 {
    console.log("login success");
    res.redirect ('/home');
 }
 else
 {
    console.log("invalid password");
    res.redirect('/errorpage');
 }
}
else
{
    console.log("invalid username");
    res.redirect('/errorpage');
}
});

app.post('/slogin',function(req,res,next){

    var uname=req.body.uname;
    var pwd=req.body.pwd;
   
    if(uname =="student")
    {
    if(pwd =="12345")
    {
       console.log("login success");
       res.redirect ('/home1');
    }
    else
    {
       console.log("invalid password");
       res.redirect('/errorpage');
    }
   }
   else
   {
       console.log("invalid username");
       res.redirect('/errorpage');
   }
   });

   app.post('/stafflogin',function(req,res,next){

    var uname=req.body.uname;
    var pwd=req.body.pwd;
   
    if(uname =="staff")
    {
    if(pwd =="12345")
    {
       console.log("login success");
       res.redirect ('/home');
    }
    else
    {
       console.log("invalid password");
       res.redirect('/errorpage');
    }
   }
   else
   {
       console.log("invalid username");
       res.redirect('/errorpage');
   }
   });

   app.post('/save',function(req,res,next){
    var staffid=req.body.staffid;
    var staffname=req.body.staffname;
    var department=req.body.department;
    var emailid=req.body.emailid;
    var phnno=req.body.phnno;
    var password=req.body.password;
    var cpassword=req.body.cpassword;
    var position=req.body.position;
    var subject=req.body.subject;
    var yrofjoin=req.body.yrofjoin;
    
    
    var query="insert into fet1 values('"+req.body.staffid+"','"+req.body.staffname+"','"+req.body.department+"','"+req.body.emailid+"','"+req.body.phnno+"','"+req.body.password+"','"+req.body.cpassword+"','"+req.body.position+"','"+req.body.subject+"','"+req.body.yrofjoin+"')";
    con.query(query,function(err,result){
    if(err)
    {
        throw err;
    }
    else
    {
        console.log("Inserted Successfully");
    }
    
    res.redirect('/');
    });
    });
    
    
    app.get('/stfview', function (req, res, next) {
      con.query("select * from fet1", function (err,rows) {
        if(err) 
        {
          res.render('/', { data: '' });
        } else 
        {
          res.render('pages/stfview',{ data:rows});
        }
      });
    });
    
    
      app.get('/stuview', function (req, res, next) {
        con.query("select * from fet2", function (err,rows) {
          if(err) 
          {
            res.render('/', { data: '' });
          } else 
          {
            res.render('pages/stuview',{ data:rows});
          }
        });
      });
    
    
    
    
      app.get('/clsview', function (req, res, next) {
        con.query("select * from fet4", function (err,rows) {
          if(err) 
          {
            res.render('/', { data: '' });
          } else 
          {
            res.render('pages/clsview',{ data:rows});
          }
        });
      });
    
    
      app.get('/subview', function (req, res, next) {
        con.query("select * from fet3", function (err,rows) {
          if(err) 
          {
            res.render('/', { data: '' });
          } else 
          {
            res.render('pages/subview',{ data:rows});
          }
        });
      });
    
    
      app.post('/delete1',function(req,res,next){
        var id=req.body.staffid;
        var query="delete from fet1 where staffid='"+req.body.staffid+"'";
        con.query(query,function(err,result){
          if(err)
          {
            throw err;
          }
          else
          {
            console.log("delete successfully");
          }
          res.redirect('/stfview');
        })
      })
        app.get('/delete1',function(req,res){
        res.render('pages/delete1')
      })
    
    
    
      app.post('/delete2',function(req,res,next){
        var id=req.body.studentid;
        var query="delete from fet2 where studentid='"+req.body.studentid+"'";
        con.query(query,function(err,result){
          if(err)
          {
            throw err;
          }
          else
          {
            console.log("delete successfully");
          }
          res.redirect('/stuview');
        })
      })
        app.get('/delete2',function(req,res){
        res.render('pages/delete2')
      })
    
    
      app.post('/delete3',function(req,res,next){
        var id=req.body.subcode;
        var query="delete from fet3 where subcode='"+req.body.subcode+"'";
        con.query(query,function(err,result){
          if(err)
          {
            throw err;
          }
          else
          {
            console.log("delete successfully");
          }
          res.redirect('/subview');
        })
      })
        app.get('/delete3',function(req,res){
        res.render('pages/delete3')
      })
    
    
      app.post('/delete4',function(req,res,next){
        var id=req.body.sno;
        var query="delete from fet4 where sno='"+req.body.sno+"'";
        con.query(query,function(err,result){
          if(err)
          {
            throw err;
          }
          else
          {
            console.log("delete successfully");
          }
          res.redirect('/clsview');
        })
      })
        app.get('/delete4',function(req,res){
        res.render('pages/delete4')
      })
    
      
      app.post('/update1',function(req,res,next){
        var staffid=req.body.staffid;
        var staffname=req.body.staffname;
        var department=req.body.department;
        var emailid=req.body.emailid;
        var phnno=req.body.phnno;
        var password=req.body.password;
        var cpassword=req.body.cpassword;
        var position=req.body.position;
        var subject=req.body.subject;
        var yrofjoin=req.body.yrofjoin;
        
        
        var query="update fet1 set staffname='"+req.body.staffname+"',department='"+req.body.department+"',emailid='"+req.body.emailid+"',phnno='"+req.body.phnno+"',password='"+req.body.password+"',cpassword='"+req.body.cpassword+"',position='"+req.body.position+"',subject='"+req.body.subject+"',yrofjoin='"+req.body.yrofjoin+"' where staffid='"+req.body.staffid+"'";
        con.query(query,function(err,result){
        if(err)
        {
            throw err;
        }
        else
        {
            console.log("updated Successfully");
        }
        
        res.redirect('/stfview');
        })
        })
        app.get('/update1',function(req,res){
          res.render('pages/update1')
        })
    
    
    
    
        app.post('/update2',function(req,res,next){
          var studentid=req.body.studentid;
          var studentname=req.body.studentname;
          var course=req.body.course;
          var department=req.body.department;
          var emailid=req.body.emailid;
          var phnno=req.body.phnno;
          var password=req.body.password;
          var cpassword=req.body.cpassword;
          var semester=req.body.semester;
          var academicyear=req.body.academicyear;
          
          
          var query="update fet2 set studentname='"+req.body.studentname+"',course='"+req.body.course+"',department='"+req.body.department+"',emailid='"+req.body.emailid+"',phnno='"+req.body.phnno+"',password='"+req.body.password+"',cpassword='"+req.body.cpassword+"',semester='"+req.body.semester+"',academicyear='"+req.body.academicyear+"' where studentid='"+req.body.studentid+"'";
          con.query(query,function(err,result){
          if(err)
          {
              throw err;
          }
          else
          {
              console.log("updated Successfully");
          }
          
          res.redirect('/stuview');
          })
          })
          app.get('/update2',function(req,res){
            res.render('pages/update2')
          })
    
    
          app.post('/update3',function(req,res,next){
            var subcode=req.body.subcode;
            var subname=req.body.subname;
            var credithour=req.body.credithour;
            var semester=req.body.semester;
            var year=req.body.year;
            
            var query="update fet3 set subname='"+req.body.subname+"',credithour='"+req.body.credithour+"',semester='"+req.body.semester+"',year='"+req.body.year+"' where subcode='"+req.body.subcode+"'";
            con.query(query,function(err,result){
            if(err)
            {
                throw err;
            }
            else
            {
                console.log("updated Successfully");
            }
            
            res.redirect('/subview');
            })
            })
            app.get('/update3',function(req,res){
              res.render('pages/update3')
            })
    
    
          app.post('/update4',function(req,res,next){
            var sno=req.body.sno;
            var classname=req.body.classname;
            var staffname=req.body.staffname;
            var periodtime=req.body.periodtime;
            var department=req.body.department;
            var semester=req.body.semester;
            var year=req.body.year;
            var section=req.body.section;
            
            var query="update fet4 set classname='"+req.body.classname+"',staffname='"+req.body.staffname+"',periodtime='"+req.body.periodtime+"',department='"+req.body.department+"',semester='"+req.body.semester+"',year='"+req.body.year+"',section='"+req.body.section+"' where sno='"+req.body.sno+"'";
            con.query(query,function(err,result){
            if(err)
            {
                throw err;
            }
            else
            {
                console.log("updated Successfully");
            }
            
            res.redirect('/clsview');
            })
            })
            app.get('/update4',function(req,res){
              res.render('pages/update4')
            })
    
            app.get('/index',function(req,res){
              res.render('pages/index')
            })