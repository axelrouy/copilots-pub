type ProductIconProps = {
  icon: string;
  label?: string;
  size?: number;
  className?: string;
};

export default function ProductIcon({
  icon,
  label,
  size = 32,
  className = "",
}: ProductIconProps) {
  if (icon.startsWith("/")) {
    return (
      <img
        src={icon}
        alt={label ?? ""}
        width={size}
        height={size}
        style={{ width: size, height: size }}
        className={`inline-block object-contain align-middle ${className}`}
      />
    );
  }
  return <span className={className}>{icon}</span>;
}
