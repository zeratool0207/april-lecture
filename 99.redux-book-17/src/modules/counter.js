// 액션 타입 정의
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수 생성
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// counter 모듈의 초기 상태
const initialState = {
    number: 0
}

// 리듀서 함수 생성
function counter( state = initialState, action ) {
    switch(action.type) {
        case INCREASE:
            return {
                number: state.number + 1
            }
        case DECREASE:
            return {
                number: state.number - 1
            }   
        default:
            return state;
    }
}

export default counter;

// 불러오는 방식 다양함
// import counter from './counter';
// import { increase, decrease } from './counter';
// import counter, { increase, decrease } from './counter';