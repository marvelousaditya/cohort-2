type variantType = Record<"primary" | "secondary", string>;
const variantStyles: variantType = {
  primary: "font-bold text-lg",
  secondary: "font-sm text-sm",
};
interface DisplayInterface {
  type: "primary" | "secondary";
  text: string;
}
export function Display({ type, text }: DisplayInterface) {
  return <div className={`${variantStyles[type]}`}>{text}</div>;
}
