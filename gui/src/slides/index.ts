import { Component } from 'solid-js';
import HelloWorld from './HelloWorld';
import StateOfAgents from './StateOfAgents';
import AgenticEngineering from './AgenticEngineering';
import VerifiableLoop from './VerifiableLoop';

export interface Slide {
  id: number;
  title: string;
  component: Component;
}

export const slides: Slide[] = [
  { id: 1, title: 'Hello World', component: HelloWorld },
  { id: 2, title: 'State of Coding with Agents', component: StateOfAgents },
  { id: 3, title: 'Agentic Engineering, not Vibe Coding', component: AgenticEngineering },
  { id: 4, title: 'Every Step Is Verifiable', component: VerifiableLoop },
];
