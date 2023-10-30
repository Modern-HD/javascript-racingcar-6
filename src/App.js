import { MissionUtils } from '@woowacourse/mission-utils';

/**
 * @typedef {{ name: string, move: number}} CarObject
 */

class App {
    async play() {}

    /**
     * @returns {Promise<string>}
     */
    async getInputNames() {
        return await MissionUtils.Console.readLineAsync(
            '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
        );
    }

    /**
     * @param {string} nameStr
     * @returns {string[]}
     */
    getSplittedName(nameStr) {
        return nameStr.split(',');
    }

    /**
     * @param {string[]} nameArr
     */
    nameValidate(nameArr) {
        if (!(nameArr instanceof Array && nameArr.length > 0)) {
            throw new Error('[ERROR] 하나 이상의 이름을 입력해주세요.');
        }
        if (nameArr.find(str => !(typeof str === 'string' && str.length > 0 && str.length <= 5)) !== undefined) {
            throw new Error('[ERROR] 1글자 이상, 5글자 이하의 이름만 사용 가능 합니다.');
        }
    }

    /**
     * @returns {Promise<number>}
     */
    async getInputTryCount() {
        return parseInt(await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n'));
    }

    /**
     * @param {number} tryCount
     */
    tryCountValidate(tryCount) {
        if (!(typeof tryCount === 'number' && tryCount !== NaN)) {
            throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
        }
        if (tryCount < 1) {
            throw new Error('[ERROR] 1 이상의 숫자를 입력해주세요.');
        }
    }

    /**
     * @param {string[]} nameArr
     * @returns {CarObject[]}
     */
    getCarObjArr(nameArr) {
        return nameArr.map(name => ({
            name,
            move: 0,
        }));
    }

    /**
     * @returns {number}
     */
    getRandomNumberForRacing() {
        return MissionUtils.Random.pickNumberInRange(0, 9);
    }

    /**
     * @param {CarObject} carObj
     * @param {number} randomNumber
     */
    moveCar(carObj, randomNumber) {
        if (randomNumber >= 4) {
            carObj.move++;
        }
    }

    /**
     * @param {CarObject} carObj
     */
    printCarStatus(carObj) {
        MissionUtils.Console.print(`${carObj.name} : ${'-'.repeat(carObj.move)}`);
    }

    /**
     * @param {CarObject[]} carObjArr
     */
    getMaxMoveCnt(carObjArr) {
        return Math.max(...carObjArr.map(({ move }) => move));
    }

    /**
     * @param {CarObject[]} carObjArr
     * @param {number} maxMove
     */
    filterWonCar(carObjArr, maxMove) {
        return carObjArr.filter(({ move }) => move === maxMove);
    }
}

export default App;
