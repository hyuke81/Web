import './SkeletonCard.css';

const SkeletonCard = () => {
    return (
        <div className="skeleton-card">
            <div className="skeleton-image"></div>
            <div className="skeleton-text skeleton-title"></div>
            <div className="skeleton-text skeleton-date"></div>
        </div>
    );
};

export default SkeletonCard;
