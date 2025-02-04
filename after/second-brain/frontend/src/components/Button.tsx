import { ReactElement } from "react";

type Variant = "primary" | "secondary";
interface ButtonPorps {
  variant: Variant;
  size: "sm" | "md" | "lg";
  onClick: () => void;
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
}

const variantStyles = new Map<Variant, string>();
variantStyles.set("primary", "bg-purple-600 text-white");
variantStyles.set("secondary", "bg-purple-400 text-purple-600");

const defaultSyles = "rounded-md flex";
const sizeStyles = {
  sm: "py-1 px-2",
  md: "py-2 px-4",
  lg: "py-4 px-6",
};
export const Button = (props: ButtonPorps) => {
  const { variant, size, onClick, text, startIcon, endIcon } = props;
  //   console.log(variantStyles.get(variant));

  return (
    <button
      className={`$ ${defaultSyles} ${variantStyles.get(variant)} ${
        sizeStyles[size]
      }`}
    >
      {startIcon ? <div className="pr-2">{startIcon}</div> : null} {text}{" "}
      {endIcon}
    </button>
  );
};
