import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import "./registration.form.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionTypes } from "../../redux/actions/action.types";
import { types } from "../../redux/actions/types";
import { AddUser, formContainer } from "./registration.form.container";

const RegistrationForm = () => {
  const [sex, setSex] = useState("Select your Sex");
  const [errorSex, setErrorSex] = useState("");
  const [checked, setChecked] = useState(false);
  const [errorChecked, setErrorChecked] = useState("");
  const [name, setName] = useState("");
  const [errorName, setErrorName] = useState("");
  const [surname, setSurname] = useState("");
  const [errorSurname, setErrorSurname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [errorPhonenumber, setErrorPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [address, setAddress] = useState("");
  const [errorAddress, setErrorAddress] = useState("");

  const handleChangeValueOfField = (e) => {
    switch (e.target.name) {
      case "sexselect":
        setSex(e.target.value);
        break;
      case "agreecheckbox":
        setChecked(e.target.checked);
        break;
      case "name":
        setName(e.target.value);
        break;
      case "surname":
        setSurname(e.target.value);
        break;
      case "phonenumber":
        const value = e.target.value.replace(/\D/, "");
        if (value.length < 11) {
          setPhonenumber(value);
        }
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "address":
        setAddress(e.target.value);
        break;
      default:
        break;
    }
  };

  const zeroingvaliables = () => {
    setSex("Select your Sex");
    setName("");
    setSurname("");
    setChecked(false);
    setPhonenumber("");
    setEmail("");
    setAddress("");
  };

  const zeroingerrors = () => {
    setErrorSex("");
    setErrorName("");
    setErrorSurname("");
    setErrorChecked(false);
    setErrorPhonenumber("");
    setErrorEmail("");
    setErrorAddress("");
  };

  const validate = () => {
    let flag = true;
    zeroingerrors();
    if (!checked) {
      setErrorChecked("The field is required!");
      flag = false;
    }
    if (sex === "Select your Sex") {
      setErrorSex("You have to choose you sex!");
      flag = false;
    }
    if (!name) {
      setErrorName("Name can't be empty!");
      flag = false;
    }
    if (!surname) {
      setErrorSurname("Surname can't be empty!");
      flag = false;
    }
    if (!phonenumber || phonenumber.length < 10) {
      setErrorPhonenumber(
        "Phonenumber can't be empty of less than ten symbols!"
      );
      flag = false;
    }
    if (!email || !email.includes(".") || !email.includes("@")) {
      setErrorEmail("The email isn't valid!");
      flag = false;
    }
    if (!address) {
      setErrorAddress("Address can't be empty!");
      flag = false;
    }

    return flag;
  };

  const handleOnClick = (e) => {
    // console.log(name);
    // console.log(surname);
    // console.log(sex);
    // console.log(email);
    // console.log(address);
    if (validate()) {
      const user = {
        name: name,
        surname: surname,
        sex: sex,
        email: email,
        address: address,
      };
      adduser(user);
      zeroingvaliables();
    }
    // const url = `
    // https://autocomplete.search.hereapi.com/v1/
    // autocomplete
    // ?q=uk
    // &apiKey=${localStorage.getItem("key")}
    // `;
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
  };

  const dispatch = useDispatch();

  const container = formContainer(dispatch);

  const adduser = (user) => {
    container.AddUser(user);
  };

  return (
    <div className="registration-form center">
      <Typography variant="h4" component="div">
        Registration form
      </Typography>
      <form>
        <TextField
          error={errorName}
          helperText={errorName}
          required
          name="name"
          value={name}
          onChange={handleChangeValueOfField}
          label="Name"
          margin="normal"
          InputLabelProps={{
            className: "text-field",
          }}
          fullWidth={true}
        />
        <TextField
          error={errorSurname}
          helperText={errorSurname}
          required
          name="surname"
          value={surname}
          onChange={handleChangeValueOfField}
          label="Surname"
          margin="normal"
          InputLabelProps={{
            className: "text-field",
          }}
          fullWidth={true}
        />
        <TextField
          error={errorPhonenumber}
          helperText={errorPhonenumber}
          required
          name="phonenumber"
          value={phonenumber}
          onChange={handleChangeValueOfField}
          label="PhoneNumber"
          margin="normal"
          pattern="[0-9]*"
          InputLabelProps={{
            className: "text-field",
          }}
          fullWidth={true}
        />
        <TextField
          error={errorEmail}
          helperText={errorEmail}
          required
          name="email"
          value={email}
          onChange={handleChangeValueOfField}
          label="Email"
          margin="normal"
          InputLabelProps={{
            className: "text-field",
          }}
          fullWidth={true}
        />

        <FormControl sx={{ marginTop: 1 }} fullWidth={true} error={errorSex}>
          <Select
            helperText={"AAAAAA"}
            name="sexselect"
            value={sex}
            displayEmpty
            onChange={handleChangeValueOfField}
          >
            <MenuItem value={"Select your Sex"} disabled>
              <em>select the value</em>
            </MenuItem>
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
          </Select>
          <FormHelperText>{errorSex}</FormHelperText>
        </FormControl>
        <TextField
          error={errorAddress}
          helperText={errorAddress}
          required
          name="address"
          value={address}
          onChange={handleChangeValueOfField}
          label="Address"
          margin="normal"
          InputLabelProps={{
            className: "text-field",
          }}
          fullWidth={true}
        />
        <FormControl error={errorChecked}>
          <FormControlLabel
            control={
              <Checkbox
                name="agreecheckbox"
                color="success"
                checked={checked}
                onChange={handleChangeValueOfField}
              />
            }
            label="Do you agree with using your personal data?"
          />
          <FormHelperText>{errorChecked}</FormHelperText>
        </FormControl>
        <Button
          name="registerbutton"
          fullWidth={true}
          InputLabelProps={{
            className: "text-field",
          }}
          onClick={handleOnClick}
        >
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegistrationForm;
