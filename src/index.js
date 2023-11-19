import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

export const TEST_MUTATION = gql`
  mutation TestMutation($name: String!) {
    testing(name: $name) {
      id
      name
    }
  }
`;

function App() {
  const [status, setStatus] = useState("idle");
  const [mutate] = useMutation(TEST_MUTATION);

  const handleRequest = () => {
    setStatus("loading");

    mutate({
      variables: { name: "Test Name" },
      onError: () => setStatus("error"),
    });
  };

  return (
    <button onClick={handleRequest} disabled={status === "loading"}>
      Click Me!
    </button>
  );
}

export default App;
