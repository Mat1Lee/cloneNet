
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import '../Card/Card.css'
import { useNavigate,Nav } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
function CardFlim({item}) {
  const navigate = useNavigate()
  return (
    <Card style={{ width: '16rem',background:'none',border:'none',position:'relative' }}>
        
      <LazyLoadImage onClick={()=> navigate(`/movies/${encodeURIComponent((item?.title||item?.name).toLowerCase()).replace(/%20/g, '-') || ""}/${item.id}`)} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} loading='lazy' aalt={item.original_title} />
      
      <Card.Text>
         {item.title||item.name}
        </Card.Text>
    </Card>
  );
}

export default CardFlim;