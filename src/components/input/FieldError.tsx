interface FieldErrorProps {
    error?: any | null;
}

export const FieldError: React.FC<FieldErrorProps> = ({ error }) => {
    if (error) {
        return (
            <span className="text-sm text-red-500">{error}</span>
        )
    }
    return false;
}