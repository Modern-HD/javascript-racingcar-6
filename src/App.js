import { MissionUtils } from '@woowacourse/mission-utils';

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
}

export default App;
