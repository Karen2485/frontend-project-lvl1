#!/usr/bin/env node
import { getGameData, gameDescription } from '../src/games/calc.js';
import gameEngin from '../src/index.js';

gameEngin(getGameData, gameDescription);
