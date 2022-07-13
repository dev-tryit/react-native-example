import FirstPage from './src/FirstPage';
import React from 'react';
import StatusbarPage from './src/StatusbarPage';
import AlertPage from './src/AlertPage';
import ModalPage from './src/ModalPage';

function sample(texts: any, ...fns:any) {
  console.log(`texts : ${texts}`);
  console.log(`fns : ${fns}`);
  
  const mockProps = {
    title: '안녕하세요',
    body: '내용은 내용내용 입니다.'
  };
  return texts.reduce((result: any, text: any, i: any) => `${result}${text}${fns[i] ? fns[i](mockProps) : ''}`, '');
}

const App = () => {
  sample`
    제목: ${(props: any) => props.title}
    내용: ${(props: any) => props.body}
  `

  return (
    <ModalPage></ModalPage>
  );
};

export default App;
