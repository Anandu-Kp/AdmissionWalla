const pool = require('../config/db');


const submitForm = async(req,res) => {
    const {firstname, lastname, phonenum, email, Courses, state, interest, event } =  req.body;

    const query = `INSERT INTO College_form (first_name, last_name, number, email, course, state, interest, event) VALUES ('${firstname}', '${lastname}', '${phonenum}', '${email}', '${Courses}', '${state}','${interest},'${event}')`;

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
