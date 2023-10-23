import CostDate from './CostDate'
import './CostItem.css'

const CostItem = props => {
	return (
		<div className='cost-item'>
			<div className='cost-date'>
				<CostDate date={props.date} />
			</div>
			<h2>{props.title}</h2>
			<div className='cost-prise'>
				<h2>{props.price} Р</h2>
			</div>
		</div>
	)
}

export default CostItem
