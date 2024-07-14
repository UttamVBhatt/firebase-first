import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFireBase } from "../contexts/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signInWithGoogle, isLoggedIn } = useFireBase();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signInWithGoogle();
  };

  useEffect(() => {
    isLoggedIn && navigate("/");
  }, [isLoggedIn, navigate]);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3 mt-5" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>

      <h1 className="mt-3 mb-3">OR</h1>

      <Button className="mt-3" variant="danger" type="submit">
        Login with Google
      </Button>
    </Form>
  );
};

export default Login;
