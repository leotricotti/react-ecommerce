import * as React from "react";
import { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useLogin from "../hooks/useLogin";
import Spinner from "../components/Spinner";
import SocialNetworkAuth from "../components/SocialNetworkAuth";
import DividerText from "../components/DividerText";
import useGitHubAuth from "../hooks/useGitHubAuth";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://www.leonardotricotti.com.ar/">
        Leonardo Tricotti
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme({
  palette: {
    background: {
      default: "#eee",
    },
  },
});

export default function SignIn() {
  const [isLoading, postLogin] = useLogin();
  const { gitHubData } = useGitHubAuth();

  useEffect(() => {
    document.title = "E-Store | Iniciar sesión";
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userName = event.target.email.value;
    const password = event.target.password.value;
    postLogin(userName, password);
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Inicia sesión con...
          </Typography>
          <Grid container justifyContent={"center"}>
            <Grid item>
              <SocialNetworkAuth
                className={"fab fa-github fa-button"}
                onClick={gitHubData}
              />
            </Grid>
            <Grid item>
              <SocialNetworkAuth className={"fab fa-google fa-button"} />
            </Grid>
          </Grid>
          <DividerText />
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo electrónico"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recuerdame"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Inicia sesión
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/forgot" variant="body2">
                  Olvidaste tu contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"No tienes una cuenta? Registrate"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
