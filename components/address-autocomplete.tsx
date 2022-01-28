import {FC, useState} from "react";
import {MapPin} from "react-feather";
import PlacesAutocomplete from "react-places-autocomplete";
import {Input} from "./input";
import {ListItemGroup} from "./list-item-group";
import {ListItem} from "./list-item";

type Props = {
    onSelect: (address: string) => void;
}

const fixOnBlur = (refObj: any) => {
    // Avoid clearing suggestions when input loses focus
    // ---
    // https://github.com/hibiken/react-places-autocomplete/issues/260
    // @ts-ignore
    refObj?.clearSuggestions = () => {
    };
    // @ts-ignore
    refObj?.handleInputOnBlur = () => {
    };
};

export const AddressAutocomplete: FC<Props> = ({onSelect}) => {
    const [input, setInput] = useState('');

    return <PlacesAutocomplete
        value={input}
        onChange={input => setInput(input)}
        onSelect={onSelect}
        ref={fixOnBlur}
    >
        {({suggestions, getInputProps, getSuggestionItemProps}) => (
            <div className="space-y-6">
                <Input
                    placeholder="Digite seu endereço"
                    {...getInputProps()}
                />

                {suggestions.length > 0 && <ListItemGroup>
                    {suggestions.map(suggestion => (
                        <ListItem
                            /* @ts-ignore */
                            key={suggestion.description}
                            /* @ts-ignore */
                            title={suggestion.description}
                            leftIcon={MapPin}
                            {...getSuggestionItemProps(suggestion)}
                        />
                    ))}
                </ListItemGroup>}
            </div>
        )}
    </PlacesAutocomplete>
}
