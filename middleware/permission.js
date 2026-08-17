const adminPermission = (req,res,next)=>{
    if(req.role !== 'admin'){
        res.status(402).send('Permission Denide')  
        return      
    }
    next()
}

const managerPermisison = (req,res,next)=>{
    if(req.role !== 'manager'){
        res.status(402).send('Permision Denided')
        return
    }
    next()
}

module.exports = {adminPermission,managerPermisison}