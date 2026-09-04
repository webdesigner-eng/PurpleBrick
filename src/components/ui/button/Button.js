import clsx from 'clsx';

const Button = ({
    children,
    variant = "primary",
    size = "md",
    className,
    ...props
}) => {
    const baseStyles = "rounded font-medium transition-all duration-300 m-5";
    const variants = {
        primary: "bg-black text-white hover:opacity-80",
        secondary: "bg-gray-900 text-white border-2 border-black hover:bg-transparent hover:text-black",
        outline: "border border-black text-black",
    };
    const sizes = {
        sm : "px-3 py-2 text-sm",
        md : "px-4 py-2 text-base",
        lg : "px-5 py-3 text-lg "
    };
    return (
        <button className = {clsx(baseStyles, variants[variant], sizes[size], className)} {...props}>
            {children}
        </button>
    );
};

export default Button;