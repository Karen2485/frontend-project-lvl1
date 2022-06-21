#!/usr/bin/env node
import { generateGame, rules } from '../src/games/prog.js';
import gameEngin from '../src/index.js';

gameEngin(generateGame, rules);
