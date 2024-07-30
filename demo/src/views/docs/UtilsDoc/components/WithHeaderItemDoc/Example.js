import React from 'react'
import classNames from 'classnames'
import withHeaderItem from 'utils/hoc/withHeaderItem'
import { Dropdown } from 'components/ui'
import { HiOutlineSearch } from 'react-icons/hi'

const Example = ({className}) => {
	return (
		<Dropdown renderTitle={<HiOutlineSearch className={classNames(className, 'text-4xl') } />}>
			<Dropdown.Item eventKey="a">Item A</Dropdown.Item>
			<Dropdown.Item eventKey="b">Item B</Dropdown.Item>
			<Dropdown.Item eventKey="c">Item C</Dropdown.Item>
			<Dropdown.Item eventKey="d">Item D</Dropdown.Item>
		</Dropdown>
	)
}

export default withHeaderItem(Example)