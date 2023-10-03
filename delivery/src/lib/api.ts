import axios from "axios";

export default (url: string = "http:localhost:8081") => {

    axios.create({

        baseURL: url,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphY2tzb25AZ21haWwuY29tIiwicGFzc3dvcmQiOiJmNzMyZGZkYmQwYWVkNjI3MjdmOTU4Y2NjY2E5ZWMzYTVjYjEzZWRhIiwiaWF0IjoxNjk2MzAxNDE5LCJleHAiOjE2OTYzMDUwMTl9.qUzw6zoMTU756O-yDBkJJRr_nLgiUdxnNMU0VzAQ-xg"
        }
        
    });

}