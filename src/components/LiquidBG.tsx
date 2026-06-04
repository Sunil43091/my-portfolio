```tsx id="lb7x2m"
export default function LiquidBG() {
  return (
    <div
      className="
      fixed inset-0 z-0
      overflow-hidden
      pointer-events-none
      "
      aria-hidden="true"
    >
      {/* Base Background */}

      <div className="absolute inset-0 bg-black" />

      {/* Gradient Effects */}

      <div
        className="
        absolute inset-0 opacity-30
        bg-[radial-gradient(circle_at_30%_20%,#ffffff12,transparent_40%),
        radial-gradient(circle_at_70%_60%,#ffffff12,transparent_40%)]
        "
      />

      {/* Decorative Liquid */}

      <img
        src="/liquid.svg"
        alt=""
        draggable={false}
        aria-hidden="true"
        className="
        absolute inset-0
        h-full w-full
        object-cover
        opacity-40
        select-none
        "
      />
    </div>
  );
}
```
