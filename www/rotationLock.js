var exec = require('cordova/exec');

var RotationLock = {
    setOrientation : function(orientation) {
        exec(null, null, "RotationLock", "setOrientation", [ orientation ]);
    }
}

module.exports = RotationLock;