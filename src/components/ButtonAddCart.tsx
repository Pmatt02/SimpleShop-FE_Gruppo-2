
type ButtonAddCartProps = {
  onClick: () => void;
};

export const ButtonAddCart = ({ onClick }: ButtonAddCartProps) => {
  return <button
      onClick={onClick}
      type="button"
      className="block w-full rounded-sm bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105"
    >
      Add to Cart
    </button>
};