import './NewCost.css'
import FormCost from './FormCost'
import { useState } from 'react'

const NewCost = props => {
	const saveCostDateHandler = inputCostDate => {
		const CostDate = {
			...inputCostDate,
			id: Math.random().toString(),
		}
		props.onCostDateHandler(CostDate)
	}

	const [visualForm, setVisualForm] = useState(false)

	const inputVisualForm = () => {
		setVisualForm(true)
	}

	const cancelVisualForm = () => {
		setVisualForm(false)
	}

	return (
		<div className='new-cost'>
			{visualForm === false ? (
				<button className='form-cost__btn' onClick={inputVisualForm}>
					Добавить новый расход
				</button>
			) : (
				<FormCost
					onSaveCostDate={saveCostDateHandler}
					onCancel={cancelVisualForm}
				/>
			)}
		</div>
	)
}
export default NewCost
