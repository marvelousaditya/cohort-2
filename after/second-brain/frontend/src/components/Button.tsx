import { ReactElement } from "react";

type Variant = "primary" | "secondary";
interface ButtonPorps {
  variant: Variant;
  size: "sm" | "md" | "lg";
  onClick?: () => void;
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  fullWidth?: boolean;
  loading?: booleans;
}

const variantStyles = new Map<Variant, string>();
variantStyles.set("primary", "bg-purple-600 text-white");
variantStyles.set("secondary", "bg-purple-200 text-purple-600");

const defaultSyles = "rounded-md font-light flex items-center";
const sizeStyles = {
  sm: "py-1 px-2 text-sm rounded-sm",
  md: "py-2 px-4 text-md rounded-md",
  lg: "py-4 px-6 text-xl rounded-xl",
};
export const Button = (props: ButtonPorps) => {
  const {
    variant,
    size,
    onClick,
    text,
    startIcon,
    endIcon,
    fullWidth,
    loading,
  } = props;
  //   console.log(variantStyles.get(variant));

  return (
    <button
      className={`$ ${defaultSyles} ${variantStyles.get(variant)} ${
        sizeStyles[size]
      } ${fullWidth ? " w-full flex justify-center" : ""} ${
        loading ? " opacity-45" : ""
      }`}
      onClick={onClick}
    >
      {startIcon ? <div className="pr-2">{startIcon}</div> : null} {text}{" "}
      {endIcon ? <div className="pl-2">{endIcon}</div> : null}
    </button>
  );
};
