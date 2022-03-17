type ButtonProps = {
  // texto é optativo, por isso tem interrogaçao
  text ?: string[];
  //string[] é array de string
  // Array<string> é array de string
}
// para receber todas as propriedades (text é uma propriedade) do botão coloca dentro do entreparentes
//props é um objeto que tem ButtonProps como o tipo desse objeto é  ButtonProps
export function Button(props: ButtonProps) {
  return (
    // caso a propriedade text nao exista esta adicionando o default
    <button>{props.text || 'defaul' }</button>
  )
}

export default Button



// import { useState } from "react";

// export function Button() {
//   const [counter, setCounter] = useState(0)

//   function increment() {
//     setCounter(counter + 1);
//     console.log(counter);

//     return (
//       <button onClick={increment}>
//         {counter}
//       </button>
//     )
//   }
// }