import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./registration.form.css";
import { useState } from "react";

const RegistrationForm = () => {
  const [sex, setSex] = useState("Select your Sex");
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleTextName = (e) => {
    setName(e.target.value);
  };
  const handleTextSurname = (e) => {
    setSurname(e.target.value);
  };
  const handleTextPhonenumber = (e) => {
    setPhonenumber(e.target.value);
  };
  const handleTextEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleTextAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleCheckBox = (e) => {
    setChecked(e.target.checked);
  };

  const handleSelect = (e) => {
    setSex(e.target.value);
  };

  const handleOnClick = (e) => {
    console.log(`checked is ${checked}`);
    console.log(sex);
    console.log(name);
    console.log(surname);
    console.log(phonenumber);
    console.log(email);
    console.log(address);
  };

  return (
    <div className="registration-form center">
      <Typography variant="h4" component="div">
        Registration form
      </Typography>
      <form>
        <TextField
          value={name}
          onChange={handleTextName}
          label="Name"
          margin="normal"
          InputLabelProps={{
            className: "text-field",
          }}
          fullWidth={true}
        />
        <TextField
          value={surname}
          onChange={handleTextSurname}
          label="Surname"
          margin="normal"
          InputLabelProps={{
            className: "text-field",
          }}
          fullWidth={true}
        />
        <TextField
          value={phonenumber}
          onChange={handleTextPhonenumber}
          label="PhoneNumber"
          margin="normal"
          InputLabelProps={{
            className: "text-field",
          }}
          fullWidth={true}
        />
        <TextField
          value={email}
          onChange={handleTextEmail}
          label="Email"
          margin="normal"
          InputLabelProps={{
            className: "text-field",
          }}
          fullWidth={true}
        />
        <Select
          label="Choose your sex"
          value={sex}
          displayEmpty
          onChange={handleSelect}
          fullWidth={true}
        >
          <MenuItem value={"Select your Sex"} disabled>
            <em>select the value</em>
          </MenuItem>
          <MenuItem value={"Male"}>Male</MenuItem>
          <MenuItem value={"Female"}>Female</MenuItem>
        </Select>

        <TextField
          value={address}
          onChange={handleTextAddress}
          label="Address"
          margin="normal"
          InputLabelProps={{
            className: "text-field",
          }}
          fullWidth={true}
        />
        <FormControlLabel
          control={
            <Checkbox
              color="success"
              checked={checked}
              onChange={handleCheckBox}
            />
          }
          label="Do you agree with using your personal data "
        />
        <Button
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
