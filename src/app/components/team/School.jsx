import React, { useState } from "react";
import Sidebar from "../../global/Sidebar";
import Topbar from "../../global/Topbar";

import { Box, Button, TextField } from "@mui/material";
import Header from "../../../base/components/Header";

import useMediaQuery from "@mui/material/useMediaQuery";
import Logoload from "../../global/Logoload";
import axios from "axios";
import schoolservices from "../../../base/services/school.service";
import Notification from "../../../base/components/Notification";

import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Typography, useTheme } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  description: "",
  contact: "",
  address1: "",
  address2: "",
  city: "",
  Longitude:"",
  latitude:"",
  division:"",
  dsDivision:"",
  educationalDivision:"",
  region:"",
  airegion:""
};

const School = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [personName, setPersonName] = React.useState([]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const [initial, setInitial] = useState({
    name: "",
    email: "",
    district: "",
    eduZone: "",
    address1: "",
    address2: "",
    dsDivision: "",
    phoneNo: "",
    assignTeacherName: "",
    assignTeacherContactNo: "",
    assignTeacherWhatsAppNo: "",
    assignTeacherEmail: "",
    landSize: "",
    scale: "",
    availableClubs: [],
    reliableWaterSourceExist: true,
    agreementToSupportProgram: true,
  });
  const [contactInfo3, setContactInfo3] = useState("");
  const ary = ["AGRICULTURE", "ENVIRONMENT_PIONEER", "NUTRITIONAL", "OTHER"];
  const aryone = ["ACRES", "PR"];

  const drop = (e) => {
    const {
      target: { value },
    } = e;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    setInitial({
      ...initial,
      [e.target.name]: typeof value === "string" ? value.split(",") : value,
    });

    // setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const changehandle = (e) => {
    if (e.target.name === "dropdown") {
      const {
        target: { value },
      } = e;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    
      setInitial({ ...initial, [e.target.name]: personName });
    } else {
      setContactInfo3(e.target.value);
      setInitial({ ...initial, [e.target.name]: e.target.value });
    }
  };

  const changehandletwo = (e) => {
    setInitial({
      ...initial,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = async (e) => {
    // prevents the submit button from refreshing the page
    e.preventDefault();



    try {
      const schoolData = await schoolservices.CreteStudent(
        initial.name,
        initial.email,
        initial.district,
        initial.eduZone,
        initial.address1,
        initial.address2,
        initial.dsDivision,
        initial.phoneNo,
        initial.assignTeacherName,
        initial.assignTeacherContactNo,
        initial.assignTeacherWhatsAppNo,
        initial.assignTeacherEmail,
        initial.landSize,
        initial.scale,
        initial.availableClubs,
        initial.reliableWaterSourceExist,
        initial.agreementToSupportProgram
      );
 
      if (schoolData.status === 201) {
        Notification.SucceMsg();
      } else {
        Notification.ErrorMsg();
      }
    } catch (error) {
      console.log(error);
      Notification.ErrorMsg();
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Header title="SCHOOL" subtitle="Create a New School Profile" />
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 2, sm: 46, md: 4 }}
        sx={{ height: "10%" }}
      >
        <Grid xs={16}>
          <Item>
            {" "}
            <Box display="flex" justifyContent="start" mt="20px">
              <Button
                onClick={handleSubmit}
                type="submit"
                color="secondary"
                variant="contained"
              >
                Create New User
              </Button>
            </Box>
          </Item>
        </Grid>

        <Grid xs={10}>
          <Grid>
            <Box
              display="grid"
              fontWeight="bold"
              gap="10px"
              variant="h5"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": {
                  gridColumn: isNonMobile ? undefined : "span 5",
                  height: "50px",
                },
              }}
            >
              <TextField
                margin="normal"
                fullWidth
                id="name"
                maxlength="5"
                label="Name Of School"
                name="name"
                inputProps={{
                  maxlength: 50,
                }}
                sx={{ gridColumn: "span 2" }}
                value={initial.name}
                onChange={changehandle}
              />
              <TextField
                margin="normal"
                value={initial.email}
                onChange={changehandle}
                requireds
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                margin="normal"
                value={initial.district}
                onChange={changehandle}
                required
                fullWidth
                id="district"
                label="District"
                name="district"
              />
              <TextField
                value={initial.eduZone}
                onChange={changehandle}
                margin="normal"
                required
                fullWidth
                id="eduZone"
                label="Educational Zone"
                name="eduZone"
              />
              <TextField
                value={initial.address1}
                onChange={changehandle}
                margin="normal"
                required
                fullWidth
                id="address1"
                label="address 1"
                name="address1"
              />
              <TextField
                value={initial.address2}
                onChange={changehandle}
                margin="normal"
                required
                fullWidth
                id="address2"
                label="address 2"
                name="address2"
              />
              <TextField
                margin="normal"
                value={initial.dsDivision}
                onChange={changehandle}
                required
                fullWidth
                id="dsDivision"
                label="DS Division"
                name="dsDivision"
              />
              <TextField
                margin="normal"
                value={initial.phoneNo}
                onChange={changehandle}
                required
                fullWidth
                id="phoneNo"
                label="phone No"
                name="phoneNo"
              />
              <TextField
                value={initial.assignTeacherName}
                onChange={changehandle}
                margin="normal"
                required
                fullWidth
                id="assignTeacherName"
                label="assign Teacher Name"
                name="assignTeacherName"
              />
              <TextField
                margin="normal"
                value={initial.assignTeacherContactNo}
                onChange={changehandle}
                required
                fullWidth
                id="assignTeacherContactNo"
                label="assign Teacher ContactNo"
                name="assignTeacherContactNo"
              />
              <TextField
                margin="normal"
                value={initial.assignTeacherWhatsAppNo}
                onChange={changehandle}
                required
                fullWidth
                id="phone"
                label="assign Teacher WhatsAppNo"
                name="assignTeacherWhatsAppNo"
              />
              <TextField
                margin="normal"
                value={initial.assignTeacherEmail}
                onChange={changehandle}
                required
                fullWidth
                id="Email"
                label="assign Teacher Email"
                name="assignTeacherEmail"
              />

              <TextField
                margin="normal"
                type="number"
                value={initial.landSize}
                onChange={changehandle}
                required
                fullWidth
                id="landSize"
                label="land Size"
                name="landSize"
              />
              <Box sx={{ minWidth: 10 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label"></InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={initial.scale}
                    onChange={changehandle}
                    name="scale"
                  >
                    <MenuItem value={"ACRES"}>ACRES</MenuItem>
                    <MenuItem value={"Perch"}>Perch</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Typography variant="h5" gutterBottom>
                Do you have Reliable Water Source ?
              </Typography>
              <Box sx={{ minWidth: 10 }}>
                <FormControl fullWidth>
                  <InputLabel
                    sx={{ gridColumn: "span 6" }}
                    id="demo-simple-select-label"
                  ></InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    multiple
                    name="availableClubs"
                    value={initial.availableClubs}
                    onChange={drop}
                  >
                    {ary.map((d) => (
                      <MenuItem key={d} value={d}>
                        {d}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Typography variant="h5" gutterBottom>
                Do you have Reliable Water Source ?
              </Typography>

              <input
                style={{ width: "30px" }}
                onChange={changehandletwo}
                type="checkbox"
                name="reliableWaterSourceExist"
                checked={initial.reliableWaterSourceExist}
              />
              <Box>
                <Typography variant="h5" gutterBottom>
                  Do you have Reliable Water Source ?
                </Typography>
              </Box>

              <input
                style={{ width: "30px" }}
                onChange={changehandletwo}
                type="checkbox"
                name="agreementToSupportProgram"
                checked={initial.agreementToSupportProgram}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  name: yup.string().required("required"),
  // lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contactNo1: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  contactNo2: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
  description: yup.string().required("required"),
  city: yup.string().required("required"),
  longitude: yup.string().required("required"),
  latitude: yup.string().required("required"),
  district: yup.string().required("required"),
  dsDivision: yup.string().required("required"),
  province: yup.string().required("required"),
  airegion: yup.string().required("required"),
  mohRegion: yup.string().required("required"),
  eduZone: yup.string().required("required"),
  eduDivision: yup.string().required("required"),
  medium: yup.string().required("required"),
});
const initialValues = {
  name: "",
  description: "",
  address1: "",
  address2: "",
  city: "",
  dsDivision: "",
  district: "",
  province: "",
  airegion: "",
  mohRegion: "",
  eduZone: "",
  eduDivision: "",
  contactNo1: "",
  contactNo2: "",
  email: "",
  latitude: "",
  longitude: "",
  medium: "",
};

export default School;
