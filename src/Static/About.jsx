import React from 'react';

const About = () => {
  return (
    <div className="about">
      <h2>Fractals are for lovers.</h2>
      <h4>What are Fractals?</h4>
      <p className="about-paragraph">
      I'm glad you asked! Fractals are complex geometric patterns that are defined by self-similarity. In other words, their inner components resemble the whole shape. Due to their recursive nature, they can, essentially, continue indefinitely when magnified. This scaling symmetry lends particularly well to computer generated graphics - which is what we're doing here!
      There are many purely geometric examples of fractals - a few famous ones are the <a href="https://en.wikipedia.org/wiki/Sierpi%C5%84ski_triangle" target="_blank" rel="noopener noreferrer">Sierpinski Triangle</a>, <a href="https://en.wikipedia.org/wiki/Koch_snowflake" target="_blank" rel="noopener noreferrer">Koch Snowflake</a>, and <a href="https://en.wikipedia.org/wiki/Dragon_curve" target="_blank" rel="noopener noreferrer">Dragon Curve</a>.
      However, although they <i>technically</i> cannot be infinite, fractals also appear in nature. Think of a lightning bolt, a leaf vein, a coastline from above, or a branching tree - see how they resemble a fractal pattern?
      Such similarities have not gone unnoticed. In fact, it is a perfect segway into our next topic.</p>

      <h4>Our Drawing Instructions: L-Systems</h4>
      <p className="about-paragraph">
      Fractals can be drawn a few different ways, most of which involve recursion. However, we are using the specific method of the Lindenmayer System - or <a href="https://en.wikipedia.org/wiki/L-system" target="_blank" rel="noopener noreferrer">L-System</a>.

      What is an L-System? Another fantastic question! First and foremost, it's a language system that operates with a specific grammar. It consists of an "alphabet" that is used to write "production rules" that are used to generatively calculate a string of instructions, with a base case that the production rules are initially operated on (the axiom). 
      In the late 1960s, a botanist named Astrid Lindenmayer used L-Systems to describe plant cells, growth processes, and plant development. They are generally fairly simple, compared to what they produce, which is why they are so attractive for the kind of fractal generation we're doing here. Here is what they look like at a basic level:
      <br/>
      <br/>
      <div className="about-rules">
      <b>Alphabet:</b> A B
      <br/>
      <b>Axiom:</b> A
      <br/>
      <b>Rule 1:</b>A → ABA
      <br/>
      <b>Rule 2:</b>B → BB
      <br/><br/>
      n = 0: A
      <br/>
      n = 1: ABA
      <br/>
      n = 3: ABA BB ABA
      <br/>
      n = 4: ABA BB ABA BB BB ABA BB ABA
      <br/>
      </div>
      <br/>
      Our L-System, which is quite common for fractal generation, looks like this:

      
      <div className="about-rules">
      <h5>Terms:</h5><br/>
      <b>θ Theta:</b> This refers to the angle the lines turn.<br/>
      <b>Length:</b> This refers to the initial length of the line segment. It decreases with each generation.<br/>
      <b>Axiom:</b> This is the base rule.<br/>
      <b>Ruleset F:</b> For each encounter of 'F', these instructions are appended.<br/>
      <b>Ruleset G:</b> For each encounter of 'G', these instructions are appended.<br/>
      <h5>Rule Definitions:</h5>
      <b>F:</b> Move forward and draw a line.<br/>
      <b>G:</b> Move forward, but do not draw a line.<br/>
      <b>+:</b> Rotate at the angle defined by theta.<br/>
      <b>-:</b> Rotate at the angle opposite of theta.<br/>
      <b>[:</b> Save current state (push)<br/>
      <b>]:</b> Return to saved state (pop)<br/>
      </div>
      <br/>
      Based on the parameters passed in, we first calculate the string of instructions with a recursive function, and then draw them iteratively onto a canvas.
      </p>

      <h4>At this time, this application is designed to draw fractal trees.</h4>

      <p className="about-paragraph">Although all kinds of fractals can be drawn with L-Systems, this implementation of them works best with fractal trees. Due to fractal pattern's irregular scaling rate, we found that this was the most versatile for keeping 
        the drawing on the canvas (we want you to be able to see your lovely fractal creations!). The drawing point is currently fixed, but we hope to make it more dynamic in the future to be able to handle many types of fractals.</p>

      <h4>What was this site built with?</h4>
      <p>For the front end, we're using JavaScript with the React framework and the library of <a href="https://p5js.org/" target="_blank" rel="noopener noreferrer">P5.js</a> for graphics processing. For the back end, we're using Rails as an API. </p>

      <h5>Special Thanks</h5>
      <p className="about-paragraph"> Endless thanks to <a href="https://thecodingtrain.com/" target="_blank" rel="noopener noreferrer">Dan Shiffman</a>, for his enthusiasm for graphics processing. He is the reason we were able to implement this in such a short time span 
        (less than 5 days!). Without him, this application would not as shiny as it is. If you are interested, please look into his work - you will not be disappointed!
       </p> 
       
    </div>
  )
}

export default About;