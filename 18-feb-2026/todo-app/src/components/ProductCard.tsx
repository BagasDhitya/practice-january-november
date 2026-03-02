const ProductCard = ({ product }: any) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800">
      <div className="relative aspect-square bg-slate-100 dark:bg-slate-800">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg">{product.name}</h3>
          <span className="font-bold text-primary">{product.price}</span>
        </div>

        <p className="text-sm text-slate-500 line-clamp-2">
          {product.description}
        </p>

        <button className="mt-2 w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-bold transition active:scale-95">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard