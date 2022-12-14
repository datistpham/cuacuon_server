import { dbconnection } from "../database/init.js"    
// import cua from "../schema/cuacuon.js"

export const product_list= (req, res)=> {
    if(req.query.category=== "cua-thep-luxury") {
        dbconnection.collection("cua_luxury")
        .find({})
        .toArray((err, docs)=> {
            if(err) return console.log(err)
            return res.status(200).json(docs)
        })
    }
    else if(req.query.category=== "cua-thep-van-go") {
        dbconnection.collection("cua")
        .find({})
        .toArray((err, docs)=> {
            if(err) return console.log(err)
            return res.status(200).json(docs)
        })
    }
    else if(req.query.category=== "phu-kien-cua") {
        dbconnection.collection("phukien")
        .find({})
        .toArray((err, docs)=> {
            if(err) return console.log(err)
            return res.status(200).json(docs)
        })
    }
    else {
        return res.json([])
    }
}