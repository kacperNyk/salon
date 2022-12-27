import './scss/index.scss';


const Landing = (props) => {
  return <div className='Landing' style={{background: `linear-gradient(rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.80)), url(${props.image})`}}>
    <h1 className='landing-header'>{props.header}</h1>
    <p className='landing-description'>{props.description}</p>
    <button className='landing-btn'>{props.btn}</button>
  </div>
}

export default Landing;
