import { Component } from 'solid-js';
import HelloWorld from './HelloWorld';
import StateOfAgents from './StateOfAgents';
import AgenticEngineering from './AgenticEngineering';
import VerifiableLoop from './VerifiableLoop';
import CliFirst from './CliFIrst';
import LlmStructuredParser from './LlmStructuredParser';
import TypeDrivenDev from './TypeDrivenDev';
import ContextEngineering from './ContextEngineering';
import WhatYouOwn from './WhatYouOwn';

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
  { id: 5, title: 'CLI-First: Build the Pipeline Before the API', component: CliFirst },
  { id: 6, title: 'LLM as a Structured Parser', component: LlmStructuredParser },
  { id: 7, title: 'Type-Driven Development in Practice', component: TypeDrivenDev },
  { id: 8, title: 'Context Engineering', component: ContextEngineering },
  { id: 9, title: 'What You Own. What You Delegate.', component: WhatYouOwn },
];
