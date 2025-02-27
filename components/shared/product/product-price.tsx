import { cn } from "@/lib/utils";

const ProductPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  const stringValue = value.toFixed(2);

  const [intValue, floatValue] = stringValue.split(".");

  return (
    <p className={cn("flex items-baseline", className)}>
      {" "}
      <span className="text-lg sm:text-2xl align-baseline mr-1">$</span>{" "}
      <span className="text-lg sm:text-2xl align-baseline">{intValue}</span>{" "}
      <span className="text-xs sm:text-2xl align-baseline">.{floatValue}</span>{" "}
    </p>
  );
};

export default ProductPrice;
