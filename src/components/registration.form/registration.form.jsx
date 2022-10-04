import * as React from "react";
import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import "./registration.form.css";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionTypes } from "../../redux/actions/action.types";
import { types } from "../../redux/actions/types";
import { AddUser, formContainer } from "./registration.form.container";
import CircularProgress from "@mui/material/CircularProgress";
import Autocomplete from "@mui/material/Autocomplete";

const RegistrationForm = () => {
  const [beenSubmitted, setBeenSubmitted] = useState(false);
  const [form, setForm] = useState({});
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const container = formContainer(dispatch);
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;
  const ref0 = useRef();

  const getAddressesAsync = async (mess) => {
    const url = `https://autocomplete.search.hereapi.com/v1/autocomplete?q=${mess}&apiKey=${localStorage.getItem(
      "key"
    )}
    `;
    const url2 = `https://jsonplaceholder.typicode.com/todos`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setOptions(json.items.map((i) => change(i.title)));
        //setOptions(json.map((i) => change(i.title)));
      });
  };

  const handleInput = (event) => {
    const { target } = event;

    const value = target.type === "checkbox" ? target.checked : target.value;

    if (target.name == "phonenumber") {
      const onlyNums = value.replace(/[^0-9]/g, "");

      if (onlyNums.length < 11) {
        setForm((prevForm) => ({
          ...prevForm,
          [target.name]: onlyNums,
        }));
      }
      return;
    }
    if (target.name == "address") {
      (async () => {
        await getAddressesAsync(value);
      })();

      setForm((prevForm) => ({
        ...prevForm,
        [target.name]: value,
      }));
    }
    setForm((prevForm) => ({
      ...prevForm,
      [target.name]: value,
    }));
  };

  const change = (title) => {
    return { title: title };
  };

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    if (form.address) {
      (async () => {
        await getAddressesAsync(form.address);
      })();
    }

    setOptions([...countries]);
    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const zeroingvaliables = () => {
    setForm({});
    ref0.current.getElementsByTagName("button")[0].click();
  };

  const zeroingerrors = () => {
    setError({});
  };

  const validate = () => {
    const allErrors = {};
    zeroingerrors();
    if (!form.agreecheckbox) {
      allErrors.agreecheckbox = "The field is required!";
    }
    if (!form.sexselect) {
      allErrors.sexselect = "You have to choose you sex!";
    }
    if (!form.name) {
      allErrors.name = "Name can't be empty!";
    }
    if (!form.surname) {
      allErrors.surname = "Surname can't be empty!";
    }
    if (!form.phonenumber || form.phonenumber.length < 10) {
      allErrors.phonenumber =
        "Phonenumber can't be empty of less than ten symbols!";
    }
    if (!form.email || !form.email.includes(".") || !form.email.includes("@")) {
      allErrors.email = "The email isn't valid!";
    }
    if (!form.address) {
      allErrors.address = "Address can't be empty!";
    }

    setError(allErrors);
  };

  useEffect(() => {
    validate();
  }, [form]);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setBeenSubmitted(true);

    if (Object.keys(error).length === 0) {
      const user = {
        name: form.name,
        surname: form.surname,
        sex: form.sexselect,
        email: form.email,
        address: form.address,
      };
      container.AddUser(user);
      zeroingvaliables();
      setBeenSubmitted(false);
    }
  };

  const countries = [
    { title: "England" },
    { title: "UnitedKindom" },
    { title: "Afghanistan" },
    { title: "Albania" },
    { title: "Algeria" },
    { title: "Andorra" },
  ];

  return (
    <div className="registration-form center">
      <Typography variant="h4" component="div" className="text-field">
        Registration form
      </Typography>
      <form onSubmit={handleSubmit} noValidate>
        <TextField
          error={beenSubmitted ? error.name : null}
          helperText={beenSubmitted ? error.name : null}
          required
          name="name"
          value={form.name || ""}
          onChange={handleInput}
          label="Name"
          margin="normal"
          InputLabelProps={{
            className: "text-field",
          }}
          fullWidth={true}
        />
        <TextField
          error={beenSubmitted ? error.surname : null}
          helperText={beenSubmitted ? error.surname : null}
          required
          name="surname"
          value={form.surname || ""}
          onChange={handleInput}
          label="Surname"
          margin="normal"
          InputLabelProps={{
            className: "text-field",
          }}
          fullWidth={true}
        />
        <TextField
          error={beenSubmitted ? error.phonenumber : null}
          helperText={beenSubmitted ? error.phonenumber : null}
          required
          name="phonenumber"
          value={form.phonenumber || ""}
          onChange={handleInput}
          label="PhoneNumber"
          margin="normal"
          InputLabelProps={{
            className: "text-field",
          }}
          fullWidth={true}
        />
        <TextField
          error={beenSubmitted ? error.email : null}
          helperText={beenSubmitted ? error.email : null}
          required
          name="email"
          value={form.email || ""}
          onChange={handleInput}
          label="Email"
          margin="normal"
          InputLabelProps={{
            className: "text-field",
          }}
          fullWidth={true}
        />
        <FormControl
          InputLabelProps={{
            className: "text-field",
          }}
          className="text-field"
          sx={{ marginTop: 1 }}
          fullWidth={true}
          error={beenSubmitted ? error.sexselect : null}
        >
          <Select
            name="sexselect"
            value={form.sexselect || ""}
            displayEmpty
            onChange={handleInput}
            InputLabelProps={{
              className: "text-field",
            }}
          >
            <MenuItem className="text-field" value={""} disabled>
              <em>select the value</em>
            </MenuItem>
            <MenuItem className="text-field" value={"Male"}>
              Male
            </MenuItem>
            <MenuItem className="text-field" value={"Female"}>
              Female
            </MenuItem>
          </Select>
          <FormHelperText>
            {beenSubmitted ? error.sexselect : null}
          </FormHelperText>
        </FormControl>
        <Autocomplete
          key={""}
          ref={ref0}
          onChange={(e, v, r) => {
            setForm((prevForm) => ({
              ...prevForm,
              [ref0.current.getAttribute("name")]: v?.title,
            }));
          }}
          name="address"
          fullWidth={true}
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          isOptionEqualToValue={(option, value) => option.title === value.title}
          getOptionLabel={(option) => option.title}
          options={options}
          loading={loading}
          renderInput={(params) => (
            <TextField
              InputLabelProps={{
                className: "text-field",
              }}
              onChange={handleInput}
              error={beenSubmitted ? error.address : null}
              helperText={beenSubmitted ? error.address : null}
              required
              name="address"
              value={form.address || ""}
              label="Address"
              margin="normal"
              {...params}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )}
        />

        <FormControl
          error={beenSubmitted ? error.agreecheckbox : null}
          className="text-field"
        >
          <FormControlLabel
            control={
              <Checkbox
                name="agreecheckbox"
                color="success"
                checked={form.agreecheckbox || ""}
                onChange={handleInput}
                className="text-field"
              />
            }
            label="Do you agree with using your personal data?"
          />
          <FormHelperText>
            {beenSubmitted ? error.agreecheckbox : null}
          </FormHelperText>
        </FormControl>
        <Button
          name="registerbutton"
          fullWidth={true}
          InputLabelProps={{
            className: "text-field",
          }}
          type="submit"
        >
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegistrationForm;
