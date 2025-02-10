interface InputInterface {
  placeholder: string;
  reference: any;
}
export function Input({ placeholder, reference }: InputInterface) {
  return (
    <input
      className="border-2 p-2 m-2 rounded-sm"
      placeholder={placeholder}
      ref={reference}
    ></input>
  );
}
