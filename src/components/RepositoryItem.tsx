interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    },
    key: string;
}

export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <li key={props.key}>
            <strong>{props.repository?.name}</strong>
            <p>{props.repository.description}</p>
            <a href={props.repository.html_url}>Acessar repositório</a>
        </li>
    )
}