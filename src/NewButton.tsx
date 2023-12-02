import { Button, ButtonProps } from "@prismane/core";

const NewButton = ({ children, ...props }: ButtonProps) => {
  return (
    <Button
      px={18}
      py={12}
      br={0}
      bg={["#40e495", { hover: "#2bb673" }]}
      {...props}
    >
      {children}
    </Button>
  );
};

export default NewButton;
