import './Cost.css'
import ConstFilter from './CostFilter'
import { useState } from 'react'
import CostList from './CostList'

const Cost = props => {
	const [selYear, setSelYear] = useState('2021')
	const filterYear = year => {
		setSelYear(year)
	}

	const filterCosts = props.costs.filter(cost => {
		return cost.date.getFullYear().toString() === selYear
	})

	return (
		<div className='costs'>
			<ConstFilter onFilterYear={filterYear} year={selYear} />
			<CostList filterCost={filterCosts}/>
		</div>
	)
}

export default Cost
