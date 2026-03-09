import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBehance } from "@fortawesome/free-brands-svg-icons";

interface BehanceProps {
    className?: string;
}

const Behance = ({ className }: BehanceProps) => {
    return (
        <FontAwesomeIcon
            icon={faBehance}
            className={className}
        />
    );
};

export default Behance;
