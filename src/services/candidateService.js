import axios from "../axios/axios"

export default class CandidateService{
    getAllCandidate(){
        return axios.get("/candidates/getall")
    }
}