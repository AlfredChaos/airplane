import { _decorator, Component, Node, input, Input, EventTouch } from 'cc';
import { GameManager } from '../framework/GameManager';
const { ccclass, property } = _decorator;

@ccclass('UIMain')
export class UIMain extends Component {
    @property
    public planeSpeed = 1;

    @property(Node)
    public playerPlane: Node = null;

    @property(GameManager)
    public gameManager: GameManager = null;

    start() {
        this.node.on(Input.EventType.TOUCH_START, this._touchStart, this);
        this.node.on(Input.EventType.TOUCH_MOVE, this._touchMove, this);
        this.node.on(Input.EventType.TOUCH_END, this._touchEnd, this);
    }

    _touchStart(event: EventTouch) {
        this.gameManager.isShooting(true);
    }

    _touchMove(event: EventTouch) {
        const minxX = -23;
        const maxX = 23;
        const minZ = -39;
        const maxZ = 40;

        const delta = event.getDelta();
        let pos = this.playerPlane.position;

        var x = pos.x + 0.1 * this.planeSpeed * delta.x;
        var z = pos.z - 0.1 * this.planeSpeed * delta.y
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
        this.playerPlane.setPosition(x, pos.y, z);

    }

    _touchEnd(event: EventTouch) {
        this.gameManager.isShooting(false);
    }

    update(deltaTime: number) {

    }
}

