import specialtyService from "../services/specialtyService";

let createNewSpecialty = async (req, res) => {
    try {
        let infor = await specialtyService.createNewSpecialty(req.body);
        return res.status(200).json(infor);
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: "Error from server..."
        })
    }
}

let getAllSpecialty = async (req, res) => {
    try {
        let specialty = await specialtyService.getAllSpecialtyService();
        return res.status(200).json(specialty);
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: "Error from server..."
        })
    }
}

let getDetailSpecialtyById=async(req,res)=>{
    try {
        let specialty = await specialtyService.getDetailSpecialtyById(req.query.id,req.query.location);
        return res.status(200).json(specialty);
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: "Error from server..."
        })
    }
}

module.exports = {
    createNewSpecialty: createNewSpecialty,
    getAllSpecialty: getAllSpecialty,
    getDetailSpecialtyById:getDetailSpecialtyById,
}