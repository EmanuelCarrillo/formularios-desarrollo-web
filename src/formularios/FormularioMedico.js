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
  representante: yup
    .string("Ingrese su nombre completo")
    .required("Se requiere registrar un representante"),
  telefono: yup
    .string("Ingrese un número de teléfono válido")
    .min(8, "Número de teléfono debe tener al menos 8 dígitos")
    .required("Teléfono es requerido"),
  direccion: yup
    .string("Ingrese su dirección")
    .required("Dirección es requerida"),
  tipo_sangre: yup
    .string("Ingrese su tipo de sangre")
    .required("Tipo de sangre es requerida"),
  factor_rh: yup
    .string("Ingrese su factor RH")
    .required("Factor RH es requerido"),
});

const FormularioMedico = () => {
  const formik = useFormik({
    initialValues: {
      nombre1: "",
      nombre2: "",
      apellido1: "",
      apellido2: "",
      apellido3: "",
      representante: "",
      telefono: "",
      direccion: "",
      antecedentes_prenatales: "",
      antecedentes_natales: "",
      antecedentes_patologicos: "",
      antecedentes_patologicos_familiares: "",
      complicaciones: "",
      tipo_sangre: "",
      factor_rh: "",
      historial_alimenticio: "",
      alergias: "",
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
        <AntecedentesPaciente formik={formik}></AntecedentesPaciente>
        <HistorialNutricional formik={formik}></HistorialNutricional>
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
            Informacion paciente
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
                id="representante"
                name="representante"
                label="Representante"
                value={formik.values.representante}
                onChange={formik.handleChange}
                error={
                  formik.touched.representante &&
                  Boolean(formik.errors.representante)
                }
                helperText={
                  formik.touched.representante && formik.errors.representante
                }
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
          </Grid>
        </div>
      </Paper>
    </div>
  );
};

const AntecedentesPaciente = ({ formik }) => {
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
            Antecedentes del paciente
          </Typography>
        </div>
        <div {...getCollapseProps()}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                multiline={true}
                rows={3}
                fullWidth
                id="antecedentes_prenatales"
                name="antecedentes_prenatales"
                label="Antecedentes prenatales"
                value={formik.values.antecedentes_prenatales}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                multiline={true}
                rows={3}
                fullWidth
                id="antecedentes_natales"
                name="antecedentes_natales"
                label="Antecedentes natales"
                value={formik.values.antecedentes_natales}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                multiline={true}
                rows={3}
                fullWidth
                id="antecedentes_patologicos"
                name="antecedentes_patologicos"
                label="Antecedentes patologicos"
                value={formik.values.antecedentes_patologicos}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                multiline={true}
                rows={3}
                fullWidth
                id="antecedentes_patologicos_familiares"
                name="antecedentes_patologicos_familiares"
                label="Antecedentes patologicos familiares"
                value={formik.values.antecedentes_patologicos_familiares}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                multiline={true}
                rows={3}
                fullWidth
                id="complicaciones"
                name="complicaciones"
                label="Complicaciones"
                value={formik.values.complicaciones}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl
                fullWidth
                error={
                  formik.touched.tipo_sangre &&
                  Boolean(formik.errors.tipo_sangre)
                }
              >
                <InputLabel id="demo-simple-select-label">
                  Tipo de sangre
                </InputLabel>
                <Select
                  id="tipo_sangre"
                  name="tipo_sangre"
                  value={formik.values.tipo_sangre}
                  label="Tipo de sangre"
                  onChange={formik.handleChange}
                >
                  <MenuItem value={"A"}>A</MenuItem>
                  <MenuItem value={"B"}>B</MenuItem>
                  <MenuItem value={"O"}>O</MenuItem>
                  <MenuItem value={"AB"}>A</MenuItem>
                </Select>
                <FormHelperText>
                  {formik.touched.tipo_sangre && formik.errors.tipo_sangre}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl
                fullWidth
                error={
                  formik.touched.factor_rh && Boolean(formik.errors.factor_rh)
                }
              >
                <InputLabel id="demo-simple-select-label">Factor RH</InputLabel>
                <Select
                  id="factor_rh"
                  name="factor_rh"
                  value={formik.values.factor_rh}
                  label="Factor RH"
                  onChange={formik.handleChange}
                >
                  <MenuItem value={"RH+"}>RH+</MenuItem>
                  <MenuItem value={"RH-"}>RH-</MenuItem>
                </Select>
                <FormHelperText>
                  {formik.touched.factor_rh && formik.errors.factor_rh}
                </FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </div>
  );
};
const HistorialNutricional = ({ formik }) => {
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
            Alergias y historial alimenticio del paciente
          </Typography>
        </div>
        <div {...getCollapseProps()}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                multiline={true}
                rows={3}
                fullWidth
                id="historial_alimenticio"
                name="historial_alimenticio"
                label="Historial alimenticio"
                value={formik.values.historial_alimenticio}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                multiline={true}
                rows={3}
                fullWidth
                id="alergias"
                name="alergias"
                label="Alergias"
                value={formik.values.alergias}
                onChange={formik.handleChange}
              />
            </Grid>
          </Grid>
        </div>
      </Paper>
    </div>
  );
};
export default FormularioMedico;
