import { Center, Button } from "@prismane/core";

function App() {
  return (
    <Center w="100vw" h="100vh" direction="column" gap={8}>
      <Button>Primary Button</Button>
      <Button variant="secondary" color="base">
        Secondary Button
      </Button>
    </Center>
  );
}

export default App;
