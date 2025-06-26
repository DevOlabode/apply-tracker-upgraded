const port = process.env.PORT || 3000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const path = require('path');
const ejsMate = require('ejs-mate');


const Application = require('./models/apply');
const ExpressError = require('./utils/expressError');   
const catchAsync = require('./utils/catchAsync');
const applySchema = require('./joiSchema');

mongoose.connect('mongodb://127.0.0.1:27017/application')
    .then(() => {
        console.log("Mongo Connection Open")   
    }).catch((err) => {
        console.log("Error", err)
    });

app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended : true}));
app.engine('ejs', ejsMate);

const validateApplication  = (req, res, next)=>{
    const { error } = applySchema.validate(req.body);
    if(error){
        const message = error.details.map(el => el.message).join(',');
        throw new ExpressError(message, 400)
    }else{
        next();
    }
}


const status = ['applied', 'rejected', 'interviewing', 'offer', 'hired']

app.get('/', (req, res)=>{
    res.render('applyTracker/home')
})

app.get('/application', catchAsync(async (req, res)=>{
    const applications = await Application.find({});
    res.render('applyTracker/index', { applications });
}));


app.put('/application/:id', validateApplication, catchAsync(async (req, res)=>{
    const { id } = req.params;
    const toDB = await Application.findByIdAndUpdate(id, req.body, { runValidators: true, new : true });
    res.redirect(`/application/${toDB._id}`)
}));

app.get('/application/new', (req, res)=>{
    res.render('applyTracker/new', { status });
});

app.post('/application', validateApplication , catchAsync(async(req, res)=>{
    const madeApplication = req.body;
    const toDB = new Application(madeApplication);
    await toDB.save();
    res.redirect(`/application/${toDB._id}`)
}));

app.get('/application/:id',catchAsync(async (req, res)=>{
    const { id } = req.params;
    const findApplication =await Application.findById(id);
    if(!findApplication){
        throw new ExpressError('Application Not Found', 404)
    };

    res.render('applyTracker/details', { findApplication });
}));

app.get('/application/:id/edit',catchAsync(async (req, res)=>{
    const { id } = req.params;
    const application = await Application.findById(id);
    res.render('applyTracker/edit', { application, status });
}));

app.delete('/application/:id', catchAsync(async (req ,res)=>{
    const { id } = req.params;
    const deletedApplication =await Application.findByIdAndDelete(id);
    res.redirect('/application');
}));

app.all(/(.*)/, (req, res, next) => {
    next(new ExpressError('Page not found', 404))
});


app.use((err, req, res, next)=>{
    const {statusCode = 500} = err;
    if(!err.message){
        err.message = 'Something Went Wrong!'
    }
    res.status(statusCode).render('applyTracker/error', {err})
});

app.listen(port, ()=>{
    console.log('APP IS LISTENING ON PORT ${port}')
});
