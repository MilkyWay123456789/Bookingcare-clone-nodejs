import db from '../models/index';

let getTopDoctorHome=(limitInput)=>{
    return new Promise(async(resolve,reject)=>{
        try{
            let users=await db.User.findAll({
                limit:limitInput,
                where:{rodeId:'R2'},
                order:[['createdAt','DESC']],
                attributes:{
                    exclude:['password','image']
                },
                include:[
                    {models:db.Allcode,as:'positionData',attributes:['valueEn','valueVi']},
                    {models:db.Allcode,as:'genderData',attributes:['valueEn','valueVi']}
                ],
                raw:true,
                nest:true
            })

            resolve({
                errCode:0,
                data:users
            })
        }catch(e){
            reject(e)
        }
    })
}

module.exports={
    getTopDoctorHome:getTopDoctorHome
}