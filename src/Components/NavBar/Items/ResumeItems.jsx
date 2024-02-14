import { Icon } from '@iconify/react';

export default function ResumeItem({itemData}) {
  return (
    <li>
        <span className="bebas">{itemData.content}</span>
        <img src={itemData.icon} />
    </li>
  )
}