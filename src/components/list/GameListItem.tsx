interface PostItemProps {
  data: Record<string, any>;
}

const GameListItem: React.FC<PostItemProps> = ({ data }) => {
  return <>{data.user.name}</>;
};

export default GameListItem