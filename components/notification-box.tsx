import {useToasts} from "@helpers/selectors";
import {Notification} from "@components/notification";

export const NotificationBox = () => {
    const toasts = useToasts();

    return <div>
        {Object.entries(toasts).map(([id, toast]) => (
            <Notification
                key={id}
                id={id}
                title={toast.title}
                description={toast.description}
                duration={toast.duration}
                type={toast.type}
            />
        ))}
    </div>
}
