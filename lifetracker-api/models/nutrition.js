const db= require("../db")
const bcrypt = require("bcrypt")
const {BCRYPT_WORK_FACTOR} = require("../config")
const {BadRequestError,UnauthorizedError } = require("../utils/errors");

class Nutrition{
    static async showNutrition(nutrition){
        return{
            id:nutrition.id,
            name:nutrition.name,
            created_at:nutrition.created_at

        }
    }
    static async createNutrition(nutritionfact){
        //user should submit their email and password
        //if any of these fields are missing, throw an error
        const requiredFields=["name","category","calories","image_url"]
        requiredFields.forEach(field =>{
            console.log("hey");
            if(!nutritionfact.hasOwnProperty(field)){
                throw new BadRequestError(`Missing ${field} in request body.`)
            }
        })

        //make sure no user already exists in the system with that email
        //if one does, throw an error
        //make sure no user already exists in the system with that username
        //if one does, throw an error

        //create a new user in the db with all their info
        const result = await db.query(`
        INSERT INTO nutrition (
            name,
            category,
            calories,
            image_url

        )
        VALUES ($1, $2, $3, $4)
        RETURNING id, name, category, calories, image_url, user_id,created_at;
    `,
    [nutritionfact.name, nutritionfact.category, nutritionfact.calories,nutritionfact.image_url]
    )

        //return the user
        return result.rows[0]

        


    }
}

module.exports=Nutrition