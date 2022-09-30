import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import "./registration.form.css";

const RegistrationForm = () => {
  return (
    <div className="registration-form">
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
          displayEmpty
          InputLabelProps={{
            className: "text-field",
          }}
          fullWidth={true}
        >
          <MenuItem value={10}>Male</MenuItem>
          <MenuItem value={20}>Female</MenuItem>
        </Select>

        <TextField
          label="Address"
          margin="normal"
          InputLabelProps={{
            className: "text-field",
          }}
          fullWidth={true}
        />
        <Checkbox
          label="Do you agree with using your personal data "
          color="success"
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
