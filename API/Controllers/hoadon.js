import HD from '../Models/HoaDon.js';
import HDCT from '../Models/HoaDonDetails.js';
import User from '../Models/User.js';
import Room from '../Models/Room.js';

//Create
export const createHD = async (req, res, next) => {
  const newHD = new HD(req.body);
  try {
    const savedHD = new HD({
      RoomId: req.body.RoomId,
      Price: req.body.Price,
      IdDetails: req.body.IdDetails,
      Status: req.body.Status
    });
    await newHD.save();
    res.status(200).json(savedHD);
  } catch (err) {
    next(err);
  }
};

//Create HDCT
export const createHDCT = async (req, res, next) => {
  const userId = await User.findOne({ id: req.body.id });
  const roomId = await Room.findOne({ id: req.body.id });
  const hdId = req.params.hdId;
  const newHDCT = new HDCT(req.body);
  try {
    const savedHDCT = new HDCT({
      CMND: req.body.CMND,
      UserId: userId,
      MSSV: req.body.MSSV,
      St: req.body.St,
      RoomId: roomId,
      DateIn: req.body.DateIn,
      DateOut: req.body.DateOut
    });
    await newHDCT.save();
    try {
      await HD.findByIdAndUpdate(hdId, {
        $push: { IdDetails: savedHDCT._id }
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedHDCT);
  } catch (err) {
    next(err);
  }
  // const newHDCT = new HDCT(req.body)
  // try {
  //     const savedHDCT = await newHDCT.save()
  //     res.status(200).json(savedHDCT)
  // } catch (err) {
  //     next(err)
  // }
};

//Update
export const updateHD = async (req, res, next) => {
  try {
    const updatedHD = await HD.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.status(200).json(updatedHD);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateHDCT = async (req, res, next) => {
  try {
    const updatedHDCT = await HDCT.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.status(200).json(updatedHDCT);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Get
export const getHDCT = async (req, res, next) => {
  try {
    const hdct = await HDCT.find(req.params.CMND);
    res.status(200).json(hdct);
  } catch (error) {
    res.status(500).json(error);
  }
};
//Getall
export const getallHD = async (req, res, next) => {
  try {
    const hd = await HD.find();
    res.status(200).json(hd);
  } catch (err) {
    next(err);
  }
};

//GetHDCCT từ HD
export const gethoadon = async (req, res, next) => {
  try {
    const hoadon = await HD.findById(req.params.id);
    const list = await Promise.all(
      hoadon.IdDetails.map((hoadondetails) => {
        return HDCT.findById(hoadondetails);
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
