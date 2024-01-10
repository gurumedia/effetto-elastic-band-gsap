# effetto elastic band gsap

effetto elastic band gsap

This repository contains a JavaScript code snippet that demonstrates how to create an interactive animation effect using the GreenSock Animation Platform (GSAP). The code allows you to animate the shape of an SVG path element based on user mouse movements and interactions within a specific container element.

## Installation

1. Clone the repository or download the source code files.
2. Include the GSAP library in your HTML file by adding the following script tag:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
```

## Usage

1. Add the CSS class 'box' to the container element(s) where you want the interactive animation effect to be applied.
2. Inside each 'box' element, include an SVG path element that you want to animate.
3. Reference the provided JavaScript code in your HTML file by adding the following script tag:

```html
<script src="path/to/interactive-animation.js"></script>
```

## How It Works

1. The JavaScript code adds event listeners to wait for the HTML document to be loaded and the webpage's resources to finish loading.
2. It then selects all elements with the class 'box' and iterates over each element.
3. For each 'box' element, the code checks if it contains an SVG path element.
4. If a path element is found, the code initializes an object called 'tweens' to store values for animation.
5. Callback functions are set up for different mouse movements and interactions (mousemove, mouseenter, mouseleave) within the 'box' element.
6. When the user moves their mouse over the 'box' element, the 'onMouseMove' function is called to animate the 'y' and 'x' properties of the 'tweens' object based on the mouse movement.
7. When the user enters the 'box' element, the 'onMouseEnter' function is called to cancel any ongoing tweens/animations and set the 'time' property of the 'tweens' object to Math.PI / 2.
8. When the user leaves the 'box' element, the 'onMouseLeave' function is called to animate the 'y' and 'time' properties of the 'tweens' object to their initial values.
9. The 'updatePath' function is called by the animation methods to update the shape of the path element based on the 'x' and 'y' properties of the 'tweens' object.

## Customization

You can customize the animation behavior by modifying the duration, easing, and other parameters in the code. Additionally, you can apply different CSS styles or modify the SVG path element to suit your desired design.

## Dependencies

- GreenSock Animation Platform (GSAP) - [https://greensock.com/gsap/](https://greensock.com/gsap/)
