import React, {Component, useState, useEffect} from 'react'
import {Line, SteppedLine, PolyLine, Circle, Rectangle} from 'draw-shape-reactjs';
import img from '../images/sample.jpg'

console.log(img)
class DrawContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 0
    }

    this.handleX1Change = this.handleX1Change.bind(this)
    this.handleY1Change = this.handleY1Change.bind(this)
    this.handleY2Change = this.handleY2Change.bind(this)
	this.handleX2Change = this.handleX2Change.bind(this)
    this.draw = this.draw.bind(this)
    this.drawImage = this.drawImage.bind(this)


  }

  componentDidMount() {
    this.canvas = document.getElementById('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.canvasX = this.canvas.offsetLeft
    this.canvasY = this.canvas.offsetTop
  }

  drawImage = () => {
	  console.log(img)
	this.ctx.clearRect(0,0,800,500);
    
    //this.backgroundImage = new Image()

    //this.backgroundImage.src = "http://localhost:3000/static/media/sample.b3f53dcb.jpg";

    //this.backgroundImage.onload = function() {
    //  this.ctx.drawImage(this.backgroundImage, 0, 0)
    //}
	this.draw()
  }
  draw = () => {
    this.ctx.setLineDash([2])

    this.ctx.strokeRect(this.state.x1, this.state.y1, this.state.x2, this.state.y2)
  }

handleX1Change(e) {
   this.setState({x1: e.target.value});
   console.log(this.state.x1);
}
handleY1Change(e) {
   this.setState({y1: e.target.value});
}

handleY2Change(e) {
   this.setState({y2: e.target.value});
}
handleX2Change(e) {
   this.setState({x2: e.target.value});
}

  render() {


    return (
	<div ><canvas id = "canvas" width = "800" height = "500" > </canvas>
	
		<form>
          <input type="text" name="x1" placeholder="x1"  onChange = {this.handleX1Change} />
          <input type="text" name="y1" placeholder="y1" onChange = {this.handleY1Change} />
		  <input type="text" name="x2" placeholder="x2"   onChange = {this.handleX2Change} />
		  <input type="text" name="y2" placeholder="y2"  onChange = {this.handleY2Change} />
          <button type="button" onClick={this.drawImage}>Draw Ractangle</button>
        </form>

      </div>
    )
  }
}

export default DrawContainer