const db= require("../db")
const bcrypt = require("bcrypt")
const {BCRYPT_WORK_FACTOR} = require("../config")
const {BadRequestError,UnauthorizedError } = require("../utils/errors");

class Sleep{
    static async showSleep(sleep){
        return{
            id:sleep.id,
            name:sleep.name,
            created_at:sleep.created_at

        }
    }
    static async createSleep(sleepfact){
        //user should submit their email and password
        //if any of these fields are missing, throw an error
        const requiredFields=["start_date","end_date", "user_id"]
        requiredFields.forEach(field =>{
            if(!sleepfact.hasOwnProperty(field)){
                throw new BadRequestError(`Missing ${field} in request body.`)
            }
        })

        //make sure no user already exists in the system with that email
        //if one does, throw an error
        //make sure no user already exists in the system with that username
        //if one does, throw an error

        //create a new user in the db with all their info
        const result = await db.query(`
        INSERT INTO sleep (
            start_date,
            end_date,
            user_id
        )
        VALUES ($1, $2, $3)
        RETURNING id, start_date, end_date,user_id,created_at;
    `,
    [sleepfact.start_date, sleepfact.end_date, sleepfact.user_id]
    )

        //return the user
        return result.rows[0]

        


    }

    static async fetchSleepById(id) {
        
        if (!id) {
            throw new BadRequestError(`Missing ${field} in request body.`)
        } 
        
        const result = await db.query("SELECT * FROM sleep WHERE id = $1;", [id])
    
        return result.rows[0]
    }

    static async fetchAllSleepByUserId(user_id) {
        if (!user_id) {
            throw new BadRequestError("No user_id provided")
        }

        const query = `SELECT * FROM sleep WHERE user_id = $1`

        const results = await db.query(query, [user_id])
        console.log(results.rows)
        return results.rows
    }
}

module.exports=Sleep