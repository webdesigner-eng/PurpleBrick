import clsx from 'clsx';
import Link from 'next/link';

const Linkbtn = ({
    children,
    variant = "primary",
    size = "md",
    className,
    ...props
}) => {
    const baseStyles = "rounded-3xl font-medium transition-all duration-300";
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
        <Link className = {clsx(baseStyles, variants[variant], sizes[size], className)} {...props}>
            {children}
        </Link>
    );
};

export default Linkbtn;