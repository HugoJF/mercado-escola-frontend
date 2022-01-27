import {FC} from "react";
import {ListItem} from "../list-item";
import {Icon, MapPin, MoreVertical} from "react-feather";
import {ListItemGroup} from "../list-item-group";
import {AddressType} from "../../types/addresses";

type Props = {
    addresses: AddressType[];
    onClick: (address: AddressType) => void;
    leftIcon?: Icon | null;
    rightIcon?: Icon | null;
}

export const AddressList: FC<Props> = ({addresses, onClick, leftIcon = MapPin, rightIcon}) => {
    return <ListItemGroup>
        {addresses.map(address => (
            <ListItem
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                title={address.address}
                description={[address.number, address.complement].filter(Boolean).join(', ')}
                onClick={() => onClick(address)}
            />
        ))}
    </ListItemGroup>
}
