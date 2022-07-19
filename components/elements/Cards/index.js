import PropTypes from 'prop-types';
import styles from './cards.module.css';

export default function Cards(props) {
    const { value, color } = props; 

    return (
        <div className={`flex flex-col w-full h-48 ${color} shadow-xl rounded-md relative overflow-auto lg:w-1/3`}>
            <div className="p-4 break-all absolute">
                <h1 className="text-7xl font-semibold">{value}</h1>
            </div>
            <div className={styles['bg-card']}>
            </div>
        </div>
    )
}

Cards.defaultProps = {
    value: '0',
    color: 'bg-cyan-100'
};

Cards.propTypes = {
    value: PropTypes.string.isRequired,
    color: PropTypes.string
};