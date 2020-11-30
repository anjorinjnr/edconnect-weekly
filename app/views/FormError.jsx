import { Alert } from "react-bootstrap";

export default ({ error }) => {
  return error && error.length > 0 ? (
    <Alert variant="danger">
      {error.map((e) => (
        <p key={e}>{e}</p>
      ))}
    </Alert>
  ) : null;
};

