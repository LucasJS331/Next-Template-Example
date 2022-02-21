import style from 'styled-components';
import img from './img/clone.gif';

const Container = style.div`
  width: 100%;
  height: 100vh;
  background: rgba(76,229,221,255);
  text-align: center;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1{
    letter-spacing: 4px;
    font-size: 5rem;
  }
  img{
    width: 350px;
    height: 350px;
    border-radius: 5px;
  }
`;
export default function Clone() {
  return (
    <Container>
      <h1>Projeto Clone</h1>
      <img alt="clone" src={img} />
    </Container>
  );
}
