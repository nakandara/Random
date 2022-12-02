import axios from "axios";
import * as types from '../../config'
import authHeader from "./auth-header";

const API_URL = types.REACT_APP_BASE_URL;

const CreteStudent = async (name, email, district, eduZone, address1, address2,
    dsDivision, phoneNo, assignTeacherName, assignTeacherContactNo, assignTeacherWhatsAppNo, assignTeacherEmail, landSize, scale, availableClubs, reliableWaterSourceExist, agreementToSupportProgram) => {

    try {
        const response = await axios
            .post(API_URL + "schools", {
                name, email, district, eduZone, address1, address2, dsDivision,
                phoneNo, assignTeacherName, assignTeacherContactNo, assignTeacherWhatsAppNo, assignTeacherEmail, landSize, scale, availableClubs, reliableWaterSourceExist, agreementToSupportProgram
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