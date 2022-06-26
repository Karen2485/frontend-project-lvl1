#!/usr/bin/env node
import { getGameData, gameDescription } from '../src/games/progression.js';
import gameEngin from '../src/index.js';

gameEngin(getGameData, gameDescription);
