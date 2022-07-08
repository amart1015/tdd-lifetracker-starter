const db= require("../db")
const bcrypt = require("bcrypt")
const {BCRYPT_WORK_FACTOR} = require("../config")
const {BadRequestError,UnauthorizedError } = require("../utils/errors");

class Exercise{
    static async showExercise(exercise){
        return{
            id:exercise.id,
            name:exercise.name,
            created_at:exercise.created_at

        }
    }
    static async createExercise(exercisefact){
        //user should submit their email and password
        //if any of these fields are missing, throw an error
        const requiredFields=["name","category","duration","intensity", "user_id"]
        requiredFields.forEach(field =>{
            if(!exercisefact.hasOwnProperty(field)){
                throw new BadRequestError(`Missing ${field} in request body.`)
            }
        })

        //make sure no user already exists in the system with that email
        //if one does, throw an error
        //make sure no user already exists in the system with that username
        //if one does, throw an error

        //create a new user in the db with all their info
        const result = await db.query(`
        INSERT INTO exercise (
            name,
            category,
            duration,
            intensity,
            user_id
        )
        VALUES ($1, $2, $3, $4, $5)
        RETURNING id, name, category, duration, intensity, user_id,created_at;
    `,
    [exercisefact.name, exercisefact.category, exercisefact.duration,exercisefact.intensity, exercisefact.user_id]
    )

        //return the user
        return result.rows[0]

        


    }

    static async fetchExerciseById(id) {
        
        if (!id) {
            throw new BadRequestError(`Missing ${field} in request body.`)
        } 
        
        const result = await db.query("SELECT * FROM exercise WHERE id = $1;", [id])
    
        return result.rows[0]
    }

    static async fetchAllExerciseByUserId(user_id) {
        if (!user_id) {
            throw new BadRequestError("No user_id provided")
        }

        const query = `SELECT * FROM exercise WHERE user_id = $1`

        const results = await db.query(query, [user_id])
        console.log(results.rows)
        return results.rows
    }
}

module.exports=Exercise