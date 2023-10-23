import { useState } from 'react'
import('./FormCost.css')

const FormCost = props => {
	const [title, setTitle] = useState('')
	const titleChangeHandler = event => {
		setTitle(event.target.value)
	}

	const [price, setPrice] = useState('')
	const priceChangeHandler = event => {
		setPrice(event.target.value)
	}

	const [date, setDate] = useState('')
	const dateChangeHandler = event => {
		setDate(event.target.value)
	}

	const submitHandler = event => {
		event.preventDefault()

		const costDate = {
			title: title,
			price: Number(price),
			date: new Date(date),
		}
		props.onSaveCostDate(costDate)
		setDate('')
		setPrice('')
		setTitle('')
	}

	return (
		<form className='form-cost' onSubmit={submitHandler}>
			<div className='form-cost-text'>
				<h3 className='form-cost__title'>Название</h3>
				<input
					type='text'
					className='form-cost__inp'
					onChange={titleChangeHandler}
					value={title}
				/>
			</div>
			<div className='form-cost-text'>
				<h3 className='form-cost__title'>Цена</h3>
				<input
					type='number'
					className='form-cost__inp'
					onChange={priceChangeHandler}
					value={price}
				/>
			</div>
			<div className='form-cost-text'>
				<h3 className='form-cost__title'>Дата</h3>
				<input
					type='date'
					className='form-cost__inp date'
					onChange={dateChangeHandler}
					value={date}
				/>
			</div>
			<div className='form-cost-text block-btn'>
				<button type='submit' className='form-cost__btn'>
					Добавить
				</button>
				<button
					type='button'
					className='form-cost__btn'
					onClick={props.onCancel}
				>
					Отмена
				</button>
			</div>
		</form>
	)
}

export default FormCost
