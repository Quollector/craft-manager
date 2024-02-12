import { Icon } from '@iconify/react';

export default function MenuItem({itemData}) {
  return (
    <li>
        <div>
            <span className="bebas">{itemData.content}</span>
            <Icon icon="ant-design:caret-right-filled" />
        </div>
    </li>
  )
}