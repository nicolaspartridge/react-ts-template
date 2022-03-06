import './styles.css'
import Logo from './react-logo.png'

export const App = () => {
  const name = 'Nicolas'

  return (
    <>
      <h1>React Typescript Webpack Starter Template - {name} </h1>
      <img src={Logo} alt="React Starter" width="300" height="200" />
    </>
  )
}
