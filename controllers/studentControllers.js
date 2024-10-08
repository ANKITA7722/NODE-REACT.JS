// import StuModel from "../models/studentModels.js";

// class StuController {
//     static studentInfo = async (req, res) => {
//         res.send("this is student information");
//     }
//     static studentDisplay = async (req, res) => {
//         res.send("this is student display data");
//     }
//     static studentInsert = async (req, res) => {
//         const { rollno, name, city, fees } = req.body;
//         const data = await StuModel.create({
//             rollno: rollno,
//             name: name,
//             city: city,
//             fees: fees
//         })
//         res.send(data);
//     }
//     static StudentDataDiplay = async (req, res) => {
//         const data = await StuModel.find();
//         res.send(data);
//     }
// }



// export default StuController;
