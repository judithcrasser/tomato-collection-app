import CardList from '../cardList/CardList';
import useHook from '../useHook/useHook';


function Home() {

    const { data: items, isLoading, error } = useHook('http://localhost:8000/items');

    return (

    <div className="main">
        {isLoading && <div>Loading...</div>}
        {items && <CardList items={items} />}
        {error && <div>{error}</div>}
    </div>

  )
}

export default Home;
