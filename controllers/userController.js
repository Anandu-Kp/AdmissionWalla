const pool = require('../config/db');


const submitForm = async(req,res) => {
    const {firstName, lastName, phone, email, Courses, state, interest } =  req.body;

    const query = `INSERT INTO College_form (first_name, last_name, number, email, course, state, interest) 
    VALUES ('${firstName}', '${lastName}', '${phone}', '${email}', '${Courses}', '${state}','${interest}')`;

    try {
        await pool.query(query);
        return res.status(200).send({
            message : "form saved successfully",
            data:req.body
        })
        
    } catch (error) {
        return res.status(400).send({
            message: "failed to add data to database",
            data: error
        })        
    }
 }



module.exports = {submitForm}