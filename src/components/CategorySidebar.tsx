interface Props {
  categories: string[]
  selectedCategory?: string
  onSelectCategory: (category: string | null) => void
}

export const CategorySidebar = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: Props) => {
  return (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="font-bold text-lg mb-4">Categorie</h2>
      <ul className="space-y-2">
        <li>
          <button
            className={`block w-full text-left ${
              !selectedCategory ? 'font-semibold text-blue-600' : ''
            }`}
            onClick={() => onSelectCategory(null)}
          >
            Tutti i prodotti
          </button>
        </li>
        {categories.map((cat) => (
          <li key={cat}>
            <button
              className={`block w-full text-left capitalize ${
                selectedCategory === cat ? 'font-semibold text-blue-600' : ''
              }`}
              onClick={() => onSelectCategory(cat)}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
