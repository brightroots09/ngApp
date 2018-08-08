var express = require("express");
var router = express.Router();
var videoModel = require("../models/videoplayer")

router.get("/", function(req, res, callback){
    res.json("Works")
})

router.get("/videos", function(req, res, callback){
    videoModel
        .find({})
        .exec(function(error, result){
            if(error) console.error("error retrieving videos==>",error)
            else{
                res.json(result)
            }
        })
})

router.get("/video/:id", function(req, res, callback){
    videoModel
        .findById(req.params.id)
        .exec(function(error, result){
            if(error) console.error("error retrieving single video==>",error)
            else{
                res.json(result)
            }
        })
})

router.post("/video", function(req, res, callback){
    var video = new videoModel()
    
    video.title = req.body.title;
    video.url = req.body.url;
    video.description = req.body.description;

    video.save(function(error, result){
        if(error) console.error(error)
        else{
            res.json(result)
        }
    })

})


router.put("/video/:id", function(req, res, callback){
    videoModel
        .findByIdAndUpdate(req.params.id, {$set: {title: req.body.title, url: req.body.url, description: req.body.description}}, {new: true})
        .exec(function(error, result){
            if(error) console.error(error)
            else{
                res.json(result)
            }
        })
})

router.delete("/video/:id", function(req, res, callback){
    videoModel
        .findByIdAndRemove(req.params.id)
        .exec(function(error, result){
            if(error) console.error(error)
            else{
                res.json(result)
            }
        })
})

module.exports = router;