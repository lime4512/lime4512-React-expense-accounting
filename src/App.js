import { useState } from 'react'
import Cost from './components/Cost/Cost'
import NewCost from './components/NewCost/NewCost'
const BASE_COST = [
	{ id: '1', date: new Date(2020, 11, 12), title: 'meet', price: 200 },
	{ id: '2', date: new Date(2022, 4, 11), title: 'book', price: 123 },
	{ id: '3', date: new Date(2021, 7, 9), title: 'PC', price: 200000 },
]

const App = () => {
	const [cost, setCost] = useState(BASE_COST)

	const costDateHandler = cost => {
		setCost(prCost => {
			return [cost, ...prCost]
		})
	}
	return (
		<div>
			<NewCost onCostDateHandler={costDateHandler} />
			<Cost costs={cost} />
		</div>
	)
}

export default App
