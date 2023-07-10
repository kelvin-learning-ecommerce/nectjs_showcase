interface GameListProps{

}

const GameList: React.FC<GameListProps> =({}) => {
  const { data: gameData = [] } = usePosts(userId);

  return <div>

  </div>
}