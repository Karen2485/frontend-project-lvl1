#!/usr/bin/env node
import { generateGame, rules } from '../src/games/gcd.js';
import gameEngin from '../src/index.js';

gameEngin(generateGame, rules);
