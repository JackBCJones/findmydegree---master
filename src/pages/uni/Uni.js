import {Link, useParams } from 'react-router-dom';
import { unis } from '../../unidata';

const Uni = () => {

    const { uniId } = useParams();

    const uni = unis.find((uni)=> uni.url === uniId);
    
    const {title, img} = uni;

    console.log(uni);
    console.log(uniId);


  return (
    <section>
        <h4>{uniId}</h4>
        <img src={img} alt={title} />
        <h2>{uniId}</h2>
        <Link to='/'>back home</Link>
    </section>
  );
};

export default Uni