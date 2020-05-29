const express = require('express');
const router = express.Router();

const con = require('../client');

const bcrypt = require('bcrypt');
const saltRounds = 10;




/* Register new user. */
router.post('/registration', function(req, res, next) {
    const validatePhoneNumber = require('validate-phone-number-node-js');
    const validator = require("email-validator");
    errors = 1;
    if (req.body.password !== req.body.conf_password) {
        errors = "Password mismatch";
    }
    if (req.body.first_name.length < 2) {
        errors = "first name of file or empty";
    }
    if (req.body.last_name.length < 5) {
        errors = "last name of file or empty";
    }
    if (!(req.body.gender == "man" || req.body.gender == "woman" || req.body.gender == "")) {
        errors = "gender invalid";
    }
    if (isNaN(req.body.age)) {
        errors = 'age is not number';
    }
    let result_phon = validatePhoneNumber.validate(req.body.phone);
    if (result_phon == false) {
        errors = 'phone number invalid';
    }

    let resalt_male = validator.validate(req.body.email);

    if (resalt_male == false) {
        errors = 'mail number invalid';
    }

    if (errors === 1) {
        console.log(req.body.email)
        con.query(`SELECT * FROM users WHERE email = '${req.body.email}'`, function(err, result) {
            if (err) {
                return res.status(500).send(err);
            }
            if (result.length === 0) {

                bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
                    if (!err) {
                        first_name = req.body.first_name,
                            last_name = req.body.last_name,
                            phone = req.body.phone,
                            age = req.body.age,
                            gender = req.body.gender,
                            address = req.body.address,
                            email = req.body.email,
                            password = hash,
                            reminder = req.body.reminder
                        con.query(" INSERT INTO `users` ( `first_name`, `last_name`, `phone` , `age`, `gender` , `address` , `email`, `password` , `reminder`) VALUES(  '" + first_name + "','" + last_name + "', '" + phone + "' , '" + age + "', '" + gender + "', '" + address + "', '" + email + "', '" + password + "', '" + reminder + "') ", function(err, result) {
                            if (err) {
                                return res.status(500).send(err);
                            }
                            return res.status(201).send('Created');
                        });
                    } else {
                        console.log("Error : ", err);
                    }
                });
            }
            errors = "A user with the same email address already exists.";
            res.status(200).send(errors);
        });
    }

});

module.exports = router;