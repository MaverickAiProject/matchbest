
export default function LayoutProvider({ children, className }) {
    return (
        <div className={`max-w-[1400px] w-full mx-auto px-4 ${className || ''}`}>
            {children}
        </div>
    )
}