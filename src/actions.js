import * as constants from './constants'

export function roll () {return {type: constants.ROLL_DICE}}
export function reset () {return {type: constants.RESET_GAME}}
export function score_ones () {return {type: constants.SCORE_ONES}}
export function score_twos () {return {type: constants.SCORE_TWOS}}
export function score_threes () {return {type: constants.SCORE_THREES}}
export function score_fours () {return {type: constants.SCORE_FOURS}}
export function score_fives () {return {type: constants.SCORE_FIVES}}
export function score_sixes () {return {type: constants.SCORE_SIXES}}
