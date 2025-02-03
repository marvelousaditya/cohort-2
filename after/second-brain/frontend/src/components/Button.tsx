interface ButtonPorps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  onClick: () => void;
  text: string;
  startIcon?: any;
  endIcon?: any;
}

export const Button = (props: ButtonPorps) => {
  return (
    <div>
      <button>{props.text}</button>
    </div>
  );
};
