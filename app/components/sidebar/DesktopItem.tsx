'use client';

import Link from 'next/link'
import clsx from 'clsx'

interface DesktopItemsProps {
    label: string;
    icon: any;
    href: string;
    onClick?: () => void;
    active?: boolean;
}

const DesktopItem: React.FC<DesktopItemsProps> = ({
    label,
    icon: Icon, 
    href, 
    onClick,
    active
}) => {
    const handleClick = () => {
        if ( onClick ) {
            return onClick();
        }
    }

    return (
        <li onClick={handleClick}>
            <Link href={href} className={clsx(`
                gruop
                flex
                gap-x-3
                rounded-md
                p-3
                text-sm
                leading-6
                font-semibold
                text-gray-500
                hover:bg-gray-100
            `,
            active && "bg-gray-100 text-black"
            )}>
                <Icon className="h-6 w-6 shrink-0" />
                <span className="sr-only">{label}</span>
            </Link>
        </li>

    )
}

export default DesktopItem;