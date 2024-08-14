import { _decorator, Component, Node, input, Input, EventTouch } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SelfPlane')
export class SelfPlane extends Component {
    @property
    public speed = 1;

    start() {
        input.on(Input.EventType.TOUCH_MOVE, this._touchMove, this);
    }

    _touchMove(event: EventTouch) {
        const minxX = -23;
        const maxX = 23;
        const minZ = -39;
        const maxZ = 40;

        const delta = event.getDelta();
        let pos = this.node.position;

        var x = pos.x + 0.1 * this.speed * delta.x;
        var z = pos.z - 0.1 * this.speed * delta.y
        if (x < minxX) {
            x = minxX;
        } else if (x > maxX) {
            x = maxX;
        }
        if (z < minZ) {
            z = minZ;
        } else if (z > maxZ) {
            z = maxZ;
        }
        this.node.setPosition(x, pos.y, z);

    }

    update(deltaTime: number) {

    }
}

