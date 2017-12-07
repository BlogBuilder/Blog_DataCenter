/**
 * Created by qulongjun on 2017/11/16.
 */
let express = require('express')
let app = express()

let certificate_success = require('../../../data/basic/certificate/certification_success.json');
let certificate_error = require('../../../data/basic/certificate/certification_error.json');
let certificate_padding = require('../../../data/basic/certificate/certification_padding.json');
let certificate_none = require('../../../data/basic/certificate/certification_none.json');

let success = require('../../../data/success.json');

let apiRoutes = express.Router();

apiRoutes.get("/info", function (req, res) {
    res.json(certificate_error);
});
apiRoutes.post("/check", function (req, res) {
    res.json(success);
});

module.exports = apiRoutes;



