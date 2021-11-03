import { CornerDownLeft } from "react-feather";

interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li className="repository-item">
      <div>
        <p className="repository-name">{props.repository.name ?? "Default"}</p>
        <CornerDownLeft
          className="repository-url"
          onClick={() => (window.location.href = props.repository.html_url)}
        />
      </div>
      <p className="repository-description">{props.repository.description}</p>
    </li>
  );
}
