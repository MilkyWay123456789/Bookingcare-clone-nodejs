import doctorService from "../services/doctorService";

let getTopDoctorHome = async (req, res) => {
    let limit = req.query.limit;
    if (!limit) limit = 10;
    try {
        let response = await doctorService.getTopDoctorHome(+limit);
        return res.status(200).json(response);
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: "Error from server..."
        })
    }
}

let getAllDoctors = async (req, res) => {
    try {
        let doctors = await doctorService.getAllDoctorsService('All');
        return res.status(200).json(doctors);
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: "Error from server..."
        })
    }
}

let postInforDoctor = async (req, res) => {
    try {
        let response = await doctorService.saveDetailInforDoctor(req.body);
        return res.status(200).json(response);
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: "Error from server..."
        })
    }
}

let getDetailDoctorsById = async (req, res) => {
    try {
        let infor = await doctorService.getDetailDoctorsById(req.query.id);
        return res.status(200).json(infor);
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: "Error from server..."
        })
    }
}

let bulkCreateSchedule = async (req, res) => {
    try {
        let infor = await doctorService.bulkCreateSchedule(req.body);
        return res.status(200).json(infor);
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: "Error from server..."
        })
    }
}

let getScheduleDoctorsByDate = async (req, res) => {
    try {
        let infor = await doctorService.getScheduleDoctorsByDate(req.query.doctorId, req.query.date);
        return res.status(200).json(infor);
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: "Error from server..."
        })
    }
}

let getExtraInforDoctorsById=async(req,res)=>{
    try {
        let infor = await doctorService.getExtraInforDoctorsById(req.query.doctorId);
        return res.status(200).json(infor);
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: "Error from server..."
        })
    }
}

module.exports = {
    getTopDoctorHome: getTopDoctorHome,
    getAllDoctors: getAllDoctors,
    postInforDoctor: postInforDoctor,
    getDetailDoctorsById: getDetailDoctorsById,
    bulkCreateSchedule: bulkCreateSchedule,
    getScheduleDoctorsByDate: getScheduleDoctorsByDate,
    getExtraInforDoctorsById:getExtraInforDoctorsById
}