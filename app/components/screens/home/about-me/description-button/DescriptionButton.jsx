import cn from 'classnames'
import parse from 'html-react-parser'

import { useOutside } from '../../../../../hooks/useOutside'

import styles from './DescriptionButton.module.scss'

const DescriptionButton = ({ description }) => {
	const { isShow, setIsShow, ref } = useOutside(false)

	return (
		<div className={styles.parent} ref={ref}>
			<button
				onClick={() => setIsShow(!isShow)}
				className={cn({
					[styles.active]: isShow
				})}
			>
				<span>Обо мне</span>
			</button>
			{isShow && <article>{parse(description)}</article>}
		</div>
	)
}

export default DescriptionButton
