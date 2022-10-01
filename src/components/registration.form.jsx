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

  const handleCheckBox = (e) => {
    setChecked(e.target.checked);
  };

  const handleSelect = (e) => {
    setSex(e.target.value);
  };

  return (
    <div className="registration-form center">
      <Typography variant="h4" component="div">
        Registration form
      </Typography>
      <form>
        <TextField
          label="Name"
          margin="normal"
          InputLabelProps={{
            className: "text-field",
          }}
          fullWidth={true}
        />
        <TextField
          label="Surname"
          margin="normal"
          InputLabelProps={{
            className: "text-field",
          }}
          fullWidth={true}
        />
        <TextField
          label="PhoneNumber"
          margin="normal"
          InputLabelProps={{
            className: "text-field",
          }}
          fullWidth={true}
        />
        <TextField
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
        >
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegistrationForm;
