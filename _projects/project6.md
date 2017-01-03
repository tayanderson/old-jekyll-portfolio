---
layout: project

project-num: 6
title: Expressive Face Robot

description: The purpose for this project was to create an expressive robot prototype and analyze the human-robot interaction. The Expressive Face Robot is a robot that can display facial emotions. My team and I created two prototypes, one with a moveable body and one with a stationary body. The moveable version could move its "face" up-and-down as well as side-to-side. This prototype was designed to be used in a variety of applications. The stationary version has more of a "cute" appearance. The idea was for this prototype to be used in more specific scenarios such as a device for children or a emotional support device. Both prototypes were built with Arduino and Raspberry Pi. The exteriors were 3D-printed.

client: Academic
type: Human-Robot Interaction Study
responsibilities: Research, Programming, 3D Printing, Physical Components
date-completed: Fall 2015
---

##### Beginning Stages
Our purpose for this project was to create a robot that could respond to its user's emotions and observe the human-robot interaction. We wanted to know how people would feel about a robot that could read their emotions and respond accordingly and how would they use it. 

Thinking about its potential uses, we designed two different designs: A more general design that could be used in a variety of applications and a more specific design that could be used as more of a emotional companion or a companion for children.

The more general design consisted of a robot that could move its "head" up-down and side-to-side while the other was more static. 

Technical-wise, we decided to use a Raspberry Pi and a TFL Screen for the "face" of the robot. The robot's expressions would display on the screen. For the moveable prototype, along with the Raspberry Pi, we used an Ardunio Uno to control the movements of the robot.

<img src="../assets/images/project-imgs/project6/2015-11-17 10.29.31.jpg" class="indiv-proj-img">

##### Development + Physical Computing
Once we knew what we wanted to do, I got started building. I was in charge of all the hardware and programming parts of the project. 

While initially, we wanted the robot to be able to sense the user's emotions, we, unfortunately, had to simplify that feature because of time constraints. So, we opted for more of a manual way of telling the robot what emotion they are feeling by pushing certain buttons (happy, angry, sad, etc.).

The main (and hardest) part of the hardware portion of the project was getting the screen working with the Raspberry Pi. It took me several hours to get the screen working and displaying what I wanted it to. To do this, I had to install bunch of stuff on the Raspberry Pi to get it talking to the screen. 

Once I got the screen working, next I started working on making the buttons work with the screen. Each button was supposed to display a different emotion on the screen. I used a breadboard to get the buttons working before I soldered them to the screen.

As for the exterior of the robot, we decided to 3D print it because it was the easiest way to get all the hardware components to fit exactly how we wanted them to. We had to do several iterations of each design before we got them the way we wanted.

##### Finished Prototypes
While our prototypes weren't perfect, they were a good start for us if we wanted to do further research in this area of understanding the human-robot interaction between humans and expressive robots.

If I were to continue with this project, I would look further into adding a emotion sensing function for the robot. It would be a huge improvement if the robot could read the user's facial expressions or body language and behave depending on that. That would require us to add some sort of camera or sensor that is programmed to analyze the user's face and body language to determine what emotion the user is expressing. 

While that would improve the overall function of the robot, it would also raise some ethical/moral concerns. The robot would always be watching the user, which may make the user uncomfortable. If I were to do this, I must first address these possible issues to make the user more comfortable and more willing to use the robot. 