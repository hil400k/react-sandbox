import styles from './Home.module.scss';
const Home = () => {

  const list = [
    { id: 1, name: 'Dimon' },
    { id: 2, name: 'Cezar' },
    { id: 3, name: 'Brut' },
  ];

  return (
    <>
      <div className={styles.title}>Home page</div>
      <ul className={styles.list}>
        {
          list.map((i) => (<li key={i.id}>{i.name}</li>))
        }
      </ul>
    </>
  );
}

export default Home;
