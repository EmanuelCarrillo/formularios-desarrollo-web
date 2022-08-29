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
  modelo: yup
    .string("Ingrese modelo del auto")
    .required("Se requiere el modelo del auto"),
  año: yup
    .string("Ingrese el año del auto")
    .required("Se requiere el año del auto"),
});

const FormularioCotizacion = () => {
  const formik = useFormik({
    initialValues: {
      nombre1: "",
      nombre2: "",
      apellido1: "",
      apellido2: "",
      telefono: "",
      modelo: "",
      año: "",
      direccion: "",
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
            Informacion de cotizacion
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
                id="modelo"
                name="modelo"
                label="Modelo del auto"
                type="modelo"
                value={formik.values.modelo}
                onChange={formik.handleChange}
                error={formik.touched.modelo && Boolean(formik.errors.modelo)}
                helperText={formik.touched.modelo && formik.errors.modelo}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                id="año"
                name="año"
                label="año del auto"
                value={formik.values.año}
                onChange={formik.handleChange}
                error={formik.touched.año && Boolean(formik.errors.año)}
                helperText={formik.touched.año && formik.errors.año}
              />
            </Grid>
          </Grid>
        </div>
      </Paper>
    </div>
  );
};
export default FormularioCotizacion;
