import { listOne } from './list-1'
import { listTwo } from './list-2'
import { listThree } from './list-3'

export const questionsOne = listOne;
export const questionsTwo = listTwo.concat(questionsOne);
export const questionsThree = listThree.concat(questionsTwo);
