import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {
  Grid,
  Paper,
  Typography,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import useCollapse from "react-collapsed";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const validationSchema = yup.object({
  nombre1: yup
    .string("Ingrese su primer nombre")
    .required("Primer nombre es requerido"),
  nombre2: yup
    .string("Ingrese su segundo nombre")
    .required("Segundo nombre es requerido"),
  apellido1: yup
    .string("Ingrese su primer apellido")
    .required("Primer apellido es requerido"),
  apellido2: yup
    .string("Ingrese su segundo apellido")
    .required("Segundo apellido es requerido"),
  telefono: yup
    .string("Ingrese un número de teléfono válido")
    .min(8, "Número de teléfono debe tener al menos 8 dígitos")
    .required("Teléfono es requerido"),
  direccion: yup.string("Direccion").required("Direccion es requerida"),
  edad: yup.number("Ingrese su edad").required("Su edad es requerida"),
});

const FormularioSolEmpleo = () => {
  const formik = useFormik({
    initialValues: {
      nombre1: "",
      nombre2: "",
      apellido1: "",
      apellido2: "",
      telefono: "",
      direccion: "",
      edad: "",
      datetime: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div
      style={{
        marginTop: "1%",
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <DatosPersonales formik={formik}></DatosPersonales>
        <div
          style={{
            marginTop: "1%",
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "row",
            marginBottom: "1%",
          }}
        >
          <Button color="primary" variant="contained" type="submit">
            Ingresar
          </Button>
        </div>
      </form>
    </div>
  );
};

const DatosPersonales = ({ formik }) => {
  const config = {
    defaultExpanded: true,
  };
  const { getCollapseProps, getToggleProps } = useCollapse(config);

  const theme = useTheme();

  const isMD = useMediaQuery(theme.breakpoints.down("md"));
  const isSM = useMediaQuery(theme.breakpoints.down("sm"));
  const isXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <div>
      <Paper
        style={{
          padding: 15,
          width: isXS ? "400px" : isSM ? "600px" : isMD ? "800px" : "1000px",
          marginBottom: "2%",
          backgroundColor: "#EAEAEA",
        }}
      >
        <div {...getToggleProps()}>
          <Typography variant="h4" style={{ marginBottom: "1%" }}>
            Informacion personal
          </Typography>
        </div>
        <div {...getCollapseProps()}>
          <Grid container spacing={2} style={{ minHeight: "290px" }}>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                id="nombre1"
                name="nombre1"
                label="Primer Nombre"
                value={formik.values.nombre1}
                onChange={formik.handleChange}
                error={formik.touched.nombre1 && Boolean(formik.errors.nombre1)}
                helperText={formik.touched.nombre1 && formik.errors.nombre1}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                id="nombre2"
                name="nombre2"
                label="Segundo Nombre"
                value={formik.values.nombre2}
                onChange={formik.handleChange}
                error={formik.touched.nombre2 && Boolean(formik.errors.nombre2)}
                helperText={formik.touched.nombre2 && formik.errors.nombre2}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                id="apellido1"
                name="apellido1"
                label="Primer Apellido"
                value={formik.values.apellido1}
                onChange={formik.handleChange}
                error={
                  formik.touched.apellido1 && Boolean(formik.errors.apellido1)
                }
                helperText={formik.touched.apellido1 && formik.errors.apellido1}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                id="apellido2"
                name="apellido2"
                label="Segundo Apellido"
                value={formik.values.apellido2}
                onChange={formik.handleChange}
                error={
                  formik.touched.apellido2 && Boolean(formik.errors.apellido2)
                }
                helperText={formik.touched.apellido2 && formik.errors.apellido2}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                id="telefono"
                name="telefono"
                label="Telefono"
                type="number"
                value={formik.values.telefono}
                onChange={formik.handleChange}
                error={
                  formik.touched.telefono && Boolean(formik.errors.telefono)
                }
                helperText={formik.touched.telefono && formik.errors.telefono}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                id="direccion"
                name="direccion"
                label="Direccion"
                value={formik.values.direccion}
                onChange={formik.handleChange}
                error={
                  formik.touched.direccion && Boolean(formik.errors.direccion)
                }
                helperText={formik.touched.direccion && formik.errors.direccion}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                id="edad"
                name="edad"
                label="Edad"
                value={formik.values.edad}
                onChange={formik.handleChange}
                error={formik.touched.edad && Boolean(formik.errors.edad)}
                helperText={formik.touched.edad && formik.errors.edad}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                multiline={true}
                rows={3}
                fullWidth
                id="experiencia"
                name="experiencia"
                label="Experiencia laboral."
                value={formik.values.complicaciones}
                onChange={formik.handleChange}
              />
            </Grid>
          </Grid>
        </div>
      </Paper>
    </div>
  );
};
export default FormularioSolEmpleo;
