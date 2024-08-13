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
        const delta = event.getDelta();
        let pos = this.node.position;
        this.node.setPosition(pos.x + 0.1 * this.speed * delta.x, pos.y, pos.z - 0.1 * this.speed * delta.y);

    }

    update(deltaTime: number) {

    }
}

