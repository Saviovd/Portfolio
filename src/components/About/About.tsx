interface iad {
   id: string
}

const About = ({id}: iad) => {
   return (
      <div id={id} style={{height: '100vh', width: '100%', backgroundColor: 'red', borderTop: '2px solid blue'}}></div>
   )
}

export default About;
