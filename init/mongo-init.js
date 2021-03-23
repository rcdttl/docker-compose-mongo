db.createUser(
  {
    user: "iot_user",
    pwd: "zxcv",
    roles: [{ role: "readWrite", db: "iot_db" }],
  },
  {
    w: "majority",
    wtimeout: 5000,
  }
);
db.createCollection("test");
