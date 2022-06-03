exports.createPollGetController =(req, res,next) => {
  res.render('create.ejs');
}

 exports.createPollPostController = (req, res,next) =>{
     console.log(req.body);
     
     res.render('create.ejs')
}


