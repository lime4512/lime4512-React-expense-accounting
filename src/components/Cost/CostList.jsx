import CostItem from './CostItem'

const CostList = props => {
	if (props.filterCost.length === 0) {
		return <h1>На выбранный год записей нет</h1>
	}
	return (
		<div>
			{props.filterCost.map(cost => (
				<CostItem
					key={cost.id}
					date={cost.date}
					title={cost.title}
					price={cost.price}
				/>
			))}
		</div>
	)
}

export default CostList
