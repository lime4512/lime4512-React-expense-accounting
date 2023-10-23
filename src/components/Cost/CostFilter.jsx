import './CostFilter.css'
const CostFilter = props => {
	const filterChangeHandler = event => {
		props.onFilterYear(event.target.value)
	}

	return (
		<div className='cost-filter'>
			<h2>Фильтр по году</h2>
			<select
				value={props.year}
				className='cost-filter__select'
				onChange={filterChangeHandler}
			>
				<option value='2020'>2020</option>
				<option value='2021'>2021</option>
				<option value='2022'>2022</option>
				<option value='2019'>2019</option>
			</select>
		</div>
	)
}

export default CostFilter
