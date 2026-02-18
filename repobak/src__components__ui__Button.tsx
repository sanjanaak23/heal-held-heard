// components/ui/Button.tsx
interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className = '' }: ButtonProps) {
  return (
    <button
      className={`
        group relative
        bg-primary text-white
        px-8 py-4 md:px-10 md:py-5
        rounded-xl text-lg md:text-xl font-medium
        shadow-lg hover:shadow-2xl
        transition-all duration-300 ease-out
        hover:scale-105
        hover:bg-white hover:text-primary
        border-2 border-transparent hover:border-primary
        animate-breathe
        overflow-hidden
        ${className}
      `}
    >
      <span className="relative inline-block">
        {children}
        <span
          className="
            absolute bottom-0 left-1/2 w-0 h-0.5 bg-current
            transition-all duration-300 ease-out
            group-hover:w-full group-hover:left-0
          "
        />
      </span>
    </button>
  );
}