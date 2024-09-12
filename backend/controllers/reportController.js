const Report = require('../models/reportModel');

exports.createReport = async(req,res) =>{
    const {title,description,duration,location,image,template} = req.body;
    try{
        const report = new Report({
            user:req.user.id,
            title,description,duration,location,image,template,
        });
        await report.save();
        res.json({
            success:true
        })
    }
    catch(error){
        console.log(error);
        res.jscon({
            success:false,
            error:error
        })
    }
}

exports.getAllReport = async(req,res) =>{
    try{
        let report = await Report.find({user:req.user.id});
        res.json({
            success:true,
            data:report
        })
    }catch(error){
        res.json({
            success:false,
            error:error
        })
    }
}

exports.getReportById = async(req,res) =>{
    try{
        let report = await Report.findById(req.params.id);
        res.json({
            success:true,
            data:report
        })
    }catch(error){
        res.json({
            success:false,
            error:error
        })
    }
}

exports.deleteReport = async(req,res) =>{
    try{
        let report = await Report.findByIdAndDelete(req.params.id) ;
        res.json({
            success:true,
            data:report
        })
    }catch(error){
        res.json({
            success:false,
            error:error
        })
    }
}

exports.updateReport = async(req,res) =>{
    try{
        let report = await Report.findByIdAndUpdate(req.params.id,req.body,{new:true,});
        res.json({
            success:true,
            data:report
        })
    }catch(error){
        res.json({
            success:false,
            error:error
        })
    }
}

