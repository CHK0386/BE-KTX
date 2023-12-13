import HD from "../Models/HoaDon.js";
import HDCT from "../Models/HoaDonDetails.js"



//Create HDCT
export const booking = async (req, res, next) => {
    const userData = await getUserDataFromReq(req);
    const {
        CMND,MSSV,St,Datein,DateOut,
      } = req.body;
      HDCT.create({
        CMND,MSSV,St,Datein,DateOut,
        UserId:userData.id,
      }).then((doc) => {
        res.json(doc);
      }).catch((err) => {
        throw err;
      });
}
