import express from "express";
import "./db/config.js";
import User from "./db/User.js";
import Product from "./db/Product.js";
import cors from "cors";
import multer from "multer";
import * as dotenv from "dotenv";
dotenv.config();

import Jwt from "jsonwebtoken";
// import bodyParser from "body-parser";
import path from "path";
const port = process.env.BACKEND_PORT || 8000;
const jwtKey = process.env.jwtKey;

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("./public/images/upload"));
app.use('/noimage', express.static("./public/images/noimage"));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

// const upload = multer({ dest: './public/images/upload' });
const imageStorage = multer.diskStorage({
  // Destination to store image
  destination: "./public/images/upload",
  filename: (req, file, cb) => {
    // cb(null, file.fieldname + '_' + Date.now()
    cb(
      null,
      "profile_image" + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const imageUpload = multer({
  storage: imageStorage,
  limits: {
    fileSize: 1000000, // 1000000 Bytes = 1 MB
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
      return cb(new Error("Please upload a Image"));
    }
    cb(undefined, true);
  },
});

app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  // res.send(result);
  Jwt.sign({ result }, jwtKey, { expiresIn: "2h" }, (err, token) => {
    if (err) {
      res.send({ result: "Something went wrong please check once and try" });
    } else {
      res.send({ result, auth: token });
    }
  });
});

app.post("/login", async (req, res) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      Jwt.sign({ user }, jwtKey, { expiresIn: "2h" }, (err, token) => {
        if (err) {
          res.send({
            result: "Something went wrong please check once and try",
          });
        } else {
          res.send({ user, auth: token });
        }
      });
    } else {
      res.send({ result: "No user Found" });
    }
  } else {
    res.send({ result: "Please provide required details" });
  }
});

app.post("/add-product", verifyToken, async (req, res) => {
  // res.send(req.body);
  let product = new Product(req.body);
  let result = await product.save();
  // console.log(result);
  res.send(result);
});

app.get("/products", verifyToken, async (req, res) => {
  // let products = await Product.find({"userId": "63d182f1f4b0ababa3ca3183"});
  let products = await Product.find();
  if (products.length > 0) {
    res.send(products);
  } else {
    res.send({ result: "No Data Found" });
  }
});

app.delete("/product/:id", verifyToken, async (req, res) => {
  if (req.params.id != "") {
    const result = await Product.deleteOne({ _id: req.params.id });
    if (result.acknowledged) {
      res.send(result);
    }
  } else {
    res.send({ result: "Please provide valid product id" });
  }
});

app.get("/product/:id", verifyToken, async (req, res) => {
  let result = await Product.findOne({ _id: req.params.id });
  // console.log(result);
  if (result) {
    res.send(result);
  } else {
    res.send({ result: "No data found" });
  }
});

app.put("/product/:id", verifyToken, async (req, res) => {
  let result = await Product.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  );
  if (result) {
    res.send(result);
  } else {
    res.send({ result: "No data found" });
  }
});

app.get("/search/:key", verifyToken, async (req, res) => {
  // res.send(req.params.key)
  let result = await Product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { company: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
      { price: { $regex: req.params.key } },
    ],
  });
  if (result.length > 0) {
    res.send(result);
  } else {
    res.send({ result: "No data found" });
  }
});

app.get("/auth", verifyToken, (req, res) => {
  // console.log(req.headers.authorization);
  // res.send(req.headers.authorization);
  res.send({ result: "authenticated" });
});

app.get("/upload-profile/:id",[verifyToken], async (req, res) => {
  let result = await User.findOne({ _id: req.params.id }).select("-password");
  res.send(result);
});

app.put("/update-profile/:id", [verifyToken, imageUpload.single("file")], async (req, res) => {
  console.log(req.file)
  req.body.filename = req.file.filename;
  let result = await User.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  );
  res.send(result);
});

// const verifyToken = (req, res, next) => {
//   console.log(req.body);
// };

function verifyToken(req, res, next) {
  let token = req.headers["authorization"];
  // console.log(token);
  if (typeof token !== "undefined") {
    token = token.split(" ");
    // console.log("token[1]", token[1]);
    if (typeof token[1] !== "undefined") {
      Jwt.verify(token[1], jwtKey, (err, succ) => {
        if (err) {
          // console.log(err);
          res.send({ result: "Something went wrong" });
        } else {
          next();
        }
      });
    } else {
      res.send({ result: "Please check once your token" });
    }
  } else {
    res.send({ result: "No token found" });
  }
}

app.listen(port, () => {
  console.log(`Running http://localhost:${port}`);
});
