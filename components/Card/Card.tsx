import Image from 'next/image';
import { IPost } from '../../interfaces/IPost';
import styles from '../../styles/Card.module.css';

const Card: React.FC<{ post: IPost }> = ({ post }) => {
  return (
    <div className={styles.card}>
      <Image src={post.image} alt='' width='240' height='160' />
      <h2 className={styles.card__title}>{post.id} {post.title}</h2>
      <p className={styles.card__description}>{post.description}</p>
    </div>
  )
}

export default Card