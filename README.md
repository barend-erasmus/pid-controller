# PID Controller

A proportional–integral–derivative controller (PID controller or three term controller) is a control loop feedback mechanism widely used in industrial control systems and a variety of other applications requiring continuously modulated control.

![](https://github.com/barend-erasmus/pid-controller/raw/master/images/diagram.png)

## Proportional Controller

Proportional Controller gives an output which is proportional to the current error where the current error is calculated by subtracting the target from the current value. This type of controller tends to overshoot the target and ends up oscillating.

## Integral Controller

Integral Controller, as the name suggests, gives an output directly proportional to the integral of the current error. The combination of a Proportional Controller and Integral Controller is known as a Reset Controller as it will **eventually** reach the target.

## Derivative Controller

Derivative Controller cannot be used on its own as the output is directly proportional to the derivative of the current error. For this controller to work there needs to be a rate of change, called the derivative.

## Example Chart
![](https://github.com/barend-erasmus/pid-controller/raw/master/images/chart.png)

## Code Example


```javascript
const error = current - target;

const pTerm = error * pGain;

const dTerm = (error - previousError) * dGain;

previousError = error;

iTerm += error * iGain;

const output = pTerm + iTerm + dTerm;

return output;
```

## Where are PID Controllers used?

* Air Conditioning
* Cruise Control
* Two-Wheeled, Self-Balancing Scooter (Segway)
* Drone Flight Controller


## Useful Links

[Introduction to Derivatives](https://www.mathsisfun.com/calculus/derivatives-introduction.html)

[Introduction to Integration](https://www.mathsisfun.com/calculus/integration-introduction.html)

[Types of Controllers | Proportional Integral and Derivative Controllers](https://www.electrical4u.com/types-of-controllers-proportional-integral-derivative-controllers/)


