import axios from "axios";

const API_BASE_URL = "http://localhost:3001";

const ENDPOINTS = {
    stats: "stats",
    courses: "courses",
    instructors: "instructors"
};

export const fetchStats = () => {
    return axios.get(`${API_BASE_URL}/${ENDPOINTS.stats}`)
    .then(({data})=>data);
}
 export const fetchCourses = () => {
    return axios.get(`${API_BASE_URL}/${ENDPOINTS.courses}`)
    .then(({data})=>data);
}
export const fetchInstructors = () => {
    return axios.get(`${API_BASE_URL}/${ENDPOINTS.instructors}`)
    .then(({data})=>data);
}
export const fetchCourse =(id) =>{
    return axios.get(`${API_BASE_URL}/${ENDPOINTS.courses}/${id}`)
    .then(({data}) => data);
}
// export const fetchCourseInstructor = (ids) =>{
//     const query = ids
//     .map((id)=>`id=${id}&`)
//     .join("")
//     .slice(0, -1);

//     return axios.get(`${API_BASE_URL}/${ENDPOINTS.instructors}?${query}`)
//     .then(({data})=>data);

// };

export const deleteCourse = (id ) =>{
    return axios.delete(`${API_BASE_URL}/${ENDPOINTS.courses}/${id}`)
    
};

export const updateCourse = (data) =>{
  axios.put(`${API_BASE_URL}/${ENDPOINTS.courses}/${data.id}`, data)
};
export const addCourse = (data) =>{
  axios.post(`${API_BASE_URL}/${ENDPOINTS.courses}`, data)
console.log(data)
};

// Data to add:
// {
//   "id": "01", // only for updateCourse
//   "title": "React",
//   "imagePath": "/react.png",
//   "price": {
//     "normal": 500,
//     "early_bird": 450
//   },
//   "dates": {
//     "start_date": "2018-10-19",
//     "end_date": "2018-10-10"
//   },
//   "duration": "2 Fridays and 4 Saturdays",
//   "open": true,
//   "instructors": ["01"],
//   "description": "<p>This is a certified program by Athens Tech College, the first educational institution in Greece that specialises in computer science and ICT studies.</p><p>Participant’s registration (payment’s completion) implies full compliance and acceptance of Code.Learn Terms &amp; Conditions.</p>"
// }