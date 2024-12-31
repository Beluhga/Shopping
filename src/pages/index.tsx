import { styled } from "./styles";

const Button = styled('button', {
 backgroundColor: 'green',
 borderRadius: 4,
 border: 0,
 padding: '4px 8px',

 span: {
  fontWeight: 'bold',
 },

  // & == indica o proprio botão, nesse caso o Button
  '&:hover': {
    filter: 'brightness(0.8)'
  }
})

export default function Home() {
  return (
    <Button>
      <span>Teste</span>
      Whereas disregard and contempt for human rights have resulted
    </Button>
  );
}
