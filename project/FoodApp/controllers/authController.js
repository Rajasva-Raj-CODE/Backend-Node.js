const userModel = require("../models/userModel");

//! REGISTER
const registerController = async (req, res) => {
  try {
    const { userName, email, password, phone, address } = req.body;

    //! validation

    if (!userName || !email || !password || !phone || !address) {
      return res.status(500).send({
        success: false,
        message: "please provide all fields",
      });
    }

    //! check user
    const existing = await userModel.findOne({ email });
    if (existing) {
      return res.status(500).send({
        success: false,
        message: "Email Already Registered please Login",
      });
    }

    //! Create new User
    const user = await userModel.create({
      userName,
      email,
      password,
      phone,
      address,
    });
    res.status(201).send({
      success: true,
      message: "Successfully Registered",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Register API",
      error,
    });
  }
};

//! Login
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    //! validation
    if (!email || !password) {
      return res.status(500).send({
        success: false,
        message: "please provide Email or Password",
      });
    }
    //! check user
    const user = await userModel.findOne({ email:email , password:password});
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "user not found ",
      });
    }
    res.status(200).send({
      success: true,
      message: "Login Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in LOGIN API",
      error,
    });
  }
};
module.exports = { registerController, loginController };
