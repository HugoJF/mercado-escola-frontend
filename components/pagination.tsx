import {NextPage} from "next";
import {ChevronLeft, ChevronRight} from "react-feather";
import clsx from "clsx";

type ContainerProps = {
    selected?: boolean
}
const Container: NextPage<ContainerProps> = ({selected = false, children}) => (
    <div className={clsx('duration-150 flex items-center justify-center h-12 w-12 rounded cursor-pointer', {
        'border border-gray-300 bg-white hover:bg-gray-50': !selected,
        'bg-gray-700 hover:bg-gray-800 text-white font-medium': selected,
    })}>
        {children}
    </div>
)

// TODO: missing lots of stuff
type Props = {}
export const Pagination: NextPage<Props> = () => {
    return <div className="flex space-x-4">
        <Container><ChevronLeft/></Container>
        <Container>1</Container>
        <Container selected>2</Container>
        <Container>3</Container>
        <Container>4</Container>
        <Container><ChevronRight/></Container>
    </div>;
};
