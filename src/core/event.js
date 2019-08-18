export class Events {
    _events = {};

    emit(name, ...data) {
        if (!this._events[name]) {
            return;
        }
        this._events[name].forEach((v) => {
            v.fun(...data);
            if (v.count > 0) {
                v.count -= 1;
            }
        });
        this._events[name] = this._events[name].filter((v) => {
            return v.count != 0;
        });
    }

    on(eName, fun, count = -1) {
        if (!eName) {
            return;
        }
        let nameInfo = eName.split('.');
        let name = nameInfo[0];
        if (!this._events[name]) {
            this._events[name] = [];
        }
        this._events[name].push({
            fun: fun,
            count: count,
            key: nameInfo[1],
        });
    }

    once(name, fun) {
        this.on(name, fun, 1);
    }

    off(eName, fun) {
        if (!eName) {
            return;
        }
        let nameInfo = eName.split('.');
        let name = nameInfo[0];
        let key = nameInfo[1];
        if (!this._events[name]) {
            return;
        }
        if (!key) {
            if (!fun) {
                this._events[name] = undefined;
                return;
            }
            this._events[name] = this._events[name].filter((v) => {
                return v.fun != fun;
            });
            return;
        }

        if (key) {
            if (fun) {
                this._events[name] = this._events[name].filter((v) => {
                    return v.key != key && v.fun == fun;
                });
                return;
            }
            this._events[name] = this._events[name].filter((v) => {
                return v.key != key;
            });
        }
    }
}

export default new Events();
