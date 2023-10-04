import axios from "axios";

export default (url: string = "http://localhost:8081") => {

    return axios.create({

        baseURL: url,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphY2tzb25AZ21haWwuY29tIiwicGFzc3dvcmQiOiJmNzMyZGZkYmQwYWVkNjI3MjdmOTU4Y2NjY2E5ZWMzYTVjYjEzZWRhIiwiaWF0IjoxNjk2NDA1NDA4LCJleHAiOjE2OTY0MDkwMDh9.CGGRlVWoqdL1NtoUlddjJC5VuQ0Jf26zm5J0lulW54Q"
        }
        
    });

} 