interface ButtonInterface {
  text: string;
  onClick: () => void;
}

export function Button({ text, onClick }: ButtonInterface) {
  return (
    <button
      className="border-2 p-2 m-2 rounded-sm bg-green-600"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
