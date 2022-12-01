import axios from "axios";
import * as types from '../../config'
import authHeader from "./auth-header";

const API_URL = types.REACT_APP_BASE_URL;

const CreteStudent = async (name, description, address1, address2, city, dsDivision, district, provinceairegion, mohRegion, eduZone, eduDivision, contactNo1, contactNo2, email, latitude, longitude, medium) => {

    try {
        const response = await axios
            .post(API_URL + "schools", {
                name, description, address1, address2, city, dsDivision, district, provinceairegion, mohRegion, eduZone, eduDivision, contactNo1, contactNo2, email, latitude, longitude, medium
            }, { headers: authHeader() });

        return response;
    } catch (error) {
        console.log(error);
    }

};


const postService = {
    CreteStudent,
};

export default postService;