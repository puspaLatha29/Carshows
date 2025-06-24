import React from 'react'
import Carousel  from './Carousel'
const Home = () => {
  return (
    <div className="conatiner bg-light">
      <div className="row p-5">
    
        <div className="col-lg-6 Homeone ">
<h3>Old Musuem</h3>
<p>t now contains more than 700 cars, including almost 200 racing cars. We regularly participate in national and international historic racing events and classic car rallies with many of the cars in our collection. Our museum exhibits therefore fulfil the purpose for which they were once built, in that they are driven.</p>
<button className="btn btn-danger w-20"> know More</button>
        </div>
        <div className="col-lg-6 Homeone ">
<h3>New Musuem</h3>
<p>t now contains more than 700 cars, including almost 200 racing cars. We regularly participate in national and international historic racing events and classic car rallies with many of the cars in our collection. Our museum exhibits therefore fulfil the purpose for which they were once built, in that they are driven.</p>
<button className="btn btn-primary w-20"> know More</button>
        </div>
           
      </div>
      <section>
<Carousel/>
      </section>
    </div>
  )
}

export default Home
