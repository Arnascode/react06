import Icon from '../UI/icon';

export default function Card({ icon, title, summary }) {
  return (
    <div className='serviceCard'>
      <div className='iconInf'>
        <Icon icon={icon} />
      </div>
      <div className='text'>
        <h3>{title}</h3>
        <p className='servP'>{summary}</p>
        <a href='###'>Learn more</a>
      </div>
    </div>
  );
}
