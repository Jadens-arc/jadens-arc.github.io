+++
title = 'What is Brainfuck + Ironmind'
date = 2024-02-21T16:45:57-08:00
draft = false
+++

## What is Brainfuck
It's an Esolang (Esoteric Programming Language). These languages are designed to be as hard to read and write as possible. They're mostly jokes but they are also a very useful tool for learning the absolute fundamentals of computer science.

Brainfuck works by performing operations on a turing machine. It has 8 main instructions

|
---------|------------------------------
&plus;   | Increment current cell by one
&minus;  | Decrement current cell by one
&GT;     | Move to the right cell 
&LT;     | Move to the left cell
&period; | Print current cell casted to ascii character
&comma;  | Get character input from user

It also implement loops with

|
---------|------------------------------
&lbrack; | Start a loop
&rbrack; | End a loop

When the instruction parser reaches the `]` it will check the value of the current cell. If the value of the current cell pointed at by the head is zero then the program flows like normal on to the next instruction. If the value is anything other than zero then the instruction parser will jump back to the start of the loop indicated by the `[`.

## Turing Machine
But what is a Turing Machine in the first place. It's an abstract model of computation first thought of by Alan Turing. It serves as the basis for understanding what can and can't be computed algorithmically. It revolves around a tape, which is a one dimensional array of memory and a head which points to a specific cell on the tape and can modify it. The head can also move across the tape to different cells. The head's behavior is guided by a set of instructions (a program) to perform such actions. It is said that any system that is Turing Complete can compute any algorithm that any other Turing Complete machine can. The hardware that makes up computers is Turing Complete and many things around us that you might not suspect are also Turing Complete including: water (additional hardware needed), Microsoft Powerpoints, and Minecraft Redstone. All of these things can theoretically perform any computation a normal computer can (with varying degrees of speed and reliability).

Brainfuck brings us right to the edge of computation. Any algorithm you can implement in a normal programming language you can be implement in Brainfuck. 


## What is Ironmind
Ironmind is my project to interpret Brainfuck instructions and visualize the execution of the program. For anyone looking to understand exactly what's happening inside the machine while their Brainfuck program is running this tool is for you. It allows you to set through your program state by state or jump to any given state of your program.

It's written in rust and prioritizes memory safety and efficiency. 

You can see how it works on 
[GitHub](https://github.com/jadens-arc/Ironmind)

Or you can download it from
[Crates.io](https://crates.io/crates/Ironmind)
by runnning
`cargo install ironmind`