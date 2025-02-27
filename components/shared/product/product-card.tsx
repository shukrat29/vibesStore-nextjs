import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import ProductPrice from "./product-price";
import { Product } from "@/types";
import Rating from "./rating";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-0 items-center">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            height={200} // Reduced height
            width={200} // Reduced width
            priority={true}
            className="object-contain"
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 grid gap-2">
        <div className="text-sm">{product.brand}</div>
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-sm sm:text-base font-medium line-clamp-2 break-words">
            {product.name}
          </h2>
        </Link>
        <div className="flex items-center gap-1 text-xs sm:text-sm">
          <Rating value={Number(product.rating)} />
          {product.stock > 0 ? (
            <ProductPrice value={Number(product.price)} />
          ) : (
            <p className="text-destructive">Out of stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
