const CostDate=(props)=> {
	const month = props.date.toLocaleString('ru-RU', { month: 'long' })
	const year = props.date.toLocaleString('ru-RU', { year: 'numeric' })
	const day = props.date.toLocaleString('ru-RU', { day: '2-digit' })
	return (
		<div>
			<h2>{month}</h2>
			<h2>{year}</h2>
			<h2>{day}</h2>
		</div>
	)
}

export default CostDate
