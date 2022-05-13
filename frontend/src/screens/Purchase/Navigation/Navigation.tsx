import { Stepper} from 'react-form-stepper';

const Navigation = () => {
	return (
		<Stepper steps={[{ label: 'Выбор места' }, { label: 'Заполнение данных' }, { label: 'Оформление заказа' }]} activeStep={2} 
			nonLinear={true}
			hideConnectors={true}
			// connectorStyleConfig={}
		/>
	)
}

export default Navigation