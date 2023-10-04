import axios from "axios";

export default (url: string = "http://localhost:8081") => {

    return axios.create({

        baseURL: url,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphY2tzb25AZ21haWwuY29tIiwicGFzc3dvcmQiOiJmNzMyZGZkYmQwYWVkNjI3MjdmOTU4Y2NjY2E5ZWMzYTVjYjEzZWRhIiwiaWF0IjoxNjk2MzkwMTAyLCJleHAiOjE2OTYzOTM3MDJ9.D0MmSJFhygdb5TGo6ikUg5H0tJ-xiEUeMY4b8D8vWKI"
        }
        
    });

} 