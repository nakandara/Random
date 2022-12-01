import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import Header from "../../../base/components/Header";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Logoload from "../../global/Logoload";
import axios from "axios";
import schoolservices from "../../../base/services/school.service";
import Notification from "../../../base/components/Notification";
import Swal from "sweetalert2";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import Checklist from "./Checklist";

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
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const handleFormSubmit = async (values) => {
    console.log(values);
    try {
      const schoolData = await schoolservices.CreteStudent(
        values.name,
        values.description,
        values.address1,
        values.address2,
        values.city,
        values.dsDivision,
        values.district,
        values.provinceairegion,
        values.mohRegion,
        values.eduZone,
        values.eduDivision,
        values.contactNo1,
        values.contactNo2,
        values.email,
        values.latitude,
        values.longitude,
        values.medium
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
      <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 46, md: 4 }}>
        <Grid xs={16}>
          <Item>
            <Box display="flex" justifyContent="start" mt="20px">
              <Button
                onClick={handleFormSubmit}
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
          <Item>
            <Box
              m="20px"
              sx={{ gridArea: "main", bgcolor: "", borderRadius: "150px" }}
            >
              {/* <Logoload
        style={{
          margin: 8,
          backgroundColor: "green",
          padding: 8,
          height: 115,
          width: 115,
          borderRadius: 10,
        }}
      /> */}
              <Formik onSubmit={handleFormSubmit} initialValues={initialValues}>
                {({
                  values,
                  errors,
                  touched,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <Box
                      display="grid"
                      gap="8px"
                      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                      sx={{
                        "& > div": {
                          gridColumn: isNonMobile ? undefined : "span 5",
                        },
                      }}
                    >
                      <TextField
                        fullWidth
                        type="text"
                        label="Name Of The School"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.name}
                        name="name"
                        error={!!touched.name && !!errors.name}
                        helperText={touched.name && errors.name}
                        sx={{ gridColumn: "span 2" }}
                      />

                      <TextField
                        fullWidth
                        type="text"
                        label="District"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.district}
                        name="district"
                        error={!!touched.district && !!errors.district}
                        helperText={touched.district && errors.district}
                        sx={{ gridColumn: "span 2" }}
                      />
                      <TextField
                        fullWidth
                        type="text"
                        label="Educational Zone"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.eduZone}
                        name="eduZone"
                        error={!!touched.eduZone && !!errors.eduZone}
                        helperText={touched.eduZone && errors.eduZone}
                        sx={{ gridColumn: "span 2" }}
                      />
                      <TextField
                        // fullWidth
                        // type="text"
                        // label="Contact Number"
                        // onBlur={handleBlur}
                        // onChange={handleChange}
                        // value={values.contact}
                        name="contact"
                        error={!!touched.contact && !!errors.contact}
                        helperText={touched.contact && errors.contact}
                        required
                        id="outlined-required"
                        label="Tele Phone(Office)"
                        defaultValue="+94765297881"
                        sx={{ gridColumn: "span 2" }}
                      />

                      <TextField
                        fullWidth
                        id="outlined-textarea"
                        label="Address 1"
                        placeholder=" Maliyadeva College , Kurunegala "
                        multiline
                        type="text"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.address1}
                        name="address1"
                        error={!!touched.address1 && !!errors.address1}
                        helperText={touched.address1 && errors.address1}
                        sx={{ gridColumn: "span 2" }}
                      />
                      <TextField
                        id="outlined-textarea"
                        label="Address 2"
                        placeholder=" Maliyadeva College , Kurunegala "
                        multiline
                        fullWidth
                        type="text"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.address2}
                        name="address2"
                        error={!!touched.address2 && !!errors.address2}
                        helperText={touched.address2 && errors.address2}
                        sx={{ gridColumn: "span 2" }}
                      />

                      <TextField
                        fullWidth
                        type="text"
                        label="Assigned Teacher's Name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.teachersname}
                        name="name"
                        error={!!touched.teachersname && !!errors.teachersname}
                        helperText={touched.teachersname && errors.teachersname}
                        sx={{ gridColumn: "span 2" }}
                      />

                      <TextField
                        required
                        id="outlined-required"
                        label="Assigned Teacher's Contact Number"
                        defaultValue="+94765297881"
                        error={!!touched.contact && !!errors.contact}
                        helperText={touched.contact && errors.contact}
                        sx={{ gridColumn: "span 2" }}
                      />
                      <TextField
                        required
                        id="outlined-required"
                        label="Assigned Teacher's WhatsApp Number"
                        defaultValue="+94765297881"
                        error={!!touched.contact && !!errors.contact}
                        helperText={touched.contact && errors.contact}
                        sx={{ gridColumn: "span 2" }}
                      />
                      <TextField
                        fullWidth
                        type="text"
                        label="Email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                        name="email"
                        error={!!touched.email && !!errors.email}
                        helperText={touched.email && errors.email}
                        sx={{ gridColumn: "span 2" }}
                      />
                      <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Description"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.description}
                        name="description"
                        error={!!touched.description && !!errors.description}
                        helperText={touched.description && errors.description}
                        sx={{ gridColumn: "span 2" }}
                      />
                      <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="City"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.city}
                        name="city"
                        error={!!touched.city && !!errors.city}
                        helperText={touched.city && errors.city}
                        sx={{ gridColumn: "span 2" }}
                      />

                      <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Longitude"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.longitude}
                        name="longitude"
                        error={!!touched.longitude && !!errors.longitude}
                        helperText={touched.longitude && errors.longitude}
                        sx={{ gridColumn: "span 2" }}
                      />
                      <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Latitude"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.latitude}
                        name="latitude"
                        error={!!touched.latitude && !!errors.latitude}
                        helperText={touched.latitude && errors.latitude}
                        sx={{ gridColumn: "span 2" }}
                      />
                      <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="DS Division"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.dsDivision}
                        name="dsDivision"
                        error={!!touched.dsDivision && !!errors.dsDivision}
                        helperText={touched.dsDivision && errors.dsDivision}
                        sx={{ gridColumn: "span 2" }}
                      />
                      <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Province"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.province}
                        name="province"
                        error={!!touched.province && !!errors.province}
                        helperText={touched.province && errors.province}
                        sx={{ gridColumn: "span 2" }}
                      />

                      <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="AI Region"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.airegion}
                        name="airegion"
                        error={!!touched.airegion && !!errors.airegion}
                        helperText={touched.airegion && errors.airegion}
                        sx={{ gridColumn: "span 2" }}
                      />

                      <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="MOH Region"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.mohRegion}
                        name="mohRegion"
                        error={!!touched.mohRegion && !!errors.mohRegion}
                        helperText={touched.mohRegion && errors.mohRegion}
                        sx={{ gridColumn: "span 2" }}
                      />

                      <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="EDU Division"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.eduDivision}
                        name="eduDivision"
                        error={
                          !!touched.edueduDivisionZone && !!errors.eduDivision
                        }
                        helperText={touched.eduDivision && errors.eduDivision}
                        sx={{ gridColumn: "span 2" }}
                      />

                      <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Medium"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.medium}
                        name="medium"
                        error={!!touched.medium && !!errors.medium}
                        helperText={touched.medium && errors.medium}
                        sx={{ gridColumn: "span 2" }}
                      />
                      {/* <Checklist /> */}
                    </Box>
                    {/* <Box display="flex" justifyContent="end" mt="20px">
                      <Button
                        type="submit"
                        color="secondary"
                        variant="contained"
                      >
                        Create New User
                      </Button>
                    </Box> */}
                  </form>
                )}
              </Formik>
            </Box>
          </Item>
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

export default School;
