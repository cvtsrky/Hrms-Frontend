import axios from "../axios/axios"

export default class EmployerService{
getAllEmployer(){
    return axios.get("/employers/getall")
    }

}