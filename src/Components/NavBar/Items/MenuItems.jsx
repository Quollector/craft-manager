import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export default function MenuItem({itemData}) {
  return (
    <li>
        <Link to={itemData.to}>
            <span className="bebas">{itemData.content}</span>
            <Icon icon="ant-design:caret-right-filled" />
        </Link>
    </li>
  )
}