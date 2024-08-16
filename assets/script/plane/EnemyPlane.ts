import { _decorator, Component, Node } from 'cc';
import { Constant } from '../framework/Constant';
const { ccclass, property } = _decorator;

const OUTOFBOUNCE = 50;

@ccclass('enemyPlane')
export class enemyPlane extends Component {
    private _enemySpeed = 0;

    start() {

    }

    update(deltaTime: number) {
        const pos = this.node.position;
        const movePos = pos.z + this._enemySpeed
        this.node.setPosition(pos.x, pos.y, movePos);

        if (movePos > OUTOFBOUNCE) {
            this.node.destroy();
        }
    }

    set_speed(speed: number) {
        this._enemySpeed = speed;
    }
}


